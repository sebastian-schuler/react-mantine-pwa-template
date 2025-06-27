import { FaGithub, FaSearch } from 'react-icons/fa';
import { FiMoon, FiSun } from 'react-icons/fi';
import {
    ActionIcon,
    Group,
    GroupProps,
    Tooltip,
    useComputedColorScheme,
    useMantineColorScheme,
    useMantineTheme,
} from '@mantine/core';
import { spotlight } from '@mantine/spotlight';
import mainConfig from '@/config/main.config';

const HeaderButtonLayout = (props: GroupProps) => {
    const { toggleColorScheme } = useMantineColorScheme();
    const colorScheme = useComputedColorScheme();
    const theme = useMantineTheme();

    return (
        <Group {...props}>
            <Tooltip label='Search page (CTRL+K)'>
                <ActionIcon
                    variant='light'
                    onClick={() => spotlight.open()}
                    aria-label='Open the spotlight to globally search the application and run commands'
                    size={'lg'}
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
                    size={'lg'}
                >
                    <FaGithub />
                </ActionIcon>
            </Tooltip>
            <Tooltip label='Switch theme (ALT+T)'>
                <ActionIcon
                    variant='light'
                    onClick={toggleColorScheme}
                    aria-label='Toggle the color scheme between dark and light theme'
                    size={'lg'}
                >
                    {colorScheme === 'dark' ? (
                        <FiMoon color={theme.colors.blue[5]} size={18} />
                    ) : (
                        <FiSun color={theme.colors.yellow[6]} size={18} />
                    )}
                </ActionIcon>
            </Tooltip>
        </Group>
    );
};

export default HeaderButtonLayout;
