import { HandlerContext } from '$fresh/server.ts'
import { client } from '../../utils/trpcClient.ts'

export const handler = async (_req: Request, _ctx: HandlerContext) => {
  const _url = new URL(_req.url)

  const postID = Number(_url.searchParams.get('id'))

  if (postID) {
    console.log(postID)
    const post = await client.query('post:get', {
      idx: postID,
    })
    return new Response(JSON.stringify({ data: { post } }, null, 2))
  }

  const post = await client.query('post:getAll')
  return new Response(JSON.stringify({ data: { post } }, null, 2))
}
