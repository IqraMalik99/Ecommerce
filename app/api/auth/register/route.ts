import { User } from "@/app/models/userSchema";
import { NextRequest, NextResponse } from "next/server";
import { UIDocument } from "@/app/models/userSchema";
export async function POST(req: NextRequest) {
    try {
        let { email, password, username } = await req.json();
        if (!email || !password || !username) {
            throw new Error("All fields are required");
        }
        let user:UIDocument|null = await User.findOne({ email });
        if (user) {
            throw new Error("User already registered on this email");
        }
        user = await User.create({ email, password, username });
        return NextResponse.json({ success: true, message: "User registered successfully"}, { status: 200 })
    }
    catch (error: any) {
        return NextResponse.json(
            { error: error.message || "Something went wrong" },
            { status: 400 }
        );
    }
}