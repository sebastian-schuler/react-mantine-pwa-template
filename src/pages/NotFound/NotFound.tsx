import { Center, Text } from '@mantine/core';
import { Helmet } from '@dr.pogodin/react-helmet';
import AppContainer from '@/layouts/AppContainer';

function NotFound() {
    return (
        <AppContainer withScroll>
            <Helmet title='404 - Not found' />
            <Center h={'100%'}>
                <Text>404 - Not found</Text>
            </Center>
        </AppContainer>
    );
}

export default NotFound;
