import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path, { format } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build:{
    lib:{
      entry: path.resolve(__dirname, './src/main.jsx'),
      name:'RLSComponent',
      formats: ['es', 'cjs', 'umd', 'iife'], 
      fileName:(format)=>`RLSComponent.${format}.js`
    },
    rollupOptions:{
      external:['react', 'react-dom'],
      output:{
        globals:{
          react:'React',
          ReactDOM: 'react-dom'
        }
      }
    }
  }
});
