import type { Config } from 'tailwindcss'
import {Dancing_Script, Nosifer, PT_Serif, Pacifico, Poppins, Roboto, Golos_Text} from 'next/font/google'
const twColors = require('tailwindcss/colors')

const colors = {
  transparent: twColors.transparent,
  black: '#2E3239',
  block: twColors.black,
  white: twColors.white,
  secondary: '#161D25',
  primary: '#FF9902',
  'bg-color': 'F2F2F5',
  aqua: '#268697',
  gray: '#E6E6E6',
  red: twColors.red,
  blue: '#1E90FF',
  golden: '#DAA520',
  fiolet: '#8A2BE2',
  yellow: '#FFFF00',
  lime: '#00FF00',
  cried :'#E0FFFF',
  lowLime:'#7CFC00',
  grey: '#373d44',
  failet: '#5748a2',
  gold: '#ffc125',
  diamond: '#b9f2ff',
  silver: '#c0c0c0',
  lowBlue: '#1E90FF',
  lowYellow: '#9400d3'

}

const config: Config = {
  content: [
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontSize: {
        xs: '0.82rem',
        sm: '0.98rem',
        base: '1.15rem',
        lg: '1.22rem',
        xl: '1.36rem',
        '1.5x1': '1.5rem',
        '2x1': '1.725rem',
        '3x1': '2.155rem',
        '4x1': '2.58rem',
        '5x1': '3.45rem',
        '6x1': '4.3rem',
        '7x1': '5.17rem',
        '8x1': '6.9rem',
        '9x1': '9.2rem',
        'xl-': '0.5rem'
      },
      colors,
      borderOpacity: {
        '10': '0.1',
        '50': '0.5',
        '60': '0.6',
        '70': '0.7',
        '80':'0.8'
      },
      borderWidth: {
        '1': '1px',
        '0.5': '0.5px',
        '0.1': '0.1px'
      },
      fontFamily: {
        sans: ['Playpen Sans'],
        rubic : ['Rubik'],
        nose: ['Nosifer'],
        ita: ['Dancing Script'],
        ant : ['Anton'],
        ita2 : ['Pacifico'],
        met : ['Metal Mania'],
        lst : ['Black Ops One'],
        golos: ['Golos Text']
      },
      screens: {
        'se': '375px',
        'xr': '414px',
        'pro': '390px',
        "hux": '1280px',
        'ph': {'max': '412px'},
        'mx': {'max': '1024px'},
        'px': {'max': '1280px'},
        'pm': {'max': '892px'},
        'hub': {'max': '915px'},
        'nex': {'max': '720px'},
        'tel': {'max': '820px'},
        'mhx': {'max': '1368px'},
        'tel2': {'max': '768px'},
        'gal': {'max': '670px'},
        'mel': {'max': '540px'},
        's8': {'max': '360px'},
        's10': {'max': '370px'},
        's9': {'max': '420px'},
      }
    },
  plugins: [],
  }
}

export default config
