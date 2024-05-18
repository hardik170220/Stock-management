import { Stock } from "@/model/stock";
import { NextResponse } from "next/server";

export async function GET(request,{params}){

  const {userId} = params;
  try {
   const stock =  await Stock.find({
        userId:userId
    })
    return NextResponse.json(stock,{
      message:"Stock found",
      success:true
    })
    
  } catch (error) {
    console.log(error);
    return NextResponse.json({
        message:"failed to get stock with userId",
        success:false
    })
    
  }
}