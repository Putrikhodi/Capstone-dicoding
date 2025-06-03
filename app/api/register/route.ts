import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const isExist = await prisma.user.findUnique({
      where: { email: body.email },
    });
    if (isExist) {
      return NextResponse.json(
        { error: "Pengguna Sudah ada" },
        { status: 401 }
      );
    }
    console.log(body);

    const user = await prisma.user.create({
      data: {
        email: body.email,
        password: body.password,
        name: body.name,
        birthDate: new Date(body.birthDate),
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
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
