import { defineConfig, loadEnv } from 'vite'
import path from 'path'

const isLinux = process.platform === 'linux'
const resolve = (p) => (isLinux ? path.resolve(__dirname, p) : p)
/* <%= title %> */

export default defineConfig((/* { command, mode } */) => {
	return {
		css: { devSourcemap: true },
		root: resolve('./static'), // {% vite_asset '<root>/src/css/css.js'%}
		base: resolve('/static/'),

		build: {
			sourcemap: true,
			outDir: './dist',
			assetsDir: '',
			manifest: true,
			emptyOutDir: true,
			target: 'es2015',
			rollupOptions: {
				input: {
					index: resolve('./static/src/index.js'),
					indexAdmin: resolve('./static/src/index.admin.js'),
					main: resolve('./static/src/js/main.js'),
					mainAdmin: resolve('./static/src/js/main.admin.js'),
				},
				output: {
					chunkFileNames: null,
				},
			},
		},

		server: {
			host: 'localhost',
			port: 3000,
			open: false,
			watch: { usePolling: true, disableGlobbing: false },
		},
		resolve: {
			extensions: ['.js', '.json', '.vue'],
			alias: {
				utils: resolve('./static/src/js/utils'),
				public: resolve('./static/public'),
				js: resolve('./static/src/js'),
				css: resolve('./static/src/css'),
			},
		},
	}
})
