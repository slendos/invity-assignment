import { client } from './client';

export async function getFibonacciNumber(number: number) {
  const response = await client.v1.fibonacci.$get({ query: { number: number.toString() } });

  return await response.json();
}
