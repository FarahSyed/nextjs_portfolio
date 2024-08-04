import dbConnect from "@/utils/dbConnection";
import Contact from "@/models/contact";
import { NextResponse } from "next/server";

export async function POST(req, res) {
    try{
        const body = await req.json();
        console.log("body", body);
        await dbConnect();
        
        const createdContact = await Contact.create(body);
        console.log("createdContact", createdContact);

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