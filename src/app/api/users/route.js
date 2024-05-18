import { connectDb } from "@/helper/db";
import { User } from "@/model/user";
import bcrypt from "bcrypt"
import { NextResponse } from "next/server";

connectDb();
export async function POST(request){
    
    const {Fname, Lname,email,password} = await request.json()

    try {
        const user = new User({
           Fname,
           Lname,
           email,
           password,
        })

        user.password = bcrypt.hashSync(user.password,10);
        const createdUser = await user.save();
        return NextResponse.json(createdUser,{
            status:201,
        })
    } catch (error) {
        console.log(error);
        return NextResponse.json({
            mesaage:"Failed to Post user",
            status:401,
        })
    }
    
}

export async function GET(){

    let user = [];
    try {
        
          user =await User.find();
    } catch (error) {
        console.log(error);
        return NextResponse.json({
            message:"Failed to get user",
            status:401
        })
        
    }
    return NextResponse.json(user);
}