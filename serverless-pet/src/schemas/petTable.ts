import { AWS } from "@serverless/typescript";

export const petTableName = "petTableFatec"

const petTable: AWS["resources"]["Resources"] = {
  PetsTableFatec: {
    Type: "AWS::DynamoDB::Table",
    Properties: {
      TableName: petTableName,
      KeySchema: [
        { AttributeName: "PetId", KeyType: "HASH" }
      ],
      AttributeDefinitions: [
        { AttributeName: "PetId", AttributeType: "S" }
      ],
      BillingMode: "PAY_PER_REQUEST"
    },
  },
};

export default petTable;
