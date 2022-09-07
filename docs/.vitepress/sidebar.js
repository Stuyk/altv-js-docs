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
                items: getFilesAndOrderByPath('guides')
            }
        ],
        '/server/': [
            {
                text: 'Server API',
                items: getFilesAndOrderByPath('server')
            }
        ],
        '/client/': [
            {
                text: 'Client API',
                items: getFilesAndOrderByPath('client')
            }
        ]
    };
}

