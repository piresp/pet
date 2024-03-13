import createPetSchema from '@functions/pet/schemas/createPetSchema';
import { APIGatewayProxyHandler } from 'aws-lambda';
import { DynamoDB } from 'aws-sdk';
import headers from 'src/utils/headers';
import { v4 as uuidv4 } from 'uuid';

const dynamoDb = new DynamoDB.DocumentClient();
const petTableName = process.env.petsTable;
const userTableName = process.env.usersTable;

export const createPet: APIGatewayProxyHandler = async (event) => {
  try {
    const petData = JSON.parse(event.body);
    const { error } = createPetSchema.validate(petData);

    if (!event.body) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({ message: 'Missing request body' }),
      };
    }

    if (error) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({ message: `Validation failed: ${error.message}` }),
      };
    }

    const userExistsParams = {
      TableName: userTableName,
      Key: {
        UserId: petData.UserId
      }
    };

    const userResult = await dynamoDb.get(userExistsParams).promise();

    if (!userResult.Item) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({ message: 'UserId does not exist in users table' }),
      };
    }

    const payload = {
      TableName: petTableName,
      Item: {
        PetId: uuidv4(),
        ...petData
      }
    };

    await dynamoDb.put(payload).promise();
    return {
      statusCode: 201,
      headers,
      body: JSON.stringify({ message: 'Pet created successfully', payload })
    };

  } catch (error) {
    console.error(error);
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ message: 'Error creating pet.', error }),
    };
  }
};
