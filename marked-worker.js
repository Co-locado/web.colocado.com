importScripts('https://cdnjs.cloudflare.com/ajax/libs/marked/9.0.3/marked.min.js');

const markedRenderer = new marked.Renderer()
const linkRenderer = markedRenderer.link
markedRenderer.link = (href, title, text) => {
  const localLink = href.startsWith(`${location.protocol}//${location.hostname}`)
  const html = linkRenderer.call(markedRenderer, href, title, text)
  return localLink
    ? html
    : html.replace(/^<a /, `<a target="_blank" rel="noreferrer noopener nofollow" `)
}

onmessage = (e) => {
  const markdown = marked.parse(e.data, { renderer: markedRenderer, breaks: true })
  postMessage(markdown)
};

