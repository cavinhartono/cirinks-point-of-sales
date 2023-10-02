import defaultTheme from "tailwindcss/defaultTheme";
import forms from "@tailwindcss/forms";

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php",
        "./storage/framework/views/*.php",
        "./resources/views/**/*.blade.php",
        "./resources/js/**/*.jsx",
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ["Montserrat", ...defaultTheme.fontFamily.sans],
            },
            colors: {
                black: {
                    50: "#E8E8E8",
                    100: "#D4D4D4",
                    200: "#A6A6A6",
                    300: "#7A7A7A",
                    400: "#4F4F4F",
                    500: "#222222",
                    600: "#1C1C1C",
                    700: "#141414",
                    800: "#0D0D0D",
                    900: "#080808",
                    950: "#030303",
                },
                white: {
                    50: "#FFFFFF",
                    100: "#FCFCFC",
                    200: "#FAFAFA",
                    300: "#FAFAFA",
                    400: "#F7F7F7",
                    500: "#F5F5F5",
                    600: "#C4C4C4",
                    700: "#949494",
                    800: "#616161",
                    900: "#303030",
                    950: "#1A1A1A",
                },
                green: {
                    50: "#F5FAF5",
                    100: "#EBF4EC",
                    200: "#D8E9D9",
                    300: "#C4DEC6",
                    400: "#B0D3B3",
                    500: "#9CC89F",
                    600: "#6FAF73",
                    700: "#4C8A51",
                    800: "#335C36",
                    900: "#192E1B",
                    950: "#0D170D",
                },
            },
        },
    },

    plugins: [forms],
};
