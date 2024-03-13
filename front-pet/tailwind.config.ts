import type { Config } from 'tailwindcss';
import tailwindConfigClasses from './tailwind';

const config: Config = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundColor: tailwindConfigClasses.background.colors,
      backgroundImage: tailwindConfigClasses.background.image,
      backgroundPosition: tailwindConfigClasses.background.imagePositions,
      colors: tailwindConfigClasses.text.colors,
      fontFamily: tailwindConfigClasses.text.fontFamily
    },
    plugins: [
      require('@tailwindcss/postcss7-compat'),
      require('@tailwindcss/forms'),
    ],
  },
}

export default config;
