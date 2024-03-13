import { APIGatewayProxyHandler } from 'aws-lambda';
import { DynamoDB } from 'aws-sdk';
import headers from 'src/utils/headers';

const dynamoDb = new DynamoDB.DocumentClient();
const tableName = process.env.staffsTable;

export const deleteStaff: APIGatewayProxyHandler = async (event) => {
  try {
    const staffId = event.pathParameters?.id;

    if (!staffId) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({ message: 'Staff ID must be provided' }),
      };
    }

    const params = {
      TableName: tableName,
      Key: {
        StaffId: staffId,
      },
    };

    await dynamoDb.delete(params).promise();

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({ message: 'Staff deleted successfully' }),
    };
  } catch (error) {
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ message: 'Error deleting staff.', error }),
    };
  }
};