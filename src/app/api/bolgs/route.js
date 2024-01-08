import { NextResponse } from "next/server"

export const GET = () => {
  return  NextResponse.json({message : 'hello world'})
}
//post api
export const POST = () => {
  return  NextResponse.json({message : 'hello world'})
}
//put api
export const PUT = () => {
  return  NextResponse.json({message : 'hello world'})
}
//delete api
export const DELETE = () => {
  return  NextResponse.json({message : 'hello world'})
}