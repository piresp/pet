import { AWS } from "@serverless/typescript";

import { userTableName } from "@schemas/userTable";
import { petTableName } from "@schemas/petTable";
import { staffTableName } from "@schemas/staffTable";

const region = 'sa-east-1';

const provider: AWS["provider"] = {
  name: 'aws',
  runtime: 'nodejs16.x',
  region,
  apiGateway: {
    minimumCompressionSize: 1024,
    shouldStartNameWithService: true,
  },
  environment: {
    AWS_NODEJS_CONNECTION_REUSE_ENABLED: '1',
    NODE_OPTIONS: '--enable-source-maps --stack-trace-limit=1000',
    usersTable: userTableName,
    petsTable: petTableName,
    staffsTable: staffTableName
  },
  iam: {
    role: {
      statements: [
        {
          Effect: 'Allow',
          Action: [
            'dynamodb:DescribeTable',
            'dynamodb:Query',
            'dynamodb:Scan',
            'dynamodb:GetItem',
            'dynamodb:PutItem',
            'dynamodb:UpdateItem',
            'dynamodb:DeleteItem',
          ],
          Resource: [
            `arn:aws:dynamodb:${region}:*:table/${userTableName}`,
            `arn:aws:dynamodb:${region}:*:table/${petTableName}`,
            `arn:aws:dynamodb:${region}:*:table/${staffTableName}`,
            `arn:aws:dynamodb:${region}:*:table/${staffTableName}/index/EmailIndex`,
          ],
        },
      ],
    },
  },
};

export default provider;