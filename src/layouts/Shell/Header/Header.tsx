import { FaGithub, FaSearch } from 'react-icons/fa';
import { FiMoon, FiSun } from 'react-icons/fi';
import {
    ActionIcon,
    Burger,
    Group,
    Title,
    Tooltip,
    useComputedColorScheme,
    useMantineColorScheme,
    useMantineTheme,
} from '@mantine/core';
import { spotlight } from '@mantine/spotlight';
import AppContainer from '@/components/AppContainer';
import mainConfig from '@/config/main.config';
import { useSidebar } from '@/providers/state';

function Header() {
    const { toggleColorScheme } = useMantineColorScheme();
    const colorScheme = useComputedColorScheme();
    const { toggle: toggleSidebar, isOpen: isSidebarOpen } = useSidebar();

    const theme = useMantineTheme();
    return (
        <AppContainer h={'100%'} justify={'space-between'}>
            <Group>
                <Burger hiddenFrom='sm' opened={isSidebarOpen} onClick={toggleSidebar} />
                <Title size={'h3'}>{mainConfig.title}</Title>
            </Group>
            <Group>
                <Tooltip label='Search page (CTRL+K)'>
                    <ActionIcon
                        variant='light'
                        onClick={() => spotlight.open()}
                        aria-label='Open the spotlight to globally search the application and run commands'
                    >
                        <FaSearch />
                    </ActionIcon>
                </Tooltip>
                <Tooltip label='Github Repository'>
                    <ActionIcon
                        variant='light'
                        component='a'
                        href={mainConfig.repository}
                        target='_blank'
                        aria-label='Check out the Github repository for this application'
                    >
                        <FaGithub />
                    </ActionIcon>
                </Tooltip>
                <Tooltip label='Switch theme'>
                    <ActionIcon
                        variant='light'
                        onClick={toggleColorScheme}
                        aria-label='Toggle the color scheme between dark and light theme'
                    >
                        {colorScheme === 'dark' ? (
                            <FiMoon color={theme.colors.blue[5]} />
                        ) : (
                            <FiSun color={theme.colors.yellow[5]} />
                        )}
                    </ActionIcon>
                </Tooltip>
            </Group>
        </AppContainer>
    );
}

export default Header;
