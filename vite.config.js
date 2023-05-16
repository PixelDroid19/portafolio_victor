import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "https://PixelDroid19.github.io/portafolio_victor",
  server: {
    host: true,
  },
});
