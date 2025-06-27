import { Fragment } from 'react';
import { Button, List, Stack, Text, Title } from '@mantine/core';
import { notifications } from '@mantine/notifications';
import { Helmet } from '@dr.pogodin/react-helmet';
import { useHotKeysDialog } from '@/providers/state';

function Dashboard() {
    const { open: openHotKeysDialog } = useHotKeysDialog();

    function showNotification() {
        notifications.show({
            title: 'Default notification',
            message: 'Do not forget to star Mantine on GitHub! 🌟',
        });
    }

    return (
        <Fragment>
            <Helmet title='Dashboard' />
            <Stack>
                <Title>Dashboard</Title>
                <Text>
                    This is an open source template to create a Vite PWA using Mantine, React Router, React Query,
                    and Jotai.
                </Text>
                <Title order={2}>Features</Title>
                <List>
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
                <div>
                    <Button onClick={showNotification}>Test Notifications</Button>
                </div>
                <div>
                    <Button aria-label='open hotkeys dialog' onClick={openHotKeysDialog}>
                        Hotkeys
                    </Button>
                </div>
            </Stack>
        </Fragment>
    );
}

export default Dashboard;
