import { AWS } from "@serverless/typescript";

export const userTableName = "userTableFatec"

const userTable: AWS["resources"]["Resources"] = {
  UsersTableFatec: {
    Type: "AWS::DynamoDB::Table",
    Properties: {
      TableName: userTableName,
      KeySchema: [
        { AttributeName: "UserId", KeyType: "HASH" }
      ],
      AttributeDefinitions: [
        { AttributeName: "UserId", AttributeType: "S" },
        // Add more attribute definitions here as needed
      ],
      BillingMode: "PAY_PER_REQUEST",
      // Define your desired provisioned throughput, if applicable
      // ProvisionedThroughput: {
      //   ReadCapacityUnits: 5,
      //   WriteCapacityUnits: 5,
      // },
    },
  },
};

export default userTable;
