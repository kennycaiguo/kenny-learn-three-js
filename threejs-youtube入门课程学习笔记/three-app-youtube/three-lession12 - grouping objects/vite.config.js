import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import glsl from 'vite-plugin-glsl' //导入新安装的插件

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),glsl()], //添加插件
})
