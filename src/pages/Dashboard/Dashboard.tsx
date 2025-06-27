import { Button, List, Stack, Text, Title } from '@mantine/core';
import { notifications } from '@mantine/notifications';
import { Helmet } from '@dr.pogodin/react-helmet';
import AppContainer from '@/layouts/AppContainer';
import { useHotKeysDialog } from '@/providers/state';
import PrimaryColorSelect from './PrimaryColorSelect';

function Dashboard() {
    const { open: openHotKeysDialog } = useHotKeysDialog();

    function showNotification() {
        notifications.show({
            title: 'Default notification',
            message: 'Do not forget to star Mantine on GitHub! 🌟',
        });
    }

    return (
        <AppContainer withScroll>
            <Helmet title='Dashboard' />
            <Stack>
                <Title>Dashboard</Title>
                <Text>
                    This is an open source template to create a Vite PWA using Mantine, React Router, React Query,
                    and Jotai.
                </Text>
                <Title order={2}>Features</Title>
                <List icon='•'>
                    <List.Item>Optimized to run as a PWA</List.Item>
                    <List.Item>
                        A comprehensive component library in Mantine, using highly performant CSS modules for
                        styling.
                    </List.Item>
                    <List.Item>React Query in a scalable setup to connect to one or many APIs</List.Item>
                    <List.Item>
                        React Router for routing and lazy loading of components for smaller bundle size and higher
                        performance
                    </List.Item>
                    <List.Item>Theme management with a light and a dark theme</List.Item>
                    <List.Item>Easy to setup global key shortcuts</List.Item>
                    <List.Item>App-wide spotlight accessible with a shortcut, for quick navigation</List.Item>
                    <List.Item>Mantine form setup to handle large scale forms</List.Item>
                    <List.Item>
                        Mantine notification system that can easily be called anywhere in the application
                    </List.Item>
                </List>
                <Title order={2}>Notifications</Title>
                <Text>
                    The notification system can be called anywhere and manages displayed notifications. Give it a
                    try!
                </Text>
                <div>
                    <Button onClick={showNotification}>Test Notifications</Button>
                </div>
                <Title order={2}>Primary Theme Color</Title>
                <Text>
                    Change the primary color of the theme to dynamically adjust the look of the application.
                </Text>
                <div>
                    <PrimaryColorSelect />
                </div>
                <Title order={2}>Hotkeys</Title>
                <Text>
                    You can setup global hotkeys that work anywhere in the application. Check the list below.
                </Text>
                <div>
                    <Button aria-label='open hotkeys dialog' onClick={openHotKeysDialog}>
                        Hotkeys
                    </Button>
                </div>
            </Stack>
        </AppContainer>
    );
}

export default Dashboard;
