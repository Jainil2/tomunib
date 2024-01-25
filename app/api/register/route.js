import { connectMongoDB } from "@/lib/mongodb";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs"
import User from '@/models/user'

export async function POST(req) {
  try {
    const { name, email, password } = await req.json();
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    await connectMongoDB();
    await User.create({name, email, password:hashedPassword});

    return NextResponse.json({ message: "User registred." }, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { message: "An error occured while registering the user." },
      { status: 500 }
    );
  }
}
