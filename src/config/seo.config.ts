import { HelmetProps } from '@dr.pogodin/react-helmet';

export const HELMET_ROOT_PROPERTIES: HelmetProps = {
    titleTemplate: '%s | PWA',
    meta: [
        // General
        { name: 'description', content: 'This is a PWA template using Mantine, React Router, and React Query' },
        { name: 'keywords', content: 'react, pwa, mantine, react query, jotai, template' },
        // OG
        { property: 'og:title', content: 'React Mantine PWA' },
        {
            property: 'og:description',
            content: 'This is a PWA template using Mantine, React Router, and React Query',
        },
        { property: 'og:url', content: 'https://example.com/' },
        { property: 'og:image', content: 'https://example.com/image.png' },
        // Twitter
        { property: 'twitter:card', content: 'summary' },
    ],
    link: [
        {
            rel: 'preload',
            href: 'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap',
            as: 'style',
            // @ts-expect-error Pass down a string, otherwise we can't access "this" context in the same way
            onLoad: "this.onload=null;this.rel='stylesheet'",
        },
        {
            rel: 'icon',
            href: '/favicon.svg',
            type: 'image/svg+xml',
        },
        {
            rel: 'alternate icon',
            href: '/favicon.svg',
            type: 'image/png',
            sizes: '16x16',
        },
        {
            rel: 'apple-touch-icon',
            href: '/apple-touch-icon.png',
            sizes: '180x180',
        },
        {
            rel: 'mask-icon',
            href: '/favicon.svg',
            color: '#FFFFFF',
        },
    ],
    htmlAttributes: { lang: 'en' },
};
