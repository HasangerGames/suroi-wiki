import { html } from "hono/html";
import { PropsWithChildren } from "hono/jsx";

export default function HTML({title, children}: PropsWithChildren<{title: string}>) {
  return html`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="stylesheet" href="/reset.css" />
      <link rel="stylesheet" href="/uno.css" />
      <title>${title}</title>
    </head>
    <body class="bg-slate-900 text-white">
      ${children}
    </body>
    </html>
  `
}