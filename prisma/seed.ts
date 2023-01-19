import { PrismaClient } from "@prisma/client";

const db = new PrismaClient

type post =  {
    title: string
    body: string
}

async function getposts(){
    const response = await fetch('https://dummyjson.com/posts')
    const {post} = await response.json()
    return post as post[]
}


function sulgify(text:string) {
  return text 
  .replace(/\s/g, '-')
  .replace(/[a-zA-Z0-9-]/g, '')
  .toLocaleLowerCase()
}