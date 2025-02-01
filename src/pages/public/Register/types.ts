import { z } from 'zod'

import { schemaRegister } from './schema'

export type FormRegisterProps = z.infer<typeof schemaRegister>
