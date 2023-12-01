import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

import { sendSESEmail } from "@/lib/aws/ses";

export async function POST(req: Request) {
  const { email, phone, name } = await req.json();
  const exists = await prisma.parentUser.findUnique({
    where: {
      email,
    },
  });
  if (exists) {
    return NextResponse.json({ error: "User already exists" }, { status: 400 });
  } else {
    const user = await prisma.parentUser.create({
      data: {
        email,
        phone,
        name,
        organization: { connect: { id: "1" } },
        accountVerified: false,
      },
    });
    sendSESEmail("test", email, "test");
    return NextResponse.json(user);
  }
}
