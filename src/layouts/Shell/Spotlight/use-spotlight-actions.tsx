import { useMemo } from 'react';
import { FiHome } from 'react-icons/fi';
import { useNavigate } from 'react-router';
import { SpotlightActionData } from '@mantine/spotlight';

export function useSpotlightActions() {
    const navigate = useNavigate();

    const actions: SpotlightActionData[] = useMemo(
        () => [
            {
                id: 'dashboard',
                label: 'Dashboard',
                description: 'Get to the applications dashboard',
                onClick: () => navigate('/'),
                leftSection: <FiHome size={24} />,
            },
            {
                id: 'page1',
                label: 'Page 1',
                description: 'See page 1',
                onClick: () => navigate('/pages/page-1'),
            },
            {
                id: 'page2',
                label: 'Page 2',
                description: 'See page 2',
                onClick: () => navigate('/pages/page-2'),
            },
            {
                id: 'form-example',
                label: 'Form Example',
                description: 'See an example on how to implement a form',
                onClick: () => navigate('/form-example'),
            },
            {
                id: 'api-example',
                label: 'API Example',
                description: 'See an example on how to implement an API connection',
                onClick: () => navigate('/api-example'),
            },
            {
                id: 'privacy-notice',
                label: 'Privacy Notice',
                description: 'This applications privacy notice',
                onClick: () => navigate('/privacy-notice'),
            },
        ],
        [navigate],
    );

    return actions;
}
