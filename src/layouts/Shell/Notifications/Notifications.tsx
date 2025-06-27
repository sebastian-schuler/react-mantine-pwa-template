import { useMantineTheme } from '@mantine/core';
import { Notifications as MantineNotifications } from '@mantine/notifications';

const AppNotifications = () => {
    const theme = useMantineTheme();

    return (
        <MantineNotifications
            autoClose={4000}
            limit={4}
            position='bottom-right'
            styles={{ notification: { bottom: theme.spacing.lg, right: theme.spacing.lg } }}
        />
    );
};

export default AppNotifications;
