import { Burger, Group, Text, useMantineTheme } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import mainConfig from '@/config/main.config';
import AppContainer from '@/layouts/AppContainer';
import { useSidebar } from '@/providers/state';
import classes from './Header.module.css';
import HeaderButtonLayout from './HeaderButtonLayout';

function Header() {
    const { toggle: toggleSidebar, isOpen: isSidebarOpen } = useSidebar();
    const theme = useMantineTheme();
    const isMobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);

    return (
        <AppContainer
            h={'100%'}
            justify={'space-between'}
            withYPadding={false}
            withXPadding={isMobile ? true : false}
            px={isMobile ? undefined : 'md'}
        >
            <Group>
                <Burger
                    hiddenFrom='sm'
                    opened={isSidebarOpen}
                    onClick={toggleSidebar}
                    aria-label='Toggle sidebar menu'
                />
                <Text className={classes.appTitle}>{mainConfig.title}</Text>
            </Group>
            <HeaderButtonLayout visibleFrom='sm' />
        </AppContainer>
    );
}

export default Header;
