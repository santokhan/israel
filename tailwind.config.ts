import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './components/**/*.{ts,tsx,mdx}',
    './sections/**/*.{ts,tsx,mdx}',
    './app/**/*.{ts,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        app: {
          cream: "#FFF9F4",
          light: {
            pink: "#FEEFEB",
            green: "#EEF1EC",
            "gray": "#E0D7D4"
          },
          green: "#226B6D",
          black: "#111412",
          brown: "#6C3321",
          gray: "#626262",
          pink: "#E4C7C3",
        },
      },
    },
  },
  plugins: [],
}
export default config
