import vue from "@vitejs/plugin-vue"
import {fileURLToPath, URL} from "url"
import {defineConfig} from "vite"
import {quasar, transformAssetUrls} from "@quasar/vite-plugin"

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        vue({
            template: {transformAssetUrls}
        }),
        quasar({
            sassVariables: "src/assets/base.scss"
        })
    ],
    resolve: {
        alias: {
            "@": fileURLToPath(new URL("./src", import.meta.url))
        }
    }
})
