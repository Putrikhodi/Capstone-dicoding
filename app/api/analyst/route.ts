import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import { Status } from "@prisma/client";

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

    const userId = payload;
    if (!userId) {
      return NextResponse.json(
        { error: "Invalid token payload: no userId" },
        { status: 401 }
      );
    }

    const [user, analyses] = await prisma.$transaction([
      prisma.user.findUnique({
        where: { id: Number(userId) },
      }),
      prisma.analisa.findMany({
        where: { userId: Number(userId) },
      }),
    ]);

    return NextResponse.json({ user, analyses });
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

    function calculateStatus():
      | "Normal"
      | "Stunted"
      | "Tinggi"
      | "Severely Stunted" {
      const statuses = [
        "Normal",
        "Stunted",
        "Tinggi",
        "Severely Stunted",
      ] as const;
      const randomIndex = Math.floor(Math.random() * statuses.length);
      return statuses[randomIndex];
    }
    const analyst = calculateStatus();

    // const req = await fetch("");
    // const analyst = await req.json();

    const recommendations: {
      [key: string]: string[];
    } = {
      Normal: [
        "Pertahankan pola makan sehat dan seimbang",
        "Lanjutkan pemantauan pertumbuhan secara berkala",
        "Pastikan anak cukup istirahat dan aktivitas fisik",
      ],
      Stunted: [
        "Tingkatkan asupan protein hewani dan nabati",
        "Konsultasikan dengan tenaga medis atau gizi",
        "Pantau tinggi dan berat badan setiap bulan",
      ],
      Tinggi: [
        "Pastikan asupan kalsium dan vitamin D cukup",
        "Lanjutkan aktivitas fisik yang mendukung postur",
        "Berikan nutrisi seimbang agar pertumbuhan proporsional",
      ],
      "Severely Stunted": [
        "Segera konsultasikan dengan dokter anak atau ahli gizi",
        "Berikan makanan tinggi energi dan zat gizi mikro (zat besi, zink, vitamin A)",
        "Evaluasi kondisi medis yang mendasari secara menyeluruh",
        "Ikuti program pemulihan gizi (jika tersedia di daerahmu)",
      ],
    };

    if (!analyst) {
      return NextResponse.json(
        { error: "Data tidak valid atau kosong" },
        { status: 401 }
      );
    }

    const token = request.headers.get("authorization")?.replace("Bearer ", "");

    if (token == "guest") {
      return NextResponse.json({
        status: analyst,
        rekomendasi: recommendations[analyst],
      });
    }

    if (typeof token !== "string") {
      return NextResponse.json(
        { error: "Invalid token payload" },
        { status: 401 }
      );
    }
    const payload = jwt.verify(token, process.env.JWT_SECRET ?? "secret");

    const userId = payload;
    if (!userId) {
      return NextResponse.json(
        { error: "Invalid token payload: no userId" },
        { status: 401 }
      );
    }

    await prisma.analisa.create({
      data: {
        weight,
        gender,
        name,
        age,
        status: analyst.toUpperCase().split(" ").join("_") as Status,
        height,
        analysisDate: new Date(),
        user: {
          connect: { id: Number(userId) },
        },
      },
    });

    return NextResponse.json({
      status: analyst,
      rekomendasi: recommendations[analyst],
      debug: "test",
    });
  } catch (error) {
    return NextResponse.json(
      { error: "Terjadi kesalahan server" },
      { status: 500 }
    );
  }
}

export async function DELETE(request: Request) {
  try {
    const body = await request.json();
    const token = request.headers.get("authorization")?.replace("Bearer ", "");

    if (!token) {
      return NextResponse.json(
        { error: "Unauthorized: No token provided" },
        { status: 401 }
      );
    }

    const payload = jwt.verify(token, process.env.JWT_SECRET ?? "secret");

    const userId = payload;
    if (!userId) {
      return NextResponse.json(
        { error: "Invalid token payload: no userId" },
        { status: 401 }
      );
    }

    await prisma.analisa.delete({
      where: {
        id: body.id,
      },
    });

    const [user, analyses] = await prisma.$transaction([
      prisma.user.findUnique({
        where: { id: Number(userId) },
      }),
      prisma.analisa.findMany({
        where: { userId: Number(userId) },
      }),
    ]);

    return NextResponse.json({ user, analyses });
  } catch (error) {
    return NextResponse.json(
      { error: "Unauthorized or invalid token" },
      { status: 401 }
    );
  }
}
