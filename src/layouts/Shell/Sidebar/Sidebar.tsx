import { FiDownload, FiFile, FiUpload } from 'react-icons/fi';
import { ActionIcon, Group, ScrollArea, Tooltip } from '@mantine/core';
import { sidebarConfig } from '@/config/sidebar.config';
import classes from './Sidebar.module.css';
import SidebarLink from './SidebarLink';
import UserButton from './UserButton';

function Sidebar() {
    const links = sidebarConfig.map((item) => <SidebarLink {...item} key={item.label} />);

    return (
        <nav className={classes.navbar}>
            <div className={classes.header}>
                <Group justify='start' gap={'sm'}>
                    <Tooltip label='Placeholder Button'>
                        <ActionIcon variant='light' aria-label='Placeholder button'>
                            <FiFile />
                        </ActionIcon>
                    </Tooltip>
                    <Tooltip label='Placeholder Button'>
                        <ActionIcon variant='light' aria-label='Placeholder button'>
                            <FiDownload />
                        </ActionIcon>
                    </Tooltip>
                    <Tooltip label='Placeholder Button'>
                        <ActionIcon variant='light' aria-label='Placeholder button'>
                            <FiUpload />
                        </ActionIcon>
                    </Tooltip>
                </Group>
            </div>

            <ScrollArea className={classes.links}>
                <div className={classes.linksInner}>{links}</div>
            </ScrollArea>

            <div className={classes.footer}>
                <UserButton />
            </div>
        </nav>
    );
}

export default Sidebar;
