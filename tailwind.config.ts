import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors:{
        'Loyal-Green':'#01BF62',
        'Light-Loyal-Blue':'#F7FCFE',
        'Yellow-Golden':'#F2AD27',
      }
    },
  },
  plugins: [],
}
export default config
