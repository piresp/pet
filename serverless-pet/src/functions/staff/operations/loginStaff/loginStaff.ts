import { APIGatewayProxyHandler } from 'aws-lambda';
import { DynamoDB } from 'aws-sdk';
import headers from 'src/utils/headers';

const dynamoDb = new DynamoDB.DocumentClient();
const staffTableName = process.env.staffsTable;

export const loginStaff: APIGatewayProxyHandler = async (event) => {
  try {
    const loginData = JSON.parse(event.body);

    if (!loginData.Email || !loginData.Password) {
      return {
        statusCode: 400,
         headers,
        body: JSON.stringify({ message: 'Email and Password are required' }),
      };
    }

    const params = {
      TableName: staffTableName,
      IndexName: "EmailIndex",
      KeyConditionExpression: "Email = :emailVal",
      ExpressionAttributeValues: {
        ":emailVal": loginData.Email
      }
    };

    const staffResult = await dynamoDb.query(params).promise();

    if (!staffResult.Items || staffResult.Items.length === 0) {
      return {
        statusCode: 400,
         headers,
        body: JSON.stringify({ message: 'Staff not found' }),
      };
    }

    const staff = staffResult.Items[0];

    if (loginData.Password !== staff.Password) {
      return {
        statusCode: 401,
         headers,
        body: JSON.stringify({ message: 'Incorrect password' }),
      };
    }

    return {
      statusCode: 200,
       headers,
      body: JSON.stringify({ message: 'Login successful' }),
    };

  } catch (error) {
    console.error(error);
    return {
      statusCode: 500,
       headers,
      body: JSON.stringify({ message: 'Error logging in.', error }),
    };
  }
};