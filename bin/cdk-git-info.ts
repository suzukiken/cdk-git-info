#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { CdkGitInfoStack } from '../lib/cdk-git-info-stack';
import * as util from 'util'
import * as childProcess from 'child_process'

const exec = util.promisify(childProcess.exec)

async function main() {
  let resBranch = await exec('git rev-parse --abbrev-ref HEAD')
  const gitBranch = resBranch.stdout.trim()

  let resCommit = await exec('git rev-parse HEAD')
  const gitCommit = resCommit.stdout.trim()
  
  const app = new cdk.App()
  
  new CdkGitInfoStack(app, 'CdkGitInfoStack', {
    env: { 
      account: process.env.CDK_DEFAULT_ACCOUNT, 
      region: process.env.CDK_DEFAULT_REGION 
    },
    branch: gitBranch,
    commit: gitCommit
  })
}

main().catch(e => console.log(e))