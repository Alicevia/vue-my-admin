import vue from '@vitejs/plugin-vue'
import path from 'path'
import { defineConfig, loadEnv } from 'vite'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd())

  return {
    plugins: [vue()],
    server: {
      host: '0.0.0.0',
      proxy: {
        '/api': {
          target: 'https://api.imooc-admin.lgdsunday.club',
          changeOrigin: true,
        },
      },
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
        views: path.resolve(__dirname, './src/views'),
        api: path.resolve(__dirname, './src/api'),
        hooks: path.resolve(__dirname, './src/hooks'),
        store: path.resolve(__dirname, './src/store'),
      },
      extensions: ['.js', '.vue'],
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@import './src/style/variables.scss';`,
        },
      },
    },
  }
})
