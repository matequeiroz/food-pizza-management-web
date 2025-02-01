import { z } from 'zod'

import { schemaLogin } from './schema'

export type FormLoginProps = z.infer<typeof schemaLogin>
