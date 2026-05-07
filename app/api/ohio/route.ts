import { NextResponse } from 'next/server';
import path from 'path';
import { promises as fs } from 'fs';

export async function GET() {
  try {
    // Read the JSON file from the public directory
    const filePath = path.join(process.cwd(), 'public', 'ohio.json');
    const fileContent = await fs.readFile(filePath, 'utf8');
    const data = JSON.parse(fileContent);

    return NextResponse.json(data);
  } catch (error) {
    console.error('Error reading ohio.json:', error);
    return NextResponse.json({ error: 'Failed to fetch info' }, { status: 500 });
  }
}
