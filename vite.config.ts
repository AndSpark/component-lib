import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import {resolve} from 'path'
// https://vitejs.dev/config/
export default defineConfig({
	plugins: [vue()],
	resolve: {
		alias: {
			'/@/': resolve(__dirname,'src')
		}
	},
	server: {
		proxy: {
			'/fymap2020_data.d.json':'https://interface.sina.cn/news/wap/'
		}
	}
})
