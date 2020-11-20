module.exports = { 
  purge: {
    // Learn more on https://tailwindcss.com/docs/controlling-file-size/#removing-unused-css
    enabled: process.env.NODE_ENV === 'production',
    content: [
      'src/components/**/*.vue',
      'src/views/**/*.vue',
      'src/pages/**/*.vue',
    ]
  }, 
  darkMode: 'class',
};