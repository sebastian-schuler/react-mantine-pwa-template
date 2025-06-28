import 'i18next';
import common from './locales/en/common.json';
import pageCollection from './locales/en/pageCollection.json';

declare module 'i18next' {
    interface CustomTypeOptions {
        resources: {
            common: typeof common;
            pageCollection: typeof pageCollection;
        };
    }
}
