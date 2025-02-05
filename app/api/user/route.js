import { NextResponse } from "next/server";
import client from "@/db"

export async function GET() {
    const user = await client.user.findFirst();

    return NextResponse.json({
        id: user.id,
        email: user?.username
    })
}

export async function POST(req) {
    //extract the body
    const body = await req.json();
    console.log(body);

    //save in db
    const user = await client.user.create({
        data: {
            username: body.username,
            password: body.password
        }
    })
    console.log("user id: ", user.id);

    //send response
    return NextResponse.json({
        message: "Successfully logged in"
    })
}