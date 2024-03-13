import createStaffSchema from '@functions/staff/schemas/createStaffSchema';
import { APIGatewayProxyHandler } from 'aws-lambda';
import { DynamoDB } from 'aws-sdk';
import headers from 'src/utils/headers';
import { v4 as uuidv4 } from 'uuid';

const dynamoDb = new DynamoDB.DocumentClient();
const tableName = process.env.staffsTable;

export const createStaff: APIGatewayProxyHandler = async (event) => {
  try {
    const staffData = JSON.parse(event.body);
    const { error } = createStaffSchema.validate(staffData);

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
        StaffId: uuidv4(),
        ...staffData
      }
    };

    await dynamoDb.put(payload).promise();
    return {
      statusCode: 201,
      headers,
      body: JSON.stringify({ message: 'Staff created successfully', payload })
    };

  } catch (error) {
    console.error(error);
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ message: 'Error creating staff.', error }),
    };
  }
};