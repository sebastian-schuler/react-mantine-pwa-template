import { Stack, Text, Title } from '@mantine/core';
import { Helmet } from '@dr.pogodin/react-helmet';
import Breadcrumbs from '@/components/Breadcrumbs';
import AppContainer from '@/layouts/AppContainer';

function PageCollection() {
    return (
        <AppContainer withScroll>
            <Helmet title='Page Collection' />
            <Stack h={'100%'}>
                <Breadcrumbs />
                <Title>Page Collection</Title>
                <Text>A collection of nested pages.</Text>
            </Stack>
        </AppContainer>
    );
}

export default PageCollection;
