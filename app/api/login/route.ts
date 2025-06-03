import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const user = await prisma.user.findFirst({
      where: {
        email: body.email,
        password: body.password,
      },
      select: {
        id: true,
      },
    });

    if (!user) {
      return NextResponse.json(
        { error: "Email atau password salah" },
        { status: 401 }
      );
    }

    const token = jwt.sign(
      user.id.toString(),
      process.env.JWT_SECRET ?? "top secret"
    );

    return NextResponse.json({ token });
  } catch (error) {
    return NextResponse.json(
      { error: "Terjadi kesalahan server" },
      { status: 500 }
    );
  }
}
