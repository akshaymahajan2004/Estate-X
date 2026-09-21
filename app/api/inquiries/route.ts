import { NextResponse } from 'next/server';
import { inquirySchema } from '@/lib/validators';
import { createInquiry } from '@/lib/data-service';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const validatedData = inquirySchema.parse(body);

    const inquiry = await createInquiry(validatedData);

    return NextResponse.json({ success: true, inquiry }, { status: 201 });
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
