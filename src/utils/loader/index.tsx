import Loading from '@/components/Loading';
import mainConfig from '@/config/main.config';
import asyncComponentLoader from './loader';
import type { AnyProps, LoadComponent, LoaderDefaultOptions } from './types';

const configuredAsyncComponentLoader = (
    loadComponent: LoadComponent,
    additionalProps: AnyProps = {},
    loaderOptions: LoaderDefaultOptions = mainConfig.loader,
    FallbackWaiting = Loading,
) => asyncComponentLoader(loadComponent, additionalProps, loaderOptions, FallbackWaiting);

export const loaderDefaultOptions = mainConfig.loader;
export default configuredAsyncComponentLoader;
