import User from '@functions/user/models/userModel';
import updateUserSchema from '@functions/user/schemas/updateUserSchema';
import { APIGatewayProxyHandler } from 'aws-lambda';
import { DynamoDB } from 'aws-sdk';
import { UpdateItemInput } from 'aws-sdk/clients/dynamodb';
import headers from 'src/utils/headers';
import { getExpressionAttributeNames, getExpressionAttributeValues, getUpdateExpression } from 'src/utils/patch-formatter';

const dynamoDb = new DynamoDB.DocumentClient();
const tableName = process.env.usersTable;

export const patchUser: APIGatewayProxyHandler = async (event) => {
  try {
    const userId = event.pathParameters?.id;

    if (!userId) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({ message: 'User ID must be provided' }),
      };
    }

    const userData: User = JSON.parse(event.body);
    const { error } = updateUserSchema.validate(userData);

    if (error) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({ message: `Validation failed: ${error.message}` }),
      };
    }

    const updateExpression = getUpdateExpression(userData)
    const expressionAttributeNames = getExpressionAttributeNames(userData)
    const expressionAttributeValues = getExpressionAttributeValues(userData)

    const updateParams: UpdateItemInput = {
      TableName: tableName,
      Key: {
        UserId: userId,
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
      body: JSON.stringify({ message: 'User updated successfully', result }),
    };
  } catch (error) {
    console.error(error);
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({
        message: 'Error updating staff.',
        error: error.message
      }),
    };
  }
};
