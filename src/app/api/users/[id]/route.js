import { user } from "@/util/db";
import { NextResponse } from "next/server";

export function GET(request, content) {
    const data = user;

    const userData = data.filter(item => item.id == content.params.id)
    return NextResponse.json(userData.length == 0
        ?
        { result: "No Data Found", success: false }
        :
        { result: userData[0], status: 200 })
}

export async function PUT(request, content) {
    let payload = await request.json();
    let userId = content.params.id;

    console.log("PUT", payload);
    console.log("PUTparams", userId);

    if (!payload.id || !payload.name || !payload.email || !payload.age) {
        return NextResponse.json({ result: "No Valid Data", success: false }, { status: 400 })
    }

    return NextResponse.json({ result: payload, success: true }, { status: 201 })
}