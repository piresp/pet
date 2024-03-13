import { APIGatewayProxyHandler } from 'aws-lambda';
import { DynamoDB } from 'aws-sdk';
import headers from 'src/utils/headers';

const dynamoDb = new DynamoDB.DocumentClient();
const tableName = process.env.petsTable;

export const deletePet: APIGatewayProxyHandler = async (event) => {
  try {
    const petId = event.pathParameters?.id;

    if (!petId) {
      return {
        statusCode: 400,
         headers,
        body: JSON.stringify({ message: 'PetId must be provided' }),
      };
    }

    const params = {
      TableName: tableName,
      Key: {
        PetId: petId,
      },
    };

    await dynamoDb.delete(params).promise();

    return {
      statusCode: 200,
       headers,
      body: JSON.stringify({ message: 'Pet deleted successfully' }),
    };
  } catch (error) {
    console.error(error);
    return {
      statusCode: 500,
       headers,
      body: JSON.stringify({ message: 'Error deleting pet.', error }),
    };
  }
};
