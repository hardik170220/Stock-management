import { connectDb } from "@/helper/db";
import { Stock } from "@/model/stock";
import { NextResponse } from "next/server";
import jwt from "jsonwebtoken"

connectDb();
export async function POST(request){


    
    const {sname,quantity,price} = await request.json()

    const authToken = request.cookies.get("authToken")?.value;
    // console.log(authToken);
 
    const data= jwt.verify(authToken,process.env.JWT_KEY);
    // console.log(data);


    try {
        const stock = new Stock({
            sname,
            quantity,
            price,
            userId:data._id,
        })
        const createdStock = await stock.save();
        return NextResponse.json(createdStock,{
            status:201,
        })
    } catch (error) {
        console.log(error);
        return NextResponse.json({
            mesaage:"Failed to Post stock",
            status:401,
        })
    }
    
}

export async function GET(){

    let stock = [];
    try {
        
          stock =await Stock.find();
    } catch (error) {
        console.log(error);
        return NextResponse.json({
            message:"Failed to get Stocks",
            status:401
        })
        
    }
    return NextResponse.json(stock);
}