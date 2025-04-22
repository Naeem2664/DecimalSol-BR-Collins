import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: ['var(--font-hanken-grotesk)', 'sans-serif'],
        body: ['var(--font-work-sans)', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

export default config
