import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const user = await prisma.user.create({
      data: {
        email: body.email,
        password: body.password,
        name: body.name,
        birthDate: body.birthDate,
        residence: body.residence,
      },
    });

    if (!user) {
      return NextResponse.json(
        { error: "Data tidak valid atau kosong" },
        { status: 401 }
      );
    }

    return NextResponse.json(
      { message: "Registrasi berhasil!" },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: "Terjadi kesalahan server" },
      { status: 500 }
    );
  }
}
