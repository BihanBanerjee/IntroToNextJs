import axios from "axios";
import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

// const client = new PrismaClient();
import client from "@/db";


async function fetchData() {

    // const res = await axios.get("https://week-13-offline.kirattechnologies.workers.dev/api/v1/user/details");
    // const res = await axios.get("http://localhost:3000/api/user");
    // console.log("response is" + JSON.stringify(res.data));
    // return res.data;

    const user = await client.user.findFirst();
    return {
        email: user?.email,
        name: 'harihar'
    }
}
// Dont do a http call if it is the same server. Simply do a user.findOne() ✅ directly u can talk to the database.


export default async function User() {
    const data = await fetchData();
    
    return (
        <div>
            {data.name}
            <br></br>
            {data.email}
        </div>
    )
}