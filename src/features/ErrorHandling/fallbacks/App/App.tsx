import { FiMail } from 'react-icons/fi';
import { VscDebugRestart } from 'react-icons/vsc';
import { Box, Button, Center, Group, Paper, Stack, Text, Title } from '@mantine/core';
import mainConfig from '@/config/main.config';
import resetApp from '@/utils/reset-app';

function AppErrorBoundaryFallback() {
    return (
        <Box h={'100%'}>
            <Center h={'100%'}>
                <Paper px={'md'}>
                    <Stack>
                        <Title>Sorry, something went wrong</Title>
                        <Text>
                            It would be much appreciated if you could take the time to report the bug, otherwise
                            you can restart the application.
                        </Text>
                        <Group justify='end'>
                            <Button
                                leftSection={<FiMail size={16} />}
                                component='a'
                                variant='outline'
                                target='_blank'
                                rel='noreferrer'
                                href={`mailto: ${mainConfig.email}`}
                            >
                                Report a bug by email
                            </Button>
                            <Button
                                variant='outlined'
                                leftSection={<VscDebugRestart size={16} />}
                                onClick={resetApp}
                            >
                                Reset the application
                            </Button>
                        </Group>
                    </Stack>
                </Paper>
            </Center>
        </Box>
    );
}

export default AppErrorBoundaryFallback;
