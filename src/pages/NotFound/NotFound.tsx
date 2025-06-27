import { Center, Text } from '@mantine/core';
import { Helmet } from '@dr.pogodin/react-helmet';

function NotFound() {
    return (
        <>
            <Helmet title='404 - Not found' />
            <Center h={'100%'}>
                <Text>404 - Not found</Text>
            </Center>
        </>
    );
}

export default NotFound;
