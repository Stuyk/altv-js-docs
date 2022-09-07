import { getFilesAndOrderByPath } from "./sidebarBuilder";

export function getSidebar() {
    return {
        '/intro/': [
            {
                text: 'Introduction',
                collapsible: true,
                items: getFilesAndOrderByPath('intro')
            },
        ],
        '/guides/': [
            {
                text: 'Guides',
                collapsible: true,
                items: getFilesAndOrderByPath('guides')
            }
        ],
        '/server/': [
            {
                text: 'Server API',
                collapsible: true,
                items: [...getFilesAndOrderByPath('server')]
            },
            {
                text: 'alt.Vehicle',
                collapsible: true,
                items: [...getFilesAndOrderByPath('server/vehicle')]
            },
        ],
        '/client/': [
            {
                text: 'Client API',
                collapsible: true,
                items: getFilesAndOrderByPath('client')
            }
        ]
    };
}

