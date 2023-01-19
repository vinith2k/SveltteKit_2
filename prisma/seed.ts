import { PrismaClient } from "@prisma/client";

const db = new PrismaClient

type post =  {
    title: string
    body: string
}

async function getposts(){
    const response = await fetch('https://dummyjson.com/posts')
    const {posts} = await response.json()
    return posts as post[]
}


function sulgify(text:string) {
  return text 
  .replace(/\s/g, '-')
  .replace(/[^a-zA-Z0-9-]/g, '')
  .toLocaleLowerCase()
}

async function main(){
    const posts = await getposts()

   

    for(const post of posts){

        await db.post.create({
            data:{
                title:post.title,
                content:post.body,
                slug:sulgify(post.title)
    
            }
        })

    }
  
}

main()