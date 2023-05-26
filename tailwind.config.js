/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      black: '#0B0D17',
      cyan: '#D0D6F9',
      white: '#FFFFFF',
    },
    extend: {
      backgroundImage: {
        homeDesktop: "url('/assets/home/background-home-desktop.jpg')",
        homeTablet: "url('/assets/home/background-home-tablet.jpg')",
        homeMobile: "url('/assets/home/background-home-mobile.jpg')",
        destinationDesktop: "url('/assets/destination/background-home-desktop.jpg')",
        destinationTablet: "url('/assets/destination/background-home-tablet.jpg')",
        destinationMobile: "url('/assets/destination/background-home-mobile.jpg')",
        crewDesktop: "url('/assets/crew/background-home-desktop.jpg')",
        crewTablet: "url('/assets/crew/background-home-tablet.jpg')",
        crewMobile: "url('/assets/crew/background-home-mobile.jpg')",
        technologyDesktop: "url('/assets/technology/background-home-desktop.jpg')",
        technologyTablet: "url('/assets/technology/background-home-tablet.jpg')",
        technologyMobile: "url('/assets/technology/background-home-mobile.jpg')",
      },
      fontFamily: {
        barlow: ['Barlow Condensed', 'sans-serif'],
        bellefair: ['Bellefair', 'serif'],
      },
      fontSize: {
        150: '150px',
        100: '100px',
        56: '56px',
        32: '32px',
        28: '28px',
        16: '16px',
        14: '14px',
      },
      letterSpacing: {
        4.75: '4.75px',
        2.7: '2.7px',
        2.35: '2.35px',
      },
    },
  },
  plugins: [],
};
