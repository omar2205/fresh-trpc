import { createTRPCClient } from 'https://esm.sh/@trpc/client@10.0.0-alpha.30'
import type { TRPCRouter } from './trpcRouter.ts'

export const client = createTRPCClient<TRPCRouter>({
  url: 'https://comfortable-sheep-15.deno.dev/api/trpc',
})
