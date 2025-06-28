import { initReactI18next } from 'react-i18next';
import i18n, { Resource } from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { APP_LANGUAGES } from './config';

function loadLocales() {
    const modules: Resource = import.meta.glob('./locales/**/*.json', { eager: true });
    const resources: Resource = {};
    for (const path in modules) {
        const match = path.match(/\.\/locales\/(.*?)\/(.*)\.json$/);
        if (!match) continue;

        const lang = match[1];
        const namespace = match[2];

        resources[lang] = resources[lang] || {};
        resources[lang][namespace] = modules[path].default;
    }

    return resources;
}

i18n.use(initReactI18next)
    .use(LanguageDetector)
    .init({
        supportedLngs: APP_LANGUAGES.map((l) => l.key),
        fallbackLng: 'en',
        resources: loadLocales(),
        interpolation: {
            escapeValue: false, // react already safes from xss
        },
    });

export default i18n;
