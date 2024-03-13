import { APIGatewayProxyHandler } from 'aws-lambda';
import { DynamoDB } from 'aws-sdk';
import headers from 'src/utils/headers';

const dynamoDb = new DynamoDB.DocumentClient();
const tableName = process.env.petsTable;

export const getAllPets: APIGatewayProxyHandler = async () => {
  try {
    const result = await dynamoDb.scan({ TableName: tableName }).promise();
    
    if (result.Items) {
      return {
        statusCode: 200,
        headers,
        body: JSON.stringify({ message: 'Pets fetched successfully', pets: result.Items }),
      };
    } else {
      return {
        statusCode: 404,
        headers,
        body: JSON.stringify({ message: 'No pets found' }),
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
