import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const reqBody = await request.json();

  try {
    await sql`INSERT INTO Post (title, content, published) VALUES (${reqBody.title}, ${reqBody.content}, ${reqBody.published});`;
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }

  const posts = await sql`SELECT * FROM Post;`;
  return NextResponse.json({ posts: posts }, { status: 200 });
}