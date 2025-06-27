import React from 'react';
import { Flex, FlexProps, ScrollArea } from '@mantine/core';
import { clsx } from 'clsx';
import { isNotDefined } from '@/utils/is-not-defined';
import classes from './AppContainer.module.css';

interface Props extends FlexProps, Omit<React.ComponentPropsWithoutRef<'div'>, keyof FlexProps> {
    withXPadding?: boolean;
    withYPadding?: boolean;
    withScroll?: boolean;
    scrollbars?: false | 'y' | 'x' | 'xy' | undefined;
}

const AppContainer: React.FC<Props> = ({
    children,
    withXPadding,
    withYPadding,
    withScroll,
    scrollbars,
    ...others
}) => {
    if (isNotDefined(withXPadding)) withXPadding = true;
    if (isNotDefined(withYPadding)) withYPadding = true;

    const content = (
        <Flex
            className={clsx(
                classes.appContainer,
                withXPadding && classes.containerXPadding,
                withYPadding && classes.containerYPadding,
            )}
            {...others}
        >
            {children}
        </Flex>
    );

    return withScroll ? (
        <ScrollArea h={'100%'} scrollbars={scrollbars ?? 'y'} type='auto'>
            {content}
        </ScrollArea>
    ) : (
        content
    );
};

export default AppContainer;
