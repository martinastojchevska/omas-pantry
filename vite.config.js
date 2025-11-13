import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// import tailwindcss from '@tailwindcss/vite'       not using it anymore :( 

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/omas-pantry", 
});
