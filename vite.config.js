import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

import dotenv from "dotenv";
dotenv.config();

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd());

  return {
    base: "/" + env.VITE_PUBLIC_BASE,
  };
});

//export default defineConfig({
//  plugins: [react()],
// base: "/dogon-consulting",
//base: import.meta.env.VITE_PUBLIC_BASE,
//base: "/",
//});
