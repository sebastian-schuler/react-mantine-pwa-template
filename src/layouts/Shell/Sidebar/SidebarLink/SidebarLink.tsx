import { Fragment, useState } from 'react';
import { FaChevronRight } from 'react-icons/fa';
import { Link, useLocation } from 'react-router';
import { ActionIcon, Box, Collapse, Group, Text, ThemeIcon, UnstyledButton } from '@mantine/core';
import classes from './SidebarLink.module.css';
import { SidebarLinkConfig } from './types';

function SidebarLink(props: SidebarLinkConfig) {
    const [opened, setOpened] = useState(props.type === 'menu' ? props.initiallyOpened || false : false);
    const Icon = props.icon;
    const location = useLocation();

    if (props.type === 'link') {
        const isActive = props.link === location.pathname;
        return (
            <UnstyledButton
                component={Link}
                to={props.link}
                onClick={() => setOpened((o) => !o)}
                className={classes.control}
            >
                <Group justify='space-between' gap={0}>
                    <Box style={{ display: 'flex', alignItems: 'center' }}>
                        <ThemeIcon variant={isActive ? 'filled' : 'default'} size={30}>
                            <Icon size={16} />
                        </ThemeIcon>
                        <Text ml='md' fw={isActive ? 600 : 500}>
                            {props.label}
                        </Text>
                    </Box>
                </Group>
            </UnstyledButton>
        );
    }

    const hasLinks = Array.isArray(props.links);
    const items = (hasLinks ? (props.links ?? []) : []).map((item) => {
        const ItemIcon = item.icon;
        const isActive = item.link === location.pathname;
        return (
            <UnstyledButton key={item.label} component={Link} to={item.link} className={classes.link}>
                <Group>
                    {ItemIcon && (
                        <ThemeIcon variant={isActive ? 'filled' : 'default'} size={30}>
                            <ItemIcon size={16} />
                        </ThemeIcon>
                    )}
                    <Text fw={isActive ? 600 : 500}>{item.label}</Text>
                </Group>
            </UnstyledButton>
        );
    });

    const isActive = props.link === location.pathname;
    return (
        <Fragment>
            <Box className={classes.control} py={0} pl={0}>
                <Group justify='space-between' gap={'md'}>
                    <UnstyledButton
                        component={Link}
                        to={props.link}
                        h={'100%'}
                        display={'flex'}
                        style={{ alignItems: 'center' }}
                        flex={1}
                        className={classes.groupControlButton}
                    >
                        <ThemeIcon variant={isActive ? 'filled' : 'default'} size={30}>
                            <Icon size={16} />
                        </ThemeIcon>
                        <Text ml='md' fw={isActive ? 600 : 500}>
                            {props.label}
                        </Text>
                    </UnstyledButton>
                    {hasLinks && (
                        <ActionIcon variant='outline' onClick={() => setOpened((o) => !o)}>
                            <FaChevronRight
                                className={classes.chevron}
                                style={{ transform: opened ? 'rotate(-90deg)' : 'none' }}
                            />
                        </ActionIcon>
                    )}
                </Group>
            </Box>
            {hasLinks ? <Collapse in={opened}>{items}</Collapse> : null}
        </Fragment>
    );
}

export default SidebarLink;
