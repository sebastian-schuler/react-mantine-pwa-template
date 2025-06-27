import { Fragment } from 'react';
import { Outlet } from 'react-router';
import { AppShell } from '@mantine/core';
import HotKeys from '@/features/Hotkeys';
import { useSidebar } from '@/providers/state';
import Footer from './Footer';
import Header from './Header';
import AppNotifications from './Notifications';
import Sidebar from './Sidebar';
import AppSpotlight from './Spotlight';

const Shell = () => {
    const { isOpen } = useSidebar();

    return (
        <Fragment>
            <HotKeys />
            <AppSpotlight />
            <AppNotifications />
            <AppShell
                header={{ height: 60 }}
                navbar={{
                    width: { sm: 200, lg: 300 },
                    breakpoint: 'sm',
                    collapsed: { mobile: !isOpen },
                }}
                padding='md'
                footer={{ height: 30, offset: true }}
                h={'100%'}
            >
                <AppShell.Header>
                    <Header />
                </AppShell.Header>
                <AppShell.Navbar>
                    <Sidebar />
                </AppShell.Navbar>
                <AppShell.Main>
                    <Outlet />
                </AppShell.Main>
                <AppShell.Footer>
                    <Footer />
                </AppShell.Footer>
            </AppShell>
        </Fragment>
    );
};

export default Shell;
