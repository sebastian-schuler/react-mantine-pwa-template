import { useCallback } from 'react';
import i18n from '.';
import { AppLanguageKey } from './config';

export function useLanguage() {
    const changeLanguage = useCallback((language: AppLanguageKey) => {
        i18n.changeLanguage(language);
    }, []);

    return {
        changeLanguage,
        language: i18n.language,
    };
}
