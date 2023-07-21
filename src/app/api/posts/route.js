import { NextResponse } from "next/server"
import connect from "@/utils/db";
import Post from "@/models/Post";


export const GET =async(request)=>{
    //fetch
    try {
        await connect()

        const posts = await Post.find(); 
        console.log(posts)
        return new NextResponse(JSON.stringify(posts), {
            
            status: 200,
          });
    } catch (error) {
        return new NextResponse("It works",{
            status:500
        });
    }
    
}
