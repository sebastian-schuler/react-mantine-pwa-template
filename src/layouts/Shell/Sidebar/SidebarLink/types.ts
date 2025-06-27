import { IconType } from 'react-icons';

export type SidebarLinkConfig = {
    label: string;
    icon: IconType;
    link: string;
} & (
    | {
          type: 'menu';
          initiallyOpened?: boolean;
          links?: { label: string; link: string; icon?: IconType }[];
      }
    | {
          type: 'link';
      }
);
