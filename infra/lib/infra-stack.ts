import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as lambda from 'aws-cdk-lib/aws-lambda';
import * as apigw from 'aws-cdk-lib/aws-apigateway';
import * as iam from 'aws-cdk-lib/aws-iam';
import * as path from 'path';

export class InfraStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // Lambda function using local index.js
    const listKeys = new lambda.Function(this, 'ListKeysFn', {
      runtime: lambda.Runtime.NODEJS_20_X,
      handler: 'index.handler',
      code: lambda.Code.fromAsset(path.join(__dirname, '../../lambda')),
      timeout: cdk.Duration.seconds(15),
    });

    // ✅ Add permission to call KMS
    listKeys.addToRolePolicy(new iam.PolicyStatement({
      actions: ['kms:ListKeys'],
      resources: ['*'],
    }));

    // API Gateway exposing the Lambda
    new apigw.LambdaRestApi(this, 'InventoryApi', {
      handler: listKeys,
    });
  }
}
