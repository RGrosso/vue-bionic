import { defineConfig, LibraryFormats } from "vite";
import { resolve } from "path";
import vue from "@vitejs/plugin-vue";

const resolvePath = (str: string) => resolve(__dirname, str);

export default defineConfig({
    plugins: [vue()],
    resolve: {
        alias: {
            "@": resolvePath("./src"),
        },
    },
    build: {
        lib: {
            entry: resolvePath("src/index.ts"),
            name: "index",
            formats: [<LibraryFormats>"es"],
        },
        rollupOptions: {
            external: ["vue"],
            output: {
                sourcemap: true,
                globals: {
                    vue: "Vue",
                },
            },
        },
        sourcemap: true,
        // Reduce bloat from legacy polyfills.
        target: "esnext",
        // Leave minification up to applications.
        minify: false,
    },
});
