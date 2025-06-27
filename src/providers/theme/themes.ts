import { Title, colorsTuple, createTheme, rem, virtualColor } from '@mantine/core';

const appTheme = createTheme({
    colors: {
        primaryAccent: [
            '#CFF1E0',
            '#99E9A3',
            '#67E0A3',
            '#41CF87',
            '#34AD70', // Primary shade
            '#308B5D',
            '#2C6F4D',
            '#275A40',
            '#234835',
            '#1F3A2C',
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
    luminanceThreshold: 0.4,

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
