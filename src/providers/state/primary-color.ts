import { atom, useAtom } from 'jotai';
import { MantineThemeCustomColors, SELECTABLE_THEME_PRIMARY_COLORS } from '../theme/types';

const themePrimaryColorAtom = atom<MantineThemeCustomColors>(
    localStorage.getItem('themePrimaryColor') ?? 'primaryAccent',
);

const themePrimaryColorAtomWithPersistence = atom(
    (get) => get(themePrimaryColorAtom),
    (_get, set, newStr: MantineThemeCustomColors) => {
        set(themePrimaryColorAtom, newStr);
        localStorage.setItem('themePrimaryColor', newStr);
    },
);

export function useThemePrimaryColor() {
    const [themePrimaryColor, setThemePrimaryColor] = useAtom(themePrimaryColorAtomWithPersistence);

    return {
        themePrimaryColor,
        setThemePrimaryColor,
        availableColors: SELECTABLE_THEME_PRIMARY_COLORS,
    };
}
