/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#3498db',
          DEFAULT: '#2980b9',
          dark: '#1a3c6e',
        },
        secondary: {
          light: '#36D1DC',
          DEFAULT: '#5B86E5',
          dark: '#4a6bbd',
        },
        background: '#f0f2f5',
        card: '#ffffff',
        text: {
          primary: '#333333',
          secondary: '#666666',
          muted: '#999999',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Poppins', 'sans-serif'],
      },
      boxShadow: {
        card: '0 2px 8px rgba(0, 0, 0, 0.1)',
        nav: '0 2px 10px rgba(0, 0, 0, 0.1)',
        popup: '0 4px 20px rgba(0, 0, 0, 0.15)',
      },
    },
  },
  plugins: [],
} 