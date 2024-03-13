import { APIGatewayProxyHandler } from 'aws-lambda';
import { DynamoDB } from 'aws-sdk';
import headers from 'src/utils/headers';

const dynamoDb = new DynamoDB.DocumentClient();
const tableName = process.env.usersTable;

export const deleteUser: APIGatewayProxyHandler = async (event) => {
  try {
    const userId = event.pathParameters?.id;

    if (!userId) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({ message: 'User ID must be provided' }),
      };
    }

    const params = {
      TableName: tableName,
      Key: {
        UserId: userId,
      },
    };

    await dynamoDb.delete(params).promise();

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({ message: 'User deleted successfully' }),
    };
  } catch (error) {
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ message: 'Error deleting user.', error }),
    };
  }
};