import { Link } from 'react-router';
import { Anchor, Code, Group, Text } from '@mantine/core';
import { version } from '@/../package.json';
import mainConfig from '@/config/main.config';

const Footer = () => {
    return (
        <Group h={'100%'} px={'md'} justify='space-between'>
            <Code color='transparent'>v{version}</Code>
            <Text size='xs'>
                Built by <Anchor href={mainConfig.homepage}>Sebastian Schuler</Anchor>
            </Text>
            <Group>
                <Anchor size='xs' component={Link} to={'/privacy-notice'}>
                    Privacy Notice
                </Anchor>
            </Group>
        </Group>
    );
};

export default Footer;
