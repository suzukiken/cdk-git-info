#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { CdkGitInfoStack } from '../lib/cdk-git-info-stack';
import * as util from 'util'
import * as childProcess from 'child_process'

const exec = util.promisify(childProcess.exec)

async function main() {
  const resBranch = await exec('git rev-parse --abbrev-ref HEAD')
  const gitBranch = resBranch.stdout.trim()
  
  const resCommit = await exec('git rev-parse HEAD')
  const gitCommit = resCommit.stdout.trim()
  
  const resRemoteUrl = await exec('git config --get remote.origin.url')
  const gitRemoteUrl = resRemoteUrl.stdout.trim()
  
  const app = new cdk.App()
  let params = {}
  
  let stage = app.node.tryGetContext('stage')
  if (stage === undefined) {
    stage = ''
  } else {
    params = app.node.tryGetContext(stage)
  }
  if (params === undefined) {
    params = {}
  }
  
  new CdkGitInfoStack(app, 'CdkGitInfoStack', {
    env: { 
      account: process.env.CDK_DEFAULT_ACCOUNT, 
      region: process.env.CDK_DEFAULT_REGION 
    },
    branch: gitBranch,
    commit: gitCommit,
    remoteUrl: gitRemoteUrl,
    stage: stage,
    params: params
  })
}

main().catch(e => console.log(e))