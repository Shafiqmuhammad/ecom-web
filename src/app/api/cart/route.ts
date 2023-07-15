import { cartTable, db } from "@/app/lib/drizzle";
import { eq } from "drizzle-orm";
import { cookies } from "next/dist/client/components/headers";
import { NextRequest, NextResponse } from "next/server";
import { client } from "@/app/lib/sanityClient";

import { v4 as uuid } from "uuid"



export const GET = async (request: NextRequest) => {
    const req = request.nextUrl
    const uid = req.searchParams.get("user_id") as string
    try {
        const res = await db.select().from(cartTable).where(eq(cartTable.user_id, uid));
        const pids = res?.map(row =>(`'${row.product_id})'`))

        if (pids.length > 0) {
        const sres = await client.fetch(`*[_type == 'product' && _id in [${pids}]] {
            price,
              _id,
              title,
              image,
              category -> {
                name
              }
            }`)
            
            return NextResponse.json(sres)
        }

        return NextResponse.json([])
    } catch (error){
        console.log(error)
        return NextResponse.json({ message: "Something went wrong"})
    }
}

export const POST = async (request: NextRequest) => {
    const req = await request.json()

    const setCookies = cookies();
    
    const uid = uuid();
    const user_id = cookies().get("user_id")
    
    if(!user_id) {
        setCookies.set("user_id", uid)
    }
    
    // cookies().get("user_id")
    try {
        const res = await db.insert(cartTable).values({
            product_id: req.product_id,
            quantity: 1,
            user_id: uid
            // cookies().get("user_id")?.value as string
        }).returning();
        return NextResponse.json({res})
    } catch (error){

    }
}