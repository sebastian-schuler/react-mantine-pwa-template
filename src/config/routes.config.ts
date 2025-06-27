import { RouteObject } from 'react-router';
import AppErrorBoundaryFallback from '@/features/ErrorHandling/fallbacks/App';
import asyncComponentLoader from '@/utils/loader';

export const routes: RouteObject[] = [
    {
        path: '/',
        Component: asyncComponentLoader(() => import('@/layouts/Shell')),
        ErrorBoundary: AppErrorBoundaryFallback,
        children: [
            {
                index: true,
                Component: asyncComponentLoader(() => import('@/pages/Dashboard')),
            },
            {
                path: 'page-collection',
                children: [
                    {
                        index: true,
                        Component: asyncComponentLoader(() => import('@/pages/PageCollection')),
                        handle: {
                            title: 'LLLL',
                        },
                    },
                    {
                        Component: asyncComponentLoader(() => import('@/pages/PageCollection/Page1')),
                        path: 'page-1',
                    },
                    {
                        Component: asyncComponentLoader(() => import('@/pages/PageCollection/Page2')),
                        path: 'page-2',
                    },
                ],
            },
            {
                Component: asyncComponentLoader(() => import('@/pages/FormExample')),
                path: 'form-example',
            },
            {
                Component: asyncComponentLoader(() => import('@/pages/ApiExample')),
                path: 'api-example',
            },
            {
                Component: asyncComponentLoader(() => import('@/pages/WasmExample')),
                path: 'wasm-example',
            },
            {
                Component: asyncComponentLoader(() => import('@/pages/PrivacyNotice')),
                path: 'privacy-notice',
            },
            {
                path: '*',
                Component: asyncComponentLoader(() => import('@/pages/NotFound')),
            },
        ],
    },
];
