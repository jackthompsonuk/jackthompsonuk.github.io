module.exports = {
    purge: [],
    darkMode: false, // or 'media' or 'class'
    theme: {
        container: {
            center: true,
            padding: {
                DEFAULT: '1.6rem',
                sm: '4rem',
                lg: '6rem',
                xl: '10rem',
            },
        },
        fontFamily: {
            'sans': ['Urbanist', 'sans-serif'],
        },
        extend: {
            fontSize: {
                '2.5xl': '1.625rem',
                '3.5xl': '2rem'
            },
            letterSpacing: {
                'massive': '0.2em'
            },
        },
    },
    variants: {
        extend: {
            zIndex: ['hover', 'group-hover'],
        },
    },
    plugins: [
        require('@tailwindcss/aspect-ratio'),
    ],
}
