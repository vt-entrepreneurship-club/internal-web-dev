import { Redis } from '@upstash/redis';
import { NextResponse } from 'next/server';

// Initialize Redis
const redis = Redis.fromEnv();

export const POST = async (request: Request) => {
  // Fetch data from Redis
  
  const reqJson = await request.json();
  console.log(reqJson)

  const {email} = reqJson;

  console.log(await redis.lrange("emails", 0, -1));
  
  const result = await redis.lpush("emails", email);
  
  // Return the result in the response
  return new NextResponse(JSON.stringify({ result }), { status: 200 });
};