import {z} from "zod"

export const messageSchema  = z.object({
    content:z.string().min(5,{message:"message must be atleast 10 characters"})
})