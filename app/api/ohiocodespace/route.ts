import { NextResponse } from 'next/server';
import path from 'path';
import { promises as fs } from 'fs';

export async function GET() {
  try {
    const filePath = path.join(process.cwd(), 'public', 'ohiocodespace.json');
    const fileContent = await fs.readFile(filePath, 'utf8');
    const data = JSON.parse(fileContent);

    return NextResponse.json(data);
  } catch (error) {
    console.error('Error reading ohiocodespace.json:', error);
    return NextResponse.json({ error: 'Failed to fetch business info' }, { status: 500 });
  }
}
