import { Box, Text } from '@mantine/core';

function LoaderErrorBoundaryFallback() {
    return (
        <Box>
            <Text>Something went wrong with this component loading process... Please try again later</Text>
        </Box>
    );
}

export default LoaderErrorBoundaryFallback;
