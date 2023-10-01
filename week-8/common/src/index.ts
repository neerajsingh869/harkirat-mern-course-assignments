import { z } from 'zod';

export const SignupInputZod = z.object({
    username: z.string().min(10),
    password: z.string().min(10)
})

export type SingupInputType = z.infer<typeof SignupInputZod>;