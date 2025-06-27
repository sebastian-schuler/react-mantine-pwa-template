import { SimpleGrid, Stack, Text, Title } from '@mantine/core';
import { Helmet } from '@dr.pogodin/react-helmet';
import AppContainer from '@/layouts/AppContainer';

function PrivacyNotice() {
    return (
        <AppContainer withScroll>
            <Helmet title='Privacy Notice' />
            <Stack h={'100%'}>
                <Title>Privacy Notice</Title>
                <SimpleGrid cols={{ md: 2 }}>
                    <Text>
                        Nam ipsum ex, pellentesque pulvinar diam in, placerat eleifend neque. Ut id dignissim
                        tortor, id imperdiet est. Suspendisse at diam id quam facilisis eleifend. In fermentum diam
                        ipsum, ut imperdiet turpis blandit sit amet. Cras bibendum dignissim nibh, id aliquet erat
                        efficitur id. Integer leo mauris, tincidunt egestas felis vel, egestas semper lorem. Nullam
                        eu luctus leo, et dignissim lacus. Donec tincidunt diam mi, id volutpat turpis viverra
                        quis. Ut dapibus nisi arcu, id tempor enim semper vel. Sed mattis urna in nisl suscipit
                        vulputate. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac
                        turpis egestas. Curabitur vulputate, quam id ornare efficitur, diam odio convallis velit,
                        in blandit diam magna eu purus. In venenatis nunc sed tellus molestie convallis. Sed ligula
                        erat, egestas eu est in, convallis pretium libero. Vivamus facilisis pharetra erat, nec
                        lobortis lectus. Suspendisse potenti.
                    </Text>
                    <Text>
                        Suspendisse potenti. Proin enim mi, consequat sed enim eu, commodo posuere justo. Nulla
                        tristique congue vehicula. Ut nec nisi sit amet diam venenatis vehicula. Pellentesque
                        finibus posuere ex nec pellentesque. Praesent et iaculis mi, a faucibus nisl. Mauris
                        rhoncus lobortis orci in porttitor. Pellentesque lectus mauris, suscipit egestas nisl id,
                        vehicula fermentum tellus. Orci varius natoque penatibus et magnis dis parturient montes,
                        nascetur ridiculus mus. Cras viverra ullamcorper odio, dapibus laoreet lacus consectetur a.
                        Curabitur ullamcorper vestibulum dolor id laoreet. Quisque vel mauris et mi rutrum porta.
                        Sed non efficitur turpis.
                    </Text>
                </SimpleGrid>
            </Stack>
        </AppContainer>
    );
}

export default PrivacyNotice;
