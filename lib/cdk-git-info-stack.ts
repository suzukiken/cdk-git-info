import { Stack, StackProps, CfnOutput } from 'aws-cdk-lib';
import { Construct } from 'constructs';

interface MyStackProps extends StackProps {
  branch: string,
  commit: string
}

export class CdkGitInfoStack extends Stack {
  constructor(scope: Construct, id: string, props: MyStackProps) {
    super(scope, id, props);
    
    const stage = this.node.tryGetContext('stage')
    const stageParams = this.node.tryGetContext(stage)

    new CfnOutput(this, 'GitBranch', { 
      value: props.branch
    })
    
    new CfnOutput(this, 'GitCommit', { 
      value: props.commit
    })
    
    new CfnOutput(this, 'CdkStage', { 
      value: stage
    })
    
    new CfnOutput(this, 'CdkStageParams', { 
      value: JSON.stringify(stageParams)
    })
  }
}
