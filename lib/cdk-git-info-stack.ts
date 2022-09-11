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

    new CfnOutput(this, 'GitBranch', { 
      exportName: id + 'GitBranch', 
      value: props.branch
    })
    
    new CfnOutput(this, 'GitCommit', { 
      exportName: id + 'GitCommit', 
      value: props.commit
    })
    
    new CfnOutput(this, 'CdkStage', { 
      exportName: id + 'CdkStage', 
      value: stage
    })
  }
}
