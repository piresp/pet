import { AWS } from "@serverless/typescript";

export const staffTableName = "staffTableFatec"

const staffTable: AWS["resources"]["Resources"] = {
  StaffTableFatec: {
    Type: "AWS::DynamoDB::Table",
    Properties: {
      TableName: staffTableName,
      KeySchema: [
        { AttributeName: "StaffId", KeyType: "HASH" }
      ],
      AttributeDefinitions: [
        { AttributeName: "StaffId", AttributeType: "S" },
        { AttributeName: "Email", AttributeType: "S" } // Add Email to attribute definitions
      ],
      GlobalSecondaryIndexes: [  // Add this section for the GSI
        {
          IndexName: "EmailIndex",
          KeySchema: [
            { AttributeName: "Email", KeyType: "HASH" }
          ],
          Projection: {
            ProjectionType: "ALL"
          }
        }
      ],
      BillingMode: "PAY_PER_REQUEST",
    },
  },
};

export default staffTable;
