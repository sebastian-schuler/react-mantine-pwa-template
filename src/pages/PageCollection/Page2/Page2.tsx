import { Link } from 'react-router';
import { Button, Stack, Title } from '@mantine/core';
import { Helmet } from '@dr.pogodin/react-helmet';
import Breadcrumbs from '@/components/Breadcrumbs';

function Page4() {
    return (
        <>
            <Helmet title='Page 2' />
            <Stack h={'100%'}>
                <Breadcrumbs />
                <Title>Page 2</Title>
                <div>
                    <Button
                        to={`/${Math.random().toString()}`}
                        component={Link}
                        variant='outlined'
                        size='small'
                        color='warning'
                    >
                        Want to check 404?
                    </Button>
                </div>
            </Stack>
        </>
    );
}

export default Page4;
