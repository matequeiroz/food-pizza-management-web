import { z } from 'zod'

export const schemaRegister = z.object({
  nameShop: z
    .string()
    .min(10, 'O nome do estalecimento deve ter pelo menos 10 caracteres.')
    .max(30, 'O Nome do estabelecimento deve ter no máximo 30 caracters.'),
  nameManager: z
    .string()
    .min(10, 'Digite nome e sobrenome.')
    .max(30, 'O Nome deve ter no máximo 30 caracters.'),
  email: z.string().email({ message: 'Digite um e-mail válido, ex: meu@email.com' }),
  phone: z.string().min(11, 'Digite o DD e o seu telefone'),
})
