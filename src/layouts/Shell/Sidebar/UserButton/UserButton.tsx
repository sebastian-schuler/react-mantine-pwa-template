import { useState } from 'react';
import { FaChevronRight, FaExclamation } from 'react-icons/fa';
import {
    Avatar,
    Button,
    Group,
    Modal,
    PasswordInput,
    Stack,
    Text,
    TextInput,
    ThemeIcon,
    UnstyledButton,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { useAuth } from '@/providers/auth';
import classes from './UserButton.module.css';

function UserButton() {
    const [loginOpened, { close: closeLogin, open: openLogin }] = useDisclosure();
    const [userScreenOpened, { close: closeUserScreen, open: openUserScreen }] = useDisclosure();

    const { user, login, logout } = useAuth();
    const [isLoading, setIsLoading] = useState(false);
    const [username, setUsername] = useState('demo');
    const [password, setPassword] = useState('password');
    const [error, setError] = useState<string | null>(null);

    const handleLogin = async () => {
        setIsLoading(true);
        const res = await login(username, password);
        setIsLoading(false);
        if (res.success) {
            setError(null);
            closeLogin();
        } else {
            setError(res.message);
        }
    };
    const handleLogout = async () => {
        closeUserScreen();
        logout();
    };

    return (
        <>
            {user === null ? (
                <UnstyledButton className={classes.user} onClick={openLogin}>
                    <Group>
                        <Text>Login</Text>
                        <FaChevronRight size={14} />
                    </Group>
                </UnstyledButton>
            ) : (
                <UnstyledButton className={classes.user} onClick={openUserScreen}>
                    <Group>
                        <Avatar src='https://picsum.photos/70' radius='xl' alt='user avatar' />

                        <div style={{ flex: 1 }}>
                            <Text size='sm' fw={500}>
                                John Doe
                            </Text>

                            <Text c='dimmed' size='xs'>
                                jdoe@outlook.com
                            </Text>
                        </div>

                        <FaChevronRight size={14} />
                    </Group>
                </UnstyledButton>
            )}
            <Modal opened={userScreenOpened} onClose={closeUserScreen} title='User Info' centered>
                <Stack>
                    <Text>John Doe</Text>
                    <Text c={'dimmed'}>jdoe@outlook.com</Text>
                    <Button onClick={async () => handleLogout()}>Logout</Button>
                </Stack>
            </Modal>
            <Modal opened={loginOpened} onClose={closeLogin} title='Login' centered>
                <Stack>
                    <Text size='sm'>Hint: try "demo" and "password" to use this mock auth.</Text>
                    <TextInput
                        label='Username'
                        value={username}
                        onChange={(v) => setUsername(v.currentTarget.value)}
                    />
                    <PasswordInput
                        label='Password'
                        value={password}
                        onChange={(v) => setPassword(v.currentTarget.value)}
                    />
                    <Button loading={isLoading} onClick={async () => handleLogin()}>
                        Login
                    </Button>
                    {error && (
                        <Group>
                            <ThemeIcon color='red.6'>
                                <FaExclamation />
                            </ThemeIcon>
                            <Text c={'red.6'}>{error}</Text>
                        </Group>
                    )}
                </Stack>
            </Modal>
        </>
    );
}

export default UserButton;
