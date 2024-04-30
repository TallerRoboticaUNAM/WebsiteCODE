/** @type {import('tailwindcss').Config} */
export default {
    content:[
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme:{
        extend:{

            colors:{

                'AzulOscuro': 'hsl(202, 45%, 45%, 1)',
                'Blanco': 'hsl(360, 100%, 100%, 1)',
                'AzulClaro': 'hsl(202, 45%, 58%, 1)',

                

            }

        },
    },
    plugins: [],
}