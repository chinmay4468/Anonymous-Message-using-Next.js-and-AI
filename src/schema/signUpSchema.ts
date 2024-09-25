import {z} from 'zod'
export const usernameValidation = z.string().min(2,"Username must be atleast 2 charachters").max(10,"Username must not be more than 10 charachters")
export const signUpSchema = z.object({
    username:usernameValidation,
    email:z.string().email({message:"Invalid Email Address"}),
    password:z.string().min(6,{message:'password must be atleast 6 charachter'}).max(10)
})

