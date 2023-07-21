import { NextResponse } from "next/server"
import connect from "@/utils/db";
import Post from "@/models/Post";


export const GET =async(request,{params})=>{
    
    const {id}=params;
    
    //fetch
    try {
        await connect()

        const post = await Post.findById(id); 
       
        return new NextResponse(JSON.stringify(post), {
            
            status: 200,
          });
          
    } catch (error) {
        return new NextResponse("It doesnot work",{
            status:500
        });
    }
    console.log(post)
}
