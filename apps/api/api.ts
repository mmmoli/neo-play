import { APIGatewayEvent } from 'aws-lambda';
import { Response } from 'aws-serverless-express';

export async function handler(event: APIGatewayEvent): Promise<Response> {
  try {
    const subject = event.queryStringParameters?.name || 'World';
    return {
      statusCode: 200,
      body: JSON.stringify({ message: `YO ${subject}` }),
      headers: {},
    };
  } catch (err) {
    return {
      body: err.toString(),
      headers: {},
      statusCode: 500,
    };
  }
}
