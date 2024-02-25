# Suroi Wiki

The official wiki for [Suroi](https://suroi.io), an open-source 2D battle royale game inspired by surviv.io.

[wiki.suroi.io](https://wiki.suroi.io)

## Setup
[Node.js](https://nodejs.org/en) 20+ and [pnpm](https://pnpm.io) are required.

If you don't have `pnpm` installed, you can install it with `npm i -g pnpm`.

```shell
git clone https://github.com/HasangerGames/suroi-wiki.git
cd suroi-wiki
git submodule init
# Do not use --remote as it does not respect the selected commit
git submodule update
pnpm install
```

## Development
To start a local development server, run `pnpm watch:server`, then go to https://127.0.0.1:3000 in your browser.

## Production
To start the server, run `pnpm server`.
