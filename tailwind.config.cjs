/** @type {import('tailwindcss').Config} */
/** @type {@import url('https://fonts.googleapis.com/css2?family=Exo:wght@300;400;500;600;700;800&display=swap');} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      'dark': '#424040',
      'purple': '#8A70D6',
      'lightpurple': '#E9E3FF',
      'gray': '#696969',
      'lightgray': '#B8B8B8',
      'white': '#FBFBFB',
    },
    fontFamily: {
      sans: ['Exo', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    fontWeight: {
      light: '300',
      regular: '400',
      medium: '500',
      semibold: '600',
      bold: '700',
      extrabold: '800'
    },
    extend: {
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
    }
  },
  plugins: [],
}
