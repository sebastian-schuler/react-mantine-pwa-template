import React from 'react';
import { Flex, FlexProps } from '@mantine/core';
import classes from './AppContainer.module.css';

interface Props extends FlexProps, Omit<React.ComponentPropsWithoutRef<'div'>, keyof FlexProps> {}

const AppContainer: React.FC<Props> = ({ children, ...others }) => {
    return (
        <Flex className={classes.appContainer} {...others}>
            {children}
        </Flex>
    );
};

export default AppContainer;
