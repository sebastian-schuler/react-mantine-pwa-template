import { LoaderDefaultOptions } from '@/utils/loader/types';

const title = 'React-Mantine PWA Template';
const email = 'contact@sebastian-schuler.com';
const repository = 'https://github.com/sebastian-schuler/react-mantine-pwa-template';
const dateFormat = 'DD.MM.YYYY';
const homepage = 'https://sebastian-schuler.com/';

const loader: LoaderDefaultOptions = {
    delayMs: 300, // If the asynchronous process is finished during 300 ms you will not see the loader at all
    minimumLoading: 500, // But if it appears, it will show for at least 700 ms
};

const mainConfig = { loader, dateFormat, repository, email, title, homepage };

export default mainConfig;
