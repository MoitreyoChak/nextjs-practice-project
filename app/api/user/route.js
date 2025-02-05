import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const client = new PrismaClient();

export function GET() {
    return Response.json({
        name: "Shelby"
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