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
                    <ActionIcon variant='outline' onClick={() => spotlight.open()}>
                        <FaSearch />
                    </ActionIcon>
                </Tooltip>
                <Tooltip label='Github Repository'>
                    <ActionIcon variant='outline' component='a' href={mainConfig.repository} target='_blank'>
                        <FaGithub />
                    </ActionIcon>
                </Tooltip>
                <Tooltip label='Switch theme'>
                    <ActionIcon variant='outline' onClick={toggleColorScheme}>
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
