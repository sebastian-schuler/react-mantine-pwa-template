import { useCallback } from 'react';
import { atom, useAtom } from 'jotai';

const isSidebarOpenState = atom(false);

function useSidebar() {
    const [isOpen, setIsOpen] = useAtom(isSidebarOpenState);

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

export { useSidebar };
