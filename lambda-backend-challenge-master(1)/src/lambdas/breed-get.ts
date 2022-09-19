import fetch from 'node-fetch'
import { Response } from './types'

interface RandomResponse extends Response {
  body: BreedApi
}

interface ErrorResponse extends Response {
  message: string
}

interface BreedApi {
  message: string []
  status: string
}

export async function handler(): Promise<RandomResponse | ErrorResponse> {
  try {
    const res = await fetch('https://dog.ceo/api/breeds/list/all')
    const temp = await res.json()

    const payload: BreedApi = {
      message: [],
      status: "200"
    };
    Object.keys(temp).forEach(function(key){
      payload.message.push(`${key}: ${temp[key]}`);
    });

    return {
      statusCode: 200,
      body: payload,
    }

  } catch (err: unknown) {
    return {
      statusCode: 500,
      message: 'Something went wrong',
    }
  }
}
