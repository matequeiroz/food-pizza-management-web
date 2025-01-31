import { z } from 'zod'

export const schemaLogin = z.object({
  email: z.string().email({ message: 'Digite um e-mail válido, ex: meu@email.com' }),
})
