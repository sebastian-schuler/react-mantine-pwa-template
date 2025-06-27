import { useMemo } from 'react';
import { TbRefresh } from 'react-icons/tb';
import { Anchor, Button, Code, Group, Stack, Text, Title } from '@mantine/core';
import { Helmet } from '@dr.pogodin/react-helmet';
import { type MRT_ColumnDef, MantineReactTable } from 'mantine-react-table';
import Breadcrumbs from '@/components/Breadcrumbs';
import { UserDTO } from '@/providers/api/types/User';
import useServerStore from '@/providers/api/use-server-store';

function ApiExample() {
    const { useAllUsers } = useServerStore();
    const {
        data: users,
        isLoading,
        status,
        refetch,
        isError,
        isFetching,
        isRefetching,
    } = useAllUsers({ options: { gcTime: 0 } });

    const columns = useMemo<MRT_ColumnDef<UserDTO>[]>(
        () => [
            {
                accessorKey: 'id',
                header: 'ID',
                size: 100,
            },
            {
                accessorKey: 'username',
                header: 'Username',
            },
            {
                accessorKey: 'name',
                header: 'Name',
            },
            {
                accessorKey: 'phone',
                header: 'Phone',
            },
            {
                accessorKey: 'website',
                header: 'Website',
                Cell: ({ renderedCellValue }) => (
                    <Anchor href={'https://example.com'} target='_blank'>
                        {renderedCellValue}
                    </Anchor>
                ),
            },

            {
                accessorKey: 'company.name',
                header: 'Company',
            },
            {
                accessorKey: 'company.catchPhrase',
                header: 'Company Catchphrase',
            },
            {
                accessorKey: 'address.city',
                header: 'City',
            },
        ],
        [],
    );

    return (
        <>
            <Helmet title='API Example' />
            <Stack h={'100%'}>
                <Breadcrumbs />
                <Title>API Example</Title>
                <Text>
                    Getting data from{' '}
                    <Anchor href='https://jsonplaceholder.typicode.com/users/' target='_blank'>
                        https://jsonplaceholder.typicode.com/users/
                    </Anchor>{' '}
                    using React Query 7.
                </Text>
                <Group>
                    <Button leftSection={<TbRefresh />} onClick={() => refetch()}>
                        Refresh
                    </Button>
                    <Code>status: {status}</Code>
                    <Code>isFetching: {String(isFetching)}</Code>
                    <Code>isError: {String(isError)}</Code>
                    <Code>isLoading: {String(isLoading)}</Code>
                    <Code>isRefetching: {String(isRefetching)}</Code>
                </Group>

                <MantineReactTable
                    columns={columns}
                    data={users ?? []}
                    layoutMode='grid-no-grow'
                    state={{
                        isLoading,
                        showAlertBanner: isError,
                        showProgressBars: isFetching,
                    }}
                    enableStickyHeader
                    enableStickyFooter
                    mantineTableContainerProps={{ style: { maxHeight: '300px' } }}
                />
            </Stack>
        </>
    );
}

export default ApiExample;
