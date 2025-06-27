import { DefaultMantineColor, MantineColorsTuple } from '@mantine/core';

export type MantineThemeCustomColors =
    | 'primaryAccent'
    | 'primaryForegroundWhite'
    | 'primaryForegroundBlack'
    | 'primaryForeground'
    | DefaultMantineColor;

export const SELECTABLE_THEME_PRIMARY_COLORS = [
    'primaryAccent',
    'red',
    'pink',
    'grape',
    'violet',
    'indigo',
    'blue',
    'cyan',
    'green',
    'lime',
    'yellow',
    'orange',
    'teal',
] as const;

declare module '@mantine/core' {
    export interface MantineThemeColorsOverride {
        colors: Record<MantineThemeCustomColors, MantineColorsTuple>;
    }
}
