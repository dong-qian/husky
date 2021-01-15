// tailwind.config.js

module.exports = {
  purge: ['./src/**/*.js'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          light: 'rgba(228, 228, 228, 0.04)',
          dark: '#242731'
        },
        secondary: {
          dark: '#6C5DD3'
        }
      },
      fontFamily: {
        poppins: 'Poppins',
        inter: 'Inter'
      },
      spacing: {
        192: '48rem'
      },
      zIndex: {
        max: '99999'
      }
    }
  }
};
