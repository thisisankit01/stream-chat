import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./Router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "stream-chat-react/dist/css/index.css";

const queryClient = new QueryClient(); //a library that helps make data requests to a server.

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>
);
//12: it wraps everything in a QueryClientProvider. This is a special component that makes it easy to use the QueryClient to request data from the server.
