/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ['class'],
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            borderRadius: {
                lg: 'var(--radius)',
                md: 'calc(var(--radius) - 2px)',
                sm: 'calc(var(--radius) - 4px)'
            },
            colors: {},
            animation: {
                spotlight: "spotlight 2s ease .75s 1 forwards",
                glow: "glow 4s ease-in-out infinite",
                'marquee-left': 'marquee-left 25s linear infinite',
                'marquee-right': 'marquee-right 25s linear infinite', // Added glow animation
            },
            keyframes: {
                'marquee-left': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        'marquee-right': {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0)' },
        },
                spotlight: {
                    "0%": {
                        opacity: 0,
                        transform: "translate(-72%, -62%) scale(0.5)",
                    },
                    "100%": {
                        opacity: 1,
                        transform: "translate(-50%,-40%) scale(1)",
                    },
                },
                glow: { // Added glow keyframes
                    "0%, 100%": {
                        opacity: 0.8,
                        transform: "scale(1)",
                    },
                    "50%": {
                        opacity: 1,
                        transform: "scale(1.1)",
                    },
                },
            },
        }
    },
    plugins: [require("tailwindcss-animate")],
};
