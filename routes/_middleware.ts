import { MiddlewareHandlerContext } from '$fresh/server.ts'
import { fetchRequestHandler } from 'https://esm.sh/@trpc/server@10.0.0-alpha.30/adapters/fetch'

import { trpcRouter } from '../utils/trpcRouter.ts'

export const handler = async (req: Request, ctx: MiddlewareHandlerContext) => {
  // moved to
  const _url = new URL(req.url)

  if (_url.pathname.startsWith('/api/trpc/')) {
    const trpcRes = await fetchRequestHandler({
      endpoint: '/api/trpc',
      req,
      /* @ts-ignore */
      router: trpcRouter,
    })
    return trpcRes
  }

  const res = await ctx.next()
  return res
}
