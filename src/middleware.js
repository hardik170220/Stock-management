import { NextResponse } from 'next/server'

// This function can be marked `async` if using `await` inside
export function middleware(request) {
  console.log("middleware executed")
  const authToken = request.cookies.get("authToken")?.value;
  const loggedInUserNotAccessPaths = request.nextUrl.pathname==="/login" || request.nextUrl.pathname==="/signup";

  if(request.nextUrl.pathname==="/api/login" || request.nextUrl.pathname==="/api/users"){
    return;
  }
  if(loggedInUserNotAccessPaths){
      if(authToken){
         return NextResponse.redirect(new URL("/profile/user", request.url));
      }
      
  }else{
    if(!authToken){

     if(request.nextUrl.pathname.startsWith("/api")){
      return NextResponse.json({
        message:"Access Denied!",
        success:false,
      },
      {
        status:401,
      })
      
     }


      return NextResponse.redirect(new URL("/login", request.url));
    }
  }
  console.log(authToken);

}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ["/login", "/signup", "/addStock", "/showStock", "/api/:path*", "/profile/:path*"]
}