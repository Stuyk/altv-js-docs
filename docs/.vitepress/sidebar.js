import { getFilesAndOrderByPath, getAllFoldersInDirectory } from "./sidebarBuilder";

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
            ...getAllFoldersInDirectory('server')
        ],
        '/client/': [
            {
                text: 'Client API',
                collapsible: true,
                items: getFilesAndOrderByPath('client')
            },
            ...getAllFoldersInDirectory('client')
        ]
    };
}

