"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export default function TanstackQuery(props: React.PropsWithChildren) {
  const client = new QueryClient();

  return <QueryClientProvider client={client} {...props} />;
}
