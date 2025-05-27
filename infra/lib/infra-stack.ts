import { Tags } from 'aws-cdk-lib';

export class QuantumFortisInventoryStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // ✅ Tag all resources with the project name
    Tags.of(this).add('Project', 'QuantumFortis');
  }
}

