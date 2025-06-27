import { Stack, Title } from '@mantine/core';
import { Helmet } from '@dr.pogodin/react-helmet';
import Breadcrumbs from '@/components/Breadcrumbs';
import AppContainer from '@/layouts/AppContainer';

function Page1() {
    return (
        <AppContainer withScroll>
            <Helmet title='Page 1' />
            <Stack h={'100%'}>
                <Breadcrumbs />
                <Title>Page 1</Title>
            </Stack>
        </AppContainer>
    );
}

export default Page1;
