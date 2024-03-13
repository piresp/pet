import { APIGatewayProxyHandler } from 'aws-lambda';
import { DynamoDB } from 'aws-sdk';
import headers from 'src/utils/headers';

const dynamoDb = new DynamoDB.DocumentClient();
const tableName = process.env.usersTable;

export const getUser: APIGatewayProxyHandler = async (event) => {
  try {
    const userId = event.pathParameters?.id;

    if (!userId) {
      return {
        statusCode: 400,
        body: JSON.stringify({ message: 'User Id must be provided' }),
      };
    }

    const result = await dynamoDb.get({
      TableName: tableName,
      Key: { UserId: userId }
    }).promise();

    if (result.Item) {
      return {
        statusCode: 200,
        headers,
        body: JSON.stringify({ message: 'User fetched successfully', user: result.Item }),
      };
    } else {
      return {
        statusCode: 404,
        headers,
        body: JSON.stringify({ message: 'User not found' }),
      };
    }

  } catch (error) {
    console.error(error);
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ message: 'Error fetching user.', error }),
    };
  }
};