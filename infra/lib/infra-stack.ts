import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as lambda from 'aws-cdk-lib/aws-lambda';
import * as apigw from 'aws-cdk-lib/aws-apigateway';
import * as iam from 'aws-cdk-lib/aws-iam';
import * as ddb from 'aws-cdk-lib/aws-dynamodb';
import * as path from 'path';

export class InfraStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // ✅ DynamoDB Table
    const inventory = new ddb.Table(this, 'KeyInventory', {
      partitionKey: { name: 'keyId', type: ddb.AttributeType.STRING },
      billingMode: ddb.BillingMode.PAY_PER_REQUEST,
    });

    // ✅ Lambda Function
    const listKeys = new lambda.Function(this, 'ListKeysFn', {
      runtime: lambda.Runtime.NODEJS_20_X,
      handler: 'index.handler',
      code: lambda.Code.fromAsset(path.join(__dirname, '../../lambda')),
      timeout: cdk.Duration.seconds(15),
      environment: {
        KEY_TABLE: inventory.tableName,
      },
    });

    // ✅ KMS Permission
    listKeys.addToRolePolicy(new iam.PolicyStatement({
      actions: ['kms:ListKeys'],
      resources: ['*'],
    }));

    // ✅ DynamoDB Permission
    inventory.grantWriteData(listKeys);

    // ✅ API Gateway
    new apigw.LambdaRestApi(this, 'InventoryApi', {
      handler: listKeys,
    });
  }
}

