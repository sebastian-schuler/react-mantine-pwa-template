import { RouterProvider } from 'react-router';
import { Helmet } from '@dr.pogodin/react-helmet';
import { withErrorHandler } from '@/features/ErrorHandling';
import AppErrorBoundaryFallback from '@/features/ErrorHandling/fallbacks/App';
import { HELMET_ROOT_PROPERTIES } from './config/seo.config';
import { router } from './providers/routes';

function App() {
    return (
        <>
            <Helmet {...HELMET_ROOT_PROPERTIES} />
            <RouterProvider router={router} />;
        </>
    );
}

const AppWithErrorHandler = withErrorHandler(App, AppErrorBoundaryFallback);
export default AppWithErrorHandler;
