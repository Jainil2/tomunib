import { connectMongoDB } from "@/lib/mongodb";
import { NextResponse } from "next/server";
import User from '@/models/user'

export async function POST(req) {
  try {
    const { name, email } = await req.json();
    await connectMongoDB();
    try {
     const res =  await User.create({name, email});
    } catch (error) {
      console.log(error);
    }
    return NextResponse.json({ message: "User registred." }, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { message: "An error occured while registering the user." },
      { status: 500 }
    );
  }
}
