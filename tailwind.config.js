/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    daisyui: {
        themes: [
            {
                mytheme: {
                    primary: "#FF1E00",
                    secondary: "#157f1f",
                    accent: "#edd83d",
                    neutral: "#bbdef0",
                    "base-100": "#ffffff",
                },
            },
        ],
    },
    plugins: [require("daisyui")],
};
