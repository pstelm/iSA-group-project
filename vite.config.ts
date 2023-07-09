import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
	base: '/jfdzr11-team-promisesland/',
	build: {
		chunkSizeWarningLimit: 1600,
		outDir: 'build',
	},
	plugins: [react()],
});
