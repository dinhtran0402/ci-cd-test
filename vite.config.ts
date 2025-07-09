import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import NodeModulesPolyfillPlugin from "@esbuild-plugins/node-modules-polyfill";

export default defineConfig({
  plugins: [
    react(),
    {
      ...NodeModulesPolyfillPlugin(),
      enforce: "pre",
    },
  ],
  optimizeDeps: {
    esbuildOptions: {
      define: { global: "globalThis" },
      plugins: [NodeModulesPolyfillPlugin()],
    },
  },
});
