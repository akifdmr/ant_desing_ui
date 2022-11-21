/** @format */

// vite.config.js
import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
    plugins: [
        legacy({
            targets: ["defaults", "not IE 11"],
        }),
    ],
    build: {
        lib: {
            // Could also be a dictionary or array of multiple entry points
            entry: resolve(__dirname, "index.js"),
            name: "sos",
            // the proper extensions will be added
            fileName: "sos-lib",
        },
    },
});