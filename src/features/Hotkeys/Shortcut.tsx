import { Box, Group, Kbd } from '@mantine/core';

export function Shortcut({
    symbol,
    description,
    prefix = 'CTRL',
}: {
    symbol: string;
    description: string;
    prefix?: string;
}) {
    return (
        <Group gap={7}>
            <Kbd size={16}>{prefix}</Kbd>
            <Box fz={18} fw={500}>
                +
            </Box>
            <Kbd size={16} w={40}>
                {symbol}
            </Kbd>

            <Box fz={16} ms='sm'>
                {description}
            </Box>
        </Group>
    );
}
