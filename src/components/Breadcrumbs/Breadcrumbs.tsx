import { Fragment } from 'react';
import { Link, useLocation } from 'react-router';
import { Anchor, Breadcrumbs as MantineBreadcrumbs, Text } from '@mantine/core';

const Breadcrumbs = () => {
    const { pathname } = useLocation();

    const items = pathname.split('/').map((item, i, arr) => {
        if (i === arr.length - 1) return <Text tt={'capitalize'}>{item}</Text>;

        const url = arr.slice(1).reduce((prev, curr, y) => {
            if (y > i - 1) return prev;
            return prev + '/' + curr;
        }, '');

        return (
            <Anchor component={Link} to={item ? url : '/'}>
                <Text tt={'capitalize'}>{item || 'Dashboard'}</Text>
            </Anchor>
        );
    });

    return (
        <Fragment>
            <MantineBreadcrumbs>{items}</MantineBreadcrumbs>
        </Fragment>
    );
};

export default Breadcrumbs;
