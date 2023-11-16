# Suroi Wiki

The official wiki for [Suroi](https://suroi.io), an open-source 2D battle royale game inspired by surviv.io.

## Setup
[Node.js](https://nodejs.org/en) and [pnpm](https://pnpm.io) are required.

If you don't have `pnpm` installed, you can install it with `npm i -g pnpm`.

```shell
git clone https://github.com/Compositr/suroiautowiki.git
cd suroiautowiki
git submodule init
git submodule update --remote
pnpm install
```

## Development
To start a local development server, run `pnpm dev`, then go to https://127.0.0.1:3000 in your browser.

## Production
To build for production, run `pnpm build`. To start the server, run `pnpm start`.
