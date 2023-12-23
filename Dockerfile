FROM node:20-alpine AS base

### Rebuild deps only when needed ###
FROM base AS deps

RUN apk add --no-cache libc6-compat git

ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable
RUN corepack prepare pnpm@latest --activate

WORKDIR /app

COPY package.json pnpm-lock.yaml ./
RUN pnpm i

### Rebuild source only when needed ###
FROM base AS builder

RUN corepack enable
RUN corepack prepare pnpm@latest --activate 

WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

RUN git submodule init
RUN git submodule update --remote
RUN pnpm build

### Production image ###
FROM base AS runner

# Set correct permissions
RUN addgroup nodejs
RUN adduser -SDH nextjs
RUN mkdir .next
RUN chown nextjs:nodejs .next

# Automatically leverage output traces to reduce image size
# https://nextjs.org/docs/advanced-features/output-file-tracing
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static
COPY --from=builder --chown=nextjs:nodejs /app/public ./public

USER nextjs

EXPOSE 3000
ENV PORT 3000
ENV HOSTNAME "0.0.0.0"

CMD ["node", "server.js"]

