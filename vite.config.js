// vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import styleImport from "vite-plugin-style-import";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    styleImport({
      libs: [
        {
          libraryName: "antd",
          esModule: true,
          ensureStyleFile: true,
          resolveStyle: (name) => `antd/es/${name}/style/index`,
        },
      ],
    }),
  ],
});
