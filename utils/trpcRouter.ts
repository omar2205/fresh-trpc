import { router } from 'https://esm.sh/@trpc/server@10.0.0-alpha.30'
import { z } from 'https://deno.land/x/zod@v3.16.1/mod.ts'

const posts = [
  { id: 1, title: 'First post' },
  { id: 2, title: 'Second post' },
]

export const trpcRouter = router()
  .query('hello', {
    resolve: () => 'world',
  })
  .query('post:getAll', {
    resolve: () => posts,
  })
  .query('post:get', {
    input: z.object({
      idx: z.number(),
    }),
    resolve: ({ input }) => posts[input.idx - 1],
  })
  .formatError(null)
export type TRPCRouter = typeof trpcRouter
