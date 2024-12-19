import prisma from "@/utils/connect";
import { NextResponse } from "next/server"
import { use } from 'react'

export const GET = async (req) => {

    const { searchParams } = new URL(req.url);
    const slug = searchParams.get("guideNum");
    console.log("hello")

    try {
        const post = await prisma.post.findUnique({
            where: { slug:slug },

        })
        return new NextResponse(
            JSON.stringify((post), { status: 200 })
        );

    } catch (err) {
        console.log(err)
        return new NextResponse(
            JSON.stringify({ message: "Something went wrong..." }, { status: 500 })
        );
    }
}