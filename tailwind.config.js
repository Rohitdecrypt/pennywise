/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  // theme: {
  //   extend: {
  //     backgroundImage: {
  //       'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
  //       'gradient-conic':
  //         'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
  //     },
  //   },
  // },
  // plugins: [],
  theme: {
    extend: {
      textColor: {
        'custom': '#369EA4',
         'custom-greenlight':"#369EA4"
      },
      backgroundColor: {
        'custom-grey': '#EEF2F6', 
        'custom-green': '#369EA4', 
      },
      borderColor: {
       'custom-border-green':"#369EA4"
      },
      backgroundImage:{
        'custum-bg-icon':"../images/selectarrow.png"
      }
    },
  },
  plugins: [],
}
