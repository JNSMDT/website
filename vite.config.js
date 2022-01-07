import { defineConfig } from 'vite';
import { resolve } from 'path';
import { svelte } from '@sveltejs/vite-plugin-svelte';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [svelte()],
	resolve: {
		alias: [
			{ find: '$lib', replacement: resolve('src/lib') },
			{ find: '$assets', replacement: resolve('/src/assets') },
			{ find: '$components', replacement: resolve('/src/components') }
		]
	}
});
