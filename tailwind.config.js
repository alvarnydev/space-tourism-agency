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
        homeDesktop: "url('/assets/home/background-home-desktop.jpg')",
        homeTablet: "url('/assets/home/background-home-tablet.jpg')",
        homeMobile: "url('/assets/home/background-home-mobile.jpg')",
        destinationDesktop: "url('/assets/destination/background-destination-desktop.jpg')",
        destinationTablet: "url('/assets/destination/background-destination-tablet.jpg')",
        destinationMobile: "url('/assets/destination/background-destination-mobile.jpg')",
        crewDesktop: "url('/assets/crew/background-crew-desktop.jpg')",
        crewTablet: "url('/assets/crew/background-crew-tablet.jpg')",
        crewMobile: "url('/assets/crew/background-crew-mobile.jpg')",
        technologyDesktop: "url('/assets/technology/background-technology-desktop.jpg')",
        technologyTablet: "url('/assets/technology/background-technology-tablet.jpg')",
        technologyMobile: "url('/assets/technology/background-technology-mobile.jpg')",
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
        body: [
          '18px',
          {
            lineHeight: '2rem',
            // letterSpacing: '-0.01em',
            fontWeight: '400',
          },
        ],
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
