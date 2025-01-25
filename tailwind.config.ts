import type { Config } from 'tailwindcss';

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        lightsalmon: '#f69e76',
        whitesmoke: '#f8f9fa',
        blueviolet: '#9747ff',
        palegoldenrod: '#c4e5b0',
        black: '#000',
        lightsteelblue: '#a0aec0',
        palepurple: '#eaddff',
        palered: '#ffd8e4',
        grey: '#0000000d',
      },
      spacing: {},
      fontFamily: {
        'san-francisco-subheadline-2-semibold': "'SF Pro'",
      },
      backgroundImage: {
        profile_bg: "url('/profile_bg.jpg')",
      },
    },

    screens: {
      xsss: { min: '0px', max: '160px' },
      xss: { min: '161px', max: '320px' },
      xs: { min: '321px', max: '640px' },
      sm: { min: '641px', max: '767px' },
      md: { min: '768px', max: '1023px' },
      lg: { min: '1024px', max: '1279px' },
      xl: { min: '1280px', max: '1535px' },
      '2xl': { min: '1536px' },
    },
  },
  plugins: [],
} satisfies Config;
