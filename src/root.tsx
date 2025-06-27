import { ComponentType, StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import '@mantine/core/styles.css';
import '@mantine/dates/styles.css';
import '@mantine/notifications/styles.css';
import '@mantine/spotlight/styles.css';
import { HelmetProvider } from '@dr.pogodin/react-helmet';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Provider as JotaiProvider } from 'jotai';
import 'mantine-react-table/styles.css';
import '@/providers/theme/global-styles.css';
import { CustomThemeProvider } from './providers/theme';

const container = document.getElementById('root') as HTMLElement;
const root = createRoot(container);
const queryClient = new QueryClient();

function render(App: ComponentType) {
    root.render(
        <StrictMode>
            <JotaiProvider>
                <HelmetProvider>
                    <QueryClientProvider client={queryClient}>
                        <CustomThemeProvider>
                            <App />
                        </CustomThemeProvider>
                    </QueryClientProvider>
                </HelmetProvider>
            </JotaiProvider>
        </StrictMode>,
    );
}

export default render;
