import axios from "axios";
import { httpAxios } from "./httpHelper";

export async function SignUp(signupData){
    const result = await httpAxios.post("/api/users",signupData).then((response)=>response.data);
    return result;
}
export async function Login(loginData){
    const result = await httpAxios.post("/api/login",loginData).then((response)=>response.data);
    return result;
}
export async function CurrentUser(){
    const result = await httpAxios.get("/api/current").then((response)=>response.data);
    return result;
}
export async function Logout(){
    const result = await httpAxios.post("/api/logout").then((response)=>response.data);
    return result;
}