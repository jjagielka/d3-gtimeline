// vite.config.js
import { resolve } from "path";
import { defineConfig } from "vite";
import d3_global from "./d3-global-plugin";
import d3_virtual from "./d3-virtual";

export default defineConfig({
  build: {
    emptyOutDir: false,
    lib: {
      entry: resolve(__dirname, "src/index.js"),
      // formats: ["es", "umd"],
      name: "d3",
      // the proper extensions will be added
      fileName: "d3-gtimeline.full",
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled into your library
      //   external: ["dayjs", "d3"],
      output: {
        // Provide global variables to use in the UMD build for externalized deps
        globals: {
          dayjs: "dayjs",
          d3: "d3",
        },
      },
    },
  },
  plugins: [d3_global("dist/d3-gtimeline.full.umd.cjs"), d3_virtual()],
});
