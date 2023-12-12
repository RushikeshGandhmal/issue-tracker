"use client";

import {
  QueryClient,
  QueryClientProvider as ReactQueryClientProvider,
} from "@tanstack/react-query";
import { PropsWithChildren } from "react";

// This QueryClient contains a cache for storing data that we get from backend.
const queryClient = new QueryClient();

// ReactQueryClientProvider uses React Context
// React Context is only available in client so we make this client component.
const QueryClientProvider = ({ children }: PropsWithChildren) => {
  return (
    <ReactQueryClientProvider client={queryClient}>
      {children}
    </ReactQueryClientProvider>
  );
};

export default QueryClientProvider;
