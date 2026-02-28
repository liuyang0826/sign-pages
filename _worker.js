export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url)

    // 转发到你的源站
    const target = "http://114.132.59.103" + url.pathname + url.search

    const newRequest = new Request(target, request)

    // return fetch(newRequest)
    return new Response('Hello World!')
  }
}
