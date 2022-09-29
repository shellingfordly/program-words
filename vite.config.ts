import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { resolve } from "path";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { VantResolver } from "unplugin-vue-components/resolvers";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/",
  server: {
    port: 3300,
  },
  resolve: {
    alias: [
      {
        find: /^@\//,
        replacement: `${resolve(__dirname, "./src")}/`,
      },
    ],
  },
  plugins: [
    vue(),
    AutoImport({
      imports: ["vue", "vue-router"],
    }),
    Components({
      resolvers: [VantResolver()],
    }),
  ],
});
