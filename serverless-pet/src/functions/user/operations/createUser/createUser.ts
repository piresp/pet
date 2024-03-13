import User from '@functions/user/models/userModel';
import createUserSchema from "@functions/user/schemas/createUserSchema";
import { APIGatewayProxyHandler } from 'aws-lambda';
import { DynamoDB } from 'aws-sdk';
import headers from 'src/utils/headers';
import { v4 as uuidv4 } from 'uuid';

const dynamoDb = new DynamoDB.DocumentClient();
const tableName = process.env.usersTable;

export const createUser: APIGatewayProxyHandler = async (event) => {
  try {
    const userData: User = JSON.parse(event.body);
    const { error } = createUserSchema.validate(userData);

    if (error) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({ message: `Validation failed: ${error.message}` }),
      };
    }

    const payload = {
      TableName: tableName,
      Item: {
        UserId: uuidv4(),
        ...userData
      }
    };

    await dynamoDb.put(payload).promise();
    return {
      statusCode: 201,
      headers,
      body: JSON.stringify({ message: 'User created successfully', payload })
    };

  } catch (error) {
    console.error(error);
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ message: 'Error creating user.', error }),
    };
  }
};