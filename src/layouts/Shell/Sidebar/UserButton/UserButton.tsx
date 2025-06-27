import { FaChevronRight } from 'react-icons/fa';
import { Avatar, Group, Modal, Text, UnstyledButton } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import classes from './UserButton.module.css';

function UserButton() {
    const [opened, { close, open }] = useDisclosure();

    return (
        <>
            <UnstyledButton className={classes.user} onClick={open}>
                <Group>
                    <Avatar src='https://picsum.photos/70' radius='xl' />

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
            <Modal opened={opened} onClose={close} title='User Info' centered>
                <Text>John Doe</Text>
                <Text c={'dimmed'}>jdoe@outlook.com</Text>
            </Modal>
        </>
    );
}

export default UserButton;
