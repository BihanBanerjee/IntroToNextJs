import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";
// const client = new PrismaClient();
import client from "@/db";

export async function GET (req: NextRequest) {

    const user = await client.user.findFirst();
    // return NextResponse.json({
    //     email: 'hari@gmail.com',
    //     name: 'hari'
    // })

    return NextResponse.json({
        email: user?.email,
        name: 'hari'
    })
}

export async function POST (req: NextRequest) {
    //body
    const body = await req.json();
    // console.log(body);
    
    try {
        await client.user.create({
            data: {
                email: body.email,
                password: body.password
            }
        });
        // console.log(body);
        //headers
        // console.log(req.headers.get('authorization'));
        //query params
        // console.log(req.nextUrl.searchParams.get('name'));
        //hit the database with username and password
        return NextResponse.json({
            // message: "You are signed up"
            body
        })
    } catch (e) {
        return NextResponse.json({
            message: "Error while signing up",
        }, {
            status: 411
        })
    }
}