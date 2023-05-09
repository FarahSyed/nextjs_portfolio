import dbConnect from "@/utils/dbConnection";
import Contact from "@/models/contact";
import { NextResponse } from "next/server";

export async function POST(req, res) {
    try{
        const body = await req.json();
        await dbConnect();
        
        await Contact.create(body);

        return NextResponse.json( 
            { message: "Message Sent Successfully" },
            { status: 200 }
        )
    } catch(err) {
        return NextResponse.json(
            { message: "Server error, please try again!" },
            { status: 500 }
        )
    }
}