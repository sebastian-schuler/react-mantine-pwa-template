import { useCallback } from 'react';
import { atom, useAtom } from 'jotai';

const isHotKeysDialogOpenState = atom(false);

export function useHotKeysDialog() {
    const [isOpen, setIsOpen] = useAtom(isHotKeysDialogOpenState);

    const toggle = useCallback(() => setIsOpen((isOpen) => !isOpen), [setIsOpen]);
    const close = useCallback(() => setIsOpen(false), [setIsOpen]);
    const open = useCallback(() => setIsOpen(true), [setIsOpen]);

    return {
        isOpen,
        toggle,
        close,
        open,
    };
}
