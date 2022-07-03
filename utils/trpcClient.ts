import { createTRPCClient } from 'https://esm.sh/@trpc/client@10.0.0-alpha.30'
import type { TRPCRouter } from './trpcRouter.ts'

const API_URL = Deno.env.get('API_URL')

export const client = createTRPCClient<TRPCRouter>({
  url: API_URL ? API_URL : 'http://localhost:8000/api/trpc',
})
