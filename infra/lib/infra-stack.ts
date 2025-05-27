import * as cdk from 'aws-cdk-lib';
import { Tags } from 'aws-cdk-lib';
import { Construct } from 'constructs';

export class QuantumFortisInventoryStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // ✅ Add default AWS resource tag
    Tags.of(this).add('Project', 'QuantumFortis');

    // 🧱 Add resources here in the future
  }
}

