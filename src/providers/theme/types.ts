import { DefaultMantineColor, MantineColorsTuple } from '@mantine/core';

type ExtendedCustomColors =
    | 'primaryAccent'
    | 'primaryForegroundWhite'
    | 'primaryForegroundBlack'
    | 'primaryForeground'
    | DefaultMantineColor;

declare module '@mantine/core' {
    export interface MantineThemeColorsOverride {
        colors: Record<ExtendedCustomColors, MantineColorsTuple>;
    }
}
