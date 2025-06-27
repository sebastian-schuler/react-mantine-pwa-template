import { Modal, Stack, useMantineColorScheme } from '@mantine/core';
import { useHotkeys } from '@mantine/hooks';
import { useHotKeysDialog } from '@/providers/state';
import { Shortcut } from './Shortcut';

function HotKeys() {
    const { toggleColorScheme } = useMantineColorScheme();
    const { isOpen, close, toggle: toggleHotKeysDialog } = useHotKeysDialog();

    useHotkeys([
        ['alt+t', toggleColorScheme],
        ['alt+k', toggleHotKeysDialog],
    ]);

    return (
        <Modal onClose={close} opened={isOpen} title='Hot Keys'>
            <Stack>
                <Shortcut prefix='ALT' symbol='T' description='Toggle theme' />
                <Shortcut prefix='ALT' symbol='K' description='Toggle Hot Keys Modal' />
                <Shortcut prefix='CTRL' symbol='K' description='Toggle Spotlight' />
            </Stack>
        </Modal>
    );
}

export default HotKeys;
