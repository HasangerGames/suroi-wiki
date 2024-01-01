import { sveltekit } from '@sveltejs/kit/vite';
import UnocssVitePlugin from 'unocss/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [UnocssVitePlugin(), sveltekit()]
});
