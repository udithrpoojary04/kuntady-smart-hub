/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    DEFAULT: '#4F46E5', // Indigo 600
                    light: '#818CF8', // Indigo 400
                    dark: '#3730A3', // Indigo 800
                },
                secondary: {
                    DEFAULT: '#7C3AED', // Violet 600
                    light: '#A78BFA', // Violet 400
                    dark: '#5B21B6', // Violet 800
                },
                accent: {
                    DEFAULT: '#14B8A6', // Teal 500
                    light: '#5EEAD4', // Teal 300
                    dark: '#0F766E', // Teal 700
                },
                neutral: {
                    light: '#F3F4F6', // Gray 100
                    DEFAULT: '#9CA3AF', // Gray 400
                    dark: '#1F2937', // Gray 800
                }
            },
            fontFamily: {
                sans: ['Outfit', 'Inter', 'sans-serif'],
                display: ['Outfit', 'sans-serif'],
            },
            animation: {
                'fade-in': 'fadeIn 0.5s ease-out',
                'slide-up': 'slideUp 0.5s ease-out',
                'float': 'float 6s ease-in-out infinite',
            },
            keyframes: {
                fadeIn: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                },
                slideUp: {
                    '0%': { transform: 'translateY(20px)', opacity: '0' },
                    '100%': { transform: 'translateY(0)', opacity: '1' },
                },
                float: {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-10px)' },
                },
            }
        },
    },
    plugins: [],
}
