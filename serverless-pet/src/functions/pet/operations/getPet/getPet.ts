import { APIGatewayProxyHandler } from 'aws-lambda';
import { DynamoDB } from 'aws-sdk';
import headers from 'src/utils/headers';

const dynamoDb = new DynamoDB.DocumentClient();
const tableName = process.env.petsTable;

export const getPet: APIGatewayProxyHandler = async (event) => {
  try {
    const petId = event.pathParameters?.id;

    if (!petId) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({ message: 'Pet Id must be provided' }),
      };
    }

    const result = await dynamoDb.get({ 
      TableName: tableName, 
      Key: { PetId: petId }
    }).promise();

    if (result.Item) {
      return {
        statusCode: 200,
        headers,
        body: JSON.stringify({ message: 'Pet fetched successfully', pet: result.Item }),
      };
    } else {
      return {
        statusCode: 404,
        headers,
        body: JSON.stringify({ message: 'Pet not found' }),
      };
    }

  } catch (error) {
    console.error(error);
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ message: 'Error fetching pet.', error }),
    };
  }
};