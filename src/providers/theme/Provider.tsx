import { Fragment } from 'react/jsx-runtime';
import { ColorSchemeScript, MantineProvider, localStorageColorSchemeManager } from '@mantine/core';
import { useThemePrimaryColor } from '../state/primary-color';
import appTheme from './themes';

const colorSchemeManager = localStorageColorSchemeManager({
    key: 'color-scheme',
});

interface Props {
    children: React.ReactNode;
}

function CustomThemeProvider({ children }: Props) {
    const { themePrimaryColor } = useThemePrimaryColor();

    return (
        <Fragment>
            <ColorSchemeScript defaultColorScheme='dark' />
            <MantineProvider
                theme={{ ...appTheme, primaryColor: themePrimaryColor }}
                defaultColorScheme='dark'
                colorSchemeManager={colorSchemeManager}
            >
                {children}
            </MantineProvider>
        </Fragment>
    );
}

export default CustomThemeProvider;
