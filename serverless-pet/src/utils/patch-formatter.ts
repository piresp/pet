export const getUpdateExpression = (inputData: object) => {
  return Object.keys(inputData).map(attr => `#${attr} = :${attr}`).join(", ");
}

export const getExpressionAttributeNames = (inputData: object) => {
  return Object.fromEntries(Object.keys(inputData).map(attr => [`#${attr}`, attr]));
}

export const getExpressionAttributeValues = (inputData: object) => {
  return Object.fromEntries(Object.keys(inputData).map(attr => [`:${attr}`, inputData[attr]]));
}
