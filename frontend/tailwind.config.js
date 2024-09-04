/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  theme: {
    extend: {
      colors: {
        'deep-orange': {
          DEFAULT: '#FF5722',
          'lighten-5': '#FBE9E7',
          'lighten-4': '#FFCCBC',
          'lighten-3': '#FFAB91',
          'lighten-2': '#FF8A65',
          'lighten-1': '#FF7043',
          'darken-1': '#F4511E',
          'darken-2': '#E64A19',
          'darken-3': '#D84315',
          'darken-4': '#BF360C',
          'accent-1': '#FF9E80',
          'accent-2': '#FF6E40',
          'accent-3': '#FF3D00',
          'accent-4': '#DD2C00',
        },
      },
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
      }
    },
  },
  plugins: [],
}

