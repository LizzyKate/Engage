module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: {
    // Learn more on https://tailwindcss.com/docs/controlling-file-size/#removing-unused-css
    enabled: process.env.NODE_ENV === 'production',
    content: [
      'components/**/*.vue',
      'layouts/**/*.vue',
      'pages/**/*.vue',
      'plugins/**/*.js',
      'nuxt.config.js',
    ],
  },
  theme: {
    extend: {
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1030px',
        xl: '1280px',
      },
      colors: {
        default: '#172b4d',
        primary: 'rgba(13, 17, 43, var(--bg-opacity))',
        secondary: '#4a5568',
      },
      fontFamily: {
        display: ['Roboto'],
      },
    },
  },
  variants: {},
  plugins: [],
}
