import { QueryClient, UseQueryOptions, useQuery } from '@tanstack/react-query';
import { API_QUERY_KEYS } from '../query-keys';
import { getAllUsers } from '../requests/users-requests';
import { UserDTO } from '../types/User';

export function useUserDataStore(queryClient: QueryClient, isAuthenticated: boolean | undefined) {
    const useAllUsers = ({
        key = [API_QUERY_KEYS.USERS_DATA],
        options = {},
    }: {
        key?: (string | undefined)[];
        options?: Omit<UseQueryOptions<UserDTO[]>, 'queryKey' | 'queryFn'>;
    }) => {
        return useQuery({
            queryKey: key,
            queryFn: getAllUsers,
            refetchOnMount: false,
            refetchOnWindowFocus: false,
            enabled: isAuthenticated,
            ...options,
        });
    };

    const invalidateAllUsers = () => {
        queryClient.invalidateQueries({
            queryKey: [API_QUERY_KEYS.USERS_DATA],
        });
    };

    return { useAllUsers, invalidateAllUsers };
}
