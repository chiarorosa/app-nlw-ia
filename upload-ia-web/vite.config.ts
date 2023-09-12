import { defineConfig } from "vite"
import path from "path"
import react from "@vitejs/plugin-react"

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	resolve: {
		alias: {
			// informa ao vite que o @ é a pasta src
			"@": path.resolve(__dirname, "src"),
		},
	},
})
