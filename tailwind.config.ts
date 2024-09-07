import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        standard: '#AEAEAE',
        bright: '#F2F2F2',
        faint: '#5B5B5B',
        btnBg: '#232323',
      }
    },
  },
  plugins: [],
}
export default config
