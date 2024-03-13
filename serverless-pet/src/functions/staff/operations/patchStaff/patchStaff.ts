
import updateStaffSchema from '@functions/staff/schemas/updateStaffSchema';
import { APIGatewayProxyHandler } from 'aws-lambda';
import { DynamoDB } from 'aws-sdk';
import { UpdateItemInput } from 'aws-sdk/clients/dynamodb';
import headers from 'src/utils/headers';
import { getExpressionAttributeNames, getExpressionAttributeValues, getUpdateExpression } from 'src/utils/patch-formatter';

const dynamoDb = new DynamoDB.DocumentClient();
const tableName = process.env.staffsTable;

export const patchStaff: APIGatewayProxyHandler = async (event) => {
  try {
    const staffId = event.pathParameters?.id;

    if (!staffId) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({ message: 'Staff ID must be provided' }),
      };
    }

    const staffData = JSON.parse(event.body);
    const { error } = updateStaffSchema.validate(staffData);

    if (error) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({ message: `Validation failed: ${error.message}` }),
      };
    }

    const updateExpression = getUpdateExpression(staffData)
    const expressionAttributeNames = getExpressionAttributeNames(staffData)
    const expressionAttributeValues = getExpressionAttributeValues(staffData)

    const updateParams: UpdateItemInput = {
      TableName: tableName,
      Key: {
        StaffId: staffId,
      } as any,
      UpdateExpression: `SET ${updateExpression}`,
      ExpressionAttributeNames: expressionAttributeNames,
      ExpressionAttributeValues: expressionAttributeValues,
      ReturnValues: "ALL_NEW",
    };

    const result = await dynamoDb.update(updateParams).promise();

    return {
      statusCode: 200,
       headers,
      body: JSON.stringify({ message: 'Staff updated successfully', result }),
    };
  } catch (error) {
    return {
      statusCode: 500,
       headers,
      body: JSON.stringify({
        message: 'Error updating staff.',
        error: error.message
      }),
    };
  }
};
