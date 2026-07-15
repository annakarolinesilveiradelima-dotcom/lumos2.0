import type { Config } from "tailwindcss";
const config: Config = { content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"], theme: { extend: { colors: { ink: "#0C0A09", gold: "#D4AF37", ember: "#A16207", parchment: "#F7EEDB", smoke: "#18181B" }, boxShadow: { glow: "0 0 45px rgba(212,175,55,.22)" } } }, plugins: [] };
export default config;
