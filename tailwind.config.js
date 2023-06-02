/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      black: '#0B0D17',
      lightBlue: '#D0D6F9',
      white: '#FFFFFF',
    },
    extend: {
      backgroundImage: {
        homeDesktop: "url('/src/assets/home/background-home-desktop.jpg')",
        homeTablet: "url('src/assets/home/background-home-tablet.jpg')",
        homeMobile: "url('src/assets/home/background-home-mobile.jpg')",
        destinationDesktop: "url('src/assets/destination/background-destination-desktop.jpg')",
        destinationTablet: "url('src/assets/destination/background-destination-tablet.jpg')",
        destinationMobile: "url('src/assets/destination/background-destination-mobile.jpg')",
        crewDesktop: "url('src/assets/crew/background-crew-desktop.jpg')",
        crewTablet: "url('src/assets/crew/background-crew-tablet.jpg')",
        crewMobile: "url('src/assets/crew/background-crew-mobile.jpg')",
        technologyDesktop: "url('src/assets/technology/background-technology-desktop.jpg')",
        technologyTablet: "url('src/assets/technology/background-technology-tablet.jpg')",
        technologyMobile: "url('src/assets/technology/background-technology-mobile.jpg')",
      },
      fontFamily: {
        barlow: ['Barlow', 'sans-serif'],
        barlowCondensed: ['Barlow Condensed', 'sans-serif'],
        bellefair: ['Bellefair', 'serif'],
      },
      fontSize: {
        150: '9.375rem',
        100: '6.25rem',
        80: '5rem',
        56: '3.5rem',
        32: '2rem',
        28: '1.75rem',
        20: '1.25rem',
        18: '1.125rem',
        16: '1rem',
        15: '0.9375rem',
        14: '0.875rem',
      },
      letterSpacing: {
        0.168: '0.168em',
      },
    },
  },
  plugins: [],
};
