export const APP_LANGUAGES = [
    { key: 'en', label: 'EN' },
    { key: 'de', label: 'DE' },
    { key: 'fr', label: 'FR' },
] as const;

export type AppLanguageKey = (typeof APP_LANGUAGES)[number]['key'] | (string & {});
