import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/Carrito-Simulador-React/',//nombre del repo
  build: {
    outDir: 'dist', // La carpeta de salida por defecto de Vite
  }
})
