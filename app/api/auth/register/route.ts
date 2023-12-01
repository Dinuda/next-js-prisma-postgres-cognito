import { NextResponse } from "next/server";

import { sendSESEmail } from "@/lib/aws/ses";
import { create } from "@services/parentUserService";
import toast from "react-hot-toast";

export async function POST(req: Request) {
  try {
    const { email, phone, name } = await req.json();
    const user = await create(email, phone, name);
    
    sendSESEmail(
      `Your verification code is `,
      user.email,
      "Verify your account"
    );
    console.log(user);
    
    return NextResponse.json(user);
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: "User already exists" }, { status: 400 });
  }
}

