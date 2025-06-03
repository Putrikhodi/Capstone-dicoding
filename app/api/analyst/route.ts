import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";

export async function GET(request: Request) {
  try {
    const token = request.headers.get("authorization")?.replace("Bearer ", "");
    if (!token) {
      return NextResponse.json(
        { error: "Unauthorized: No token provided" },
        { status: 401 }
      );
    }

    const payload = jwt.verify(token, process.env.JWT_SECRET ?? "secret");

    if (typeof payload === "string") {
      return NextResponse.json(
        { error: "Invalid token payload" },
        { status: 401 }
      );
    }

    const userId = payload.id || payload.userId;
    if (!userId) {
      return NextResponse.json(
        { error: "Invalid token payload: no userId" },
        { status: 401 }
      );
    }

    const analyses = await prisma.analisa.findMany({
      where: { userId: Number(userId) },
    });

    return NextResponse.json({ analyses });
  } catch (error) {
    return NextResponse.json(
      { error: "Unauthorized or invalid token" },
      { status: 401 }
    );
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { age, gender, height, weight, name } = body;

    const req = await fetch("");
    const analyst = await req.json();
    if (!analyst) {
      return NextResponse.json(
        { error: "Data tidak valid atau kosong" },
        { status: 401 }
      );
    }

    const token = request.headers.get("authorization")?.replace("Bearer ", "");
    if (!token) {
      return NextResponse.json({ data: analyst }, { status: 200 });
    }

    const payload = jwt.verify(token, process.env.JWT_SECRET ?? "secret");

    if (typeof payload === "string") {
      return NextResponse.json(
        { error: "Invalid token payload" },
        { status: 401 }
      );
    }

    const userId = payload.id || payload.userId;
    if (!userId) {
      return NextResponse.json(
        { error: "Invalid token payload: no userId" },
        { status: 401 }
      );
    }

    const query = await prisma.analisa.create({
      data: {
        weight,
        gender,
        name,
        age,
        status: analyst,
        height,
        analysisDate: new Date(),
        user: {
          connect: { id: userId },
        },
      },
    });

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
