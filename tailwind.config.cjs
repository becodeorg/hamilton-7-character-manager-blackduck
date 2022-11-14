/* @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
    content: ['./resources/**/*.{html,js}', '*.{html,js}'],
    theme: {
        extend: {},
        fontFamily: {
            blackOps: ["'Black Ops One'", ...defaultTheme.fontFamily.mono],
        },
    },
    plugins: [],
};
