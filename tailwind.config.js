module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors:{
      black: '#000000',
      white: '#ffffff',
      stBrown: '#51392D',
      stGreen: '#697A44',
      stLightGreen: '#C9D6C2',
      stCream: '#FFFBEC',
      trlYellow: '#FBE159',
      trlBlue: '#4302CF',
      trlRed: '#EC3219',
      trlGreen: '#47BC52',
      trlSKy: '#00A7CC',

    },
    extend: {
      screens: {
        'dxl': '1440px',
      },
      keyframes: {
        'fade-in-down': {
          '0%': {
            opacity: '0',
            transform: 'translateY(-10px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)'
          },
        }
      },
      animation: {
        'fade-in-down': 'fade-in-down 0.5s ease-out'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
