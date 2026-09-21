import { NextResponse } from 'next/server';
import { visitSchema } from '@/lib/validators';
import { createVisit } from '@/lib/data-service';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const validatedData = visitSchema.parse(body);

    const visit = await createVisit(validatedData);

    return NextResponse.json({ success: true, visit }, { status: 201 });
  } catch (error: any) {
    if (error.name === 'ZodError') {
      return NextResponse.json(
        { success: false, errors: error.errors },
        { status: 400 }
      );
    }
    return NextResponse.json(
      { success: false, message: error.message || 'Internal Server Error' },
      { status: 500 }
    );
  }
}
