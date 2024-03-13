import updatePetSchema from '@functions/pet/schemas/updatePetSchema';
import { APIGatewayProxyHandler } from 'aws-lambda';
import { DynamoDB } from 'aws-sdk';
import { UpdateItemInput } from 'aws-sdk/clients/dynamodb';
import headers from 'src/utils/headers';
import { getExpressionAttributeNames, getExpressionAttributeValues, getUpdateExpression } from 'src/utils/patch-formatter';

const dynamoDb = new DynamoDB.DocumentClient();
const tableName = process.env.petsTable;

export const patchPet: APIGatewayProxyHandler = async (event) => {
  try {
    const petId = event.pathParameters?.id;

    if (!petId) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({ message: 'User ID must be provided' }),
      };
    }

    const petData = JSON.parse(event.body);
    const { error } = updatePetSchema.validate(petData);

    if (error) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({ message: `Validation failed: ${error.message}` }),
      };
    }

    const updateExpression = getUpdateExpression(petData)
    const expressionAttributeNames = getExpressionAttributeNames(petData)
    const expressionAttributeValues = getExpressionAttributeValues(petData)
    
    const updateParams: UpdateItemInput = {
      TableName: tableName,
      Key: {
        PetId: petId,
      } as any,
      UpdateExpression: `SET ${updateExpression}`,
      ExpressionAttributeNames: expressionAttributeNames,
      ExpressionAttributeValues: expressionAttributeValues,
      ReturnValues: "ALL_NEW",
    };

    const result = await dynamoDb.update(updateParams).promise();

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({ message: 'Pet updated successfully', result }),
    };
  } catch (error) {
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ message: 'Error updating pet.', error }),
    };
  }
};
