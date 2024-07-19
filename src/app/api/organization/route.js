import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/db';

export async function GET(req) {
  try {
    const data = await prisma.organization.findMany();
    return NextResponse.json({ data });
  } catch (error) {
    return NextResponse.json({
      message: "Error Getting Data",
    });
  }
}
