import { Stack, StackProps, CfnOutput } from 'aws-cdk-lib';
import { Construct } from 'constructs';

interface DeployInfoStackProps extends StackProps {
  stage: string,
  params: object,
  branch: string,
  commit: string,
  remoteUrl: string
}

export class CdkGitInfoStack extends Stack {
  constructor(scope: Construct, id: string, props: DeployInfoStackProps) {
    super(scope, id, props);

    new CfnOutput(this, 'GitBranch', { 
      value: props.branch
    })
    
    new CfnOutput(this, 'GitCommit', { 
      value: props.commit
    })
    
    new CfnOutput(this, 'GitRemoteUrl', { 
      value: props.remoteUrl
    })
    
    new CfnOutput(this, 'CdkStage', { 
      value: props.stage
    })
    
    new CfnOutput(this, 'CdkParams', { 
      value: JSON.stringify(props.params)
    })
  }
}
