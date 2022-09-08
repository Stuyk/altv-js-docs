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
                items: [...getFilesAndOrderByPath('server', true)]
            },
            ...getAllFoldersInDirectory('server', true)
        ],
        '/client/': [
            {
                text: 'Client API',
                collapsible: true,
                items: getFilesAndOrderByPath('client', true)
            },
            ...getAllFoldersInDirectory('client', true)
        ],
        '/shared/': [
            {
                text: 'Shared API',
                collapsible: true,
                items: getFilesAndOrderByPath('shared', true)
            },
            ...getAllFoldersInDirectory('shared', true)
        ],
        '/enums/': [
            {
                text: 'Enums',
                collapsible: true,
                items: getFilesAndOrderByPath('enums', true)
            },
            ...getAllFoldersInDirectory('enums', true)
        ],
        '/interfaces/': [
            {
                text: 'Interfaces',
                collapsible: true,
                items: getFilesAndOrderByPath('interfaces', true)
            },
            ...getAllFoldersInDirectory('interfaces', true)
        ],
        '/types/': [
            {
                text: 'Types',
                collapsible: true,
                items: getFilesAndOrderByPath('types', true)
            },
            ...getAllFoldersInDirectory('types', true)
        ],
    };
}

