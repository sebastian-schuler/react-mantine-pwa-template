import { FC, Suspense, lazy, useEffect, useState } from 'react';
import { AnyProps, LoadComponent, LoaderDefaultOptions } from './types';

/**
 * Delay the fallback by a certain amount of time to prevent flickering if loading is fast
 */
function getDelayedFallback(Fallback: FC, delay: number) {
    return function DelayedFallback(props: AnyProps) {
        const [isDelayPassed, setIsDelayPassed] = useState(false);

        useEffect(() => {
            const timerId = setTimeout(() => setIsDelayPassed(true), delay);

            return () => clearTimeout(timerId);
        }, []);

        return isDelayPassed ? <Fallback {...props} /> : null;
    };
}

const getLazyComponent = (loadComponent: LoadComponent) =>
    lazy(async () => loadComponent().then((moduleExports) => moduleExports));

/**
 * Dynamically loads a React component with optional delay and fallback.
 *
 * This utility is useful for code splitting and improving load performance by
 * deferring the loading of non-critical components. It uses React's `Suspense` and
 * `lazy` under the hood to handle dynamic imports.
 *
 * @example
 * const WelcomePage = asyncComponentLoader(
 *   () => import('pages/Welcome'),
 *   {},
 *   { delayMs: 300 },
 *   () => <Spinner />
 * );
 *
 * @param {() => Promise<{ default: React.ComponentType<any> }>} loadComponent - A function returning a dynamic `import()` of the target component.
 * @param {Object} additionalProps - Extra props to inject into the loaded component.
 * @param {{ delayMs?: number }} loaderOptions - Options controlling loader behavior. `delayMs` adds a delay before showing the fallback.
 * @param {React.FC} FallbackWaiting - A React functional component to show as a fallback during loading.
 *
 * @returns {React.FC} - A React functional component that renders the lazily loaded component wrapped in `Suspense` with the specified fallback.
 */
function asyncComponentLoader(
    loadComponent: LoadComponent,
    additionalProps: AnyProps,
    loaderOptions: LoaderDefaultOptions,
    FallbackWaiting: FC,
): React.FC {
    const Fallback = loaderOptions.delayMs
        ? getDelayedFallback(FallbackWaiting, loaderOptions.delayMs)
        : FallbackWaiting;

    const LazyComponent = getLazyComponent(loadComponent);

    return function AsyncComponent(props: AnyProps) {
        return (
            <Suspense fallback={<Fallback />}>
                <LazyComponent {...additionalProps} {...props} />
            </Suspense>
        );
    };
}

export default asyncComponentLoader;
