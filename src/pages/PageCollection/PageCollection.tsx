import { useTranslation } from 'react-i18next';
import { Flex, Stack, Text, Title } from '@mantine/core';
import { Helmet } from '@dr.pogodin/react-helmet';
import Breadcrumbs from '@/components/Breadcrumbs';
import AppContainer from '@/layouts/AppContainer';
import LanguageSelect from '@/layouts/Shell/Header/LanguageSelect';

function PageCollection() {
    const { t } = useTranslation(['common', 'pageCollection']);

    return (
        <AppContainer withScroll>
            <Helmet title='Page Collection' />
            <Stack h={'100%'}>
                <Breadcrumbs />
                <Title>{t('pageCollection:title')}</Title>
                <Text>{t('pageCollection:description')}</Text>
                <Flex>
                    <LanguageSelect />
                </Flex>
            </Stack>
        </AppContainer>
    );
}

export default PageCollection;
