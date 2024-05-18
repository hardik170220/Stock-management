import { httpAxios } from "./httpHelper";

export async function AddStock(stock){

    const result = await httpAxios.post("/api/stock",stock).then((response)=>response.data);
    return result;

}

// export async function ShowStock(){

//     const result = await httpAxios.get("/api/stock").then((response)=>response.data);
//     return result;

// }
export async function GetStockOfUser(userId){

    const result = await httpAxios.get(`/api/users/${userId}/stock`).then((response)=>response.data);
    return result;

}
export async function DeleteStockOfUser(stockId){

    const result = await httpAxios.delete(`/api/stock/${stockId}`).then((response)=>response.data);
    return result;

}

