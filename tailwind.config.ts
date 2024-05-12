import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "white-smoke": "#F2F4F8",
        "blue-zodiac": "#112240",
        "cloud-burst": "#233554",
        "regent-gray": "#000000",
        "rock-blue": "#a8b2d1",
        "medium-grey": "#7F7F7F"
      },
      fontFamily: {
        "Humane": ["Humane", "sans-serif"],
        "SF-mono": ["SFMonoRegular", "monospace"],
        "Calibre": ["Calibre", "sans-serif"],
      },
      transitionTimingFunction: {
        "smoth-ease-out": "cubic-bezier(0.645, 0.045, 0.355, 1)",
      },
      transitionDuration: {
        "250": "250ms",
      },
      translate: {
        "0.313": "5px",
      },
      boxShadow: {
        "button-shadow": "4px 4px 0 0 #000",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config
