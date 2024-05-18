import { User } from "@/model/user";
import { NextResponse } from "next/server";

export async function GET(request,{params}){
   
    const{userId} = params;

    try {
       const user = await User.findById(userId);
       return NextResponse.json(user);
        
    } catch (error) {
        console.log(error);
        return NextResponse.json({
            message:"user with userid not found...!",
            success:false
        })
        
    }
    
}

export async function DELETE(request,{params}){

    const{userId} = params;
    console.log(params);

    try {
        await User.deleteOne({
            _id:userId,
        })
        return NextResponse.json({
            message:"user deleted..",
            success:true,
        }) 

    } catch (error) {
        console,log(error);
        return NextResponse.json({
            message:"failed to delete user..",
            success:tfalse,
        }) 

    }
}