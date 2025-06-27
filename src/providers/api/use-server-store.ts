import { useQueryClient } from '@tanstack/react-query';
import { useAuthorization } from './authorization';
import { useUserDataStore } from './store/users-store';

const useServerStore = () => {
    const queryClient = useQueryClient();
    const { isAuthenticated } = useAuthorization();

    const users = useUserDataStore(queryClient, isAuthenticated);

    return {
        ...users,
    };
};

export default useServerStore;
