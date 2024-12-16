
# Suroi Wiki

The official wiki for [Suroi](https://suroi.io), an open-source 2D battle royale game inspired by surviv.io.

[wiki.suroi.io](https://wiki.suroi.io)

## Setup
[Node.js](https://nodejs.org/en) 20+ and [pnpm](https://pnpm.io) are required.

If you don't have `pnpm` installed, you can install it with the following command:

```shell
npm i -g pnpm
```

If you need to install a specific version of Node.js, you can use [nvm](https://github.com/nvm-sh/nvm) to manage versions.

### Clone the Repository
```shell
git clone https://github.com/HasangerGames/suroi-wiki.git
cd suroi-wiki
```

### Git Submodules
The repository uses git submodules to manage dependencies. Run the following commands to initialize and update the submodules:

```shell
git submodule init
# Do not use --remote as it does not respect the selected commit
git submodule update
```

### Install Dependencies
Install the required dependencies using `pnpm`:

```shell
pnpm install
```

## Development
To start a local development server, run:

```shell
pnpm dev
```

Then, open [https://127.0.0.1:3000](https://127.0.0.1:3000) in your browser to view the wiki. You can have this open while you make changes as it will automatically update!

## Production
To build the wiki for production, run:

```shell
pnpm build
```

To start the production server, use:

```shell
pnpm start
```

## Quickstart
If you want to setup the wiki quickly, copy the following script and paste it into your terminal. Though it is **highly** recommended to go through all the steps so you understand how the wiki is running. This also assumes that you have **all the packages** installed.

```shell
git clone https://github.com/HasangerGames/suroi-wiki.git
cd suroi-wiki
git submodule init
git submodule update
pnpm install
pnpm dev
```