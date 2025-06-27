import { Stack, Title } from '@mantine/core';
import { Helmet } from '@dr.pogodin/react-helmet';
import Breadcrumbs from '@/components/Breadcrumbs';

function Page1() {
    return (
        <>
            <Helmet title='Page 1' />
            <Stack h={'100%'}>
                <Breadcrumbs />
                <Title>Page 1</Title>
            </Stack>
        </>
    );
}

export default Page1;
