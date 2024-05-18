import { Stock } from "@/model/stock";
import mongoose from "mongoose";

export const connectDb = async()=>{

    try {
        const {connection} = await mongoose.connect(process.env.MONGO_DB_URL,{
            dbName:"stock_manager",
        })

        console.log("db connected...");
    //     console.log(connection);

    //  const sstock = new Stock({
    //         name:"test name",
    //         quantity:"test@gmail.com",
    //         price:"testpassword",
    //     })

    //     await sstock.save();
    //     console.log("stock is created");


    } catch (error) {
        console.log("db not connected...")
    }
}