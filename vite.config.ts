import { defineConfig } from "vite";
import { devSsr } from "dreamland/vite";


export default defineConfig({
	plugins: [
		devSsr({
			entry: "/src/main-server.ts",
		}),
	],
});
