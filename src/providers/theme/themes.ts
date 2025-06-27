import { Title, colorsTuple, createTheme, rem, virtualColor } from '@mantine/core';

const appTheme = createTheme({
    colors: {
        primaryAccent: [
            '#f3f0ff',
            '#e5dbff',
            '#d0bfff',
            '#b197fc', 
            '#9775fa', // Primary shade
            '#845ef7',
            '#7950f2',
            '#7048e8',
            '#6741d9',
            '#0b7285',
        ],
        primaryForegroundWhite: colorsTuple('#FFF'),
        primaryForegroundBlack: colorsTuple('#000'),
        primaryForeground: virtualColor({
            name: 'primaryForeground',
            dark: 'primaryForegroundWhite',
            light: 'primaryForegroundBlack',
        }),
        primaryBackgroundLight: [
            '#FFFFFF',
            '#FFFFFF',
            '#FFFFFF',
            '#FFFFFF',
            '#FFFFFF',
            '#FFFFFF',
            '#FFFFFF',
            '#FFFFFF',
            '#FFFFFF',
            '#FFFFFF',
        ],
        primaryBackgroundDark: [
            '#000000',
            '#000000',
            '#000000',
            '#000000',
            '#000000',
            '#000000',
            '#000000',
            '#000000',
            '#000000',
            '#000000',
        ],
        primaryBackground: virtualColor({
            name: 'primaryBackground',
            dark: 'primaryBackgroundDark',
            light: 'primaryBackgroundLight',
        }),
    },
    white: '#FFF',
    black: '#000',

    primaryColor: 'primaryAccent',
    primaryShade: { dark: 4, light: 4 },
    autoContrast: true,
    luminanceThreshold: 0.3,

    shadows: {
        md: '1px 1px 3px rgba(0, 0, 0, .25)',
        xl: '5px 5px 3px rgba(0, 0, 0, .25)',
    },

    headings: {
        fontFamily: 'Roboto, sans-serif',
        sizes: {
            h1: { fontSize: rem(36) },
        },
    },

    components: {
        Title: Title.extend({
            defaultProps: {
                c: 'primaryForeground',
            },
        }),
    },
});

export default appTheme;
