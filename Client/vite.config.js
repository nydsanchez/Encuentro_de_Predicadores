import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
// Importa el plugin correctamente sin llaves {}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()], // Usa el plugin correctamente
  server: {
    host: "0.0.0.0",
  },
});
