import { Stock } from "@/model/stock";
import { NextResponse } from "next/server";

export async function DELETE(request,{params}){

    const{stockId} = params;
    
    try {
        await Stock.deleteOne({
            _id:stockId,
        })
        return NextResponse.json({
            message:"one stock deleted",
            success:true
        })

    } catch (error) {
        console.log(error);
        return NextResponse.json({
            message:"failed to delete stock",
            success:true
        })
        
    }
   
}