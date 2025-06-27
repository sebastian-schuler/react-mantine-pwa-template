import { FiSearch } from 'react-icons/fi';
import { Spotlight } from '@mantine/spotlight';
import { useSpotlightActions } from './use-spotlight-actions';

const AppSpotlight = () => {
    const actions = useSpotlightActions();

    return (
        <Spotlight
            actions={actions}
            nothingFound='Nothing found...'
            highlightQuery
            searchProps={{
                leftSection: <FiSearch size={20} />,
                placeholder: 'Search...',
            }}
            limit={7}
        />
    );
};

export default AppSpotlight;
