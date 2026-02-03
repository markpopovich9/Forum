import { createRoot } from "react-dom/client";
import App from "./App";
import { AuthProvider } from "./context/AuthContext";
import React from "react";

const htmlDiv = document.getElementById("root") as HTMLElement;
if (!htmlDiv) throw new Error("Root element not found");

const root = createRoot(htmlDiv);

root.render(
  <React.StrictMode>
    <AuthProvider>
      <App />
    </AuthProvider>
  </React.StrictMode>
);