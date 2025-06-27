import { ComponentType } from 'react';

type LoaderDefaultOptions = {
    delayMs: number;
    minimumLoading: number;
};

type LoadComponent = () => Promise<{ default: ComponentType<unknown> }>;

type AnyProps = {
    [key: string]: unknown;
};

export type { LoaderDefaultOptions, LoadComponent, AnyProps };
