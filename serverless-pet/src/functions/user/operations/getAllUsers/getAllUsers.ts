import { APIGatewayProxyHandler } from 'aws-lambda';
import { DynamoDB } from 'aws-sdk';
import headers from 'src/utils/headers';

const dynamoDb = new DynamoDB.DocumentClient();
const tableName = process.env.usersTable;

export const getAllUsers: APIGatewayProxyHandler = async () => {
  try {
    const result = await dynamoDb.scan({ TableName: tableName }).promise();

    if (result.Items) {
      return {
        statusCode: 200,
        headers,
        body: JSON.stringify({ message: 'Users fetched successfully', users: result.Items }),
      };
    } else {
      return {
        statusCode: 404,
        headers,
        body: JSON.stringify({ message: 'No users found' }),
      };
    }

  } catch (error) {
    console.error(error);
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ message: 'Error fetching users.', error }),
    };
  }
};
