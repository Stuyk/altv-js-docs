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
        ],
        '/shared/': [
            {
                text: 'Shared API',
                collapsible: true,
                items: getFilesAndOrderByPath('shared')
            },
            ...getAllFoldersInDirectory('shared')
        ],
        '/enums/': [
            {
                text: 'Enums',
                collapsible: true,
                items: getFilesAndOrderByPath('enums')
            },
            ...getAllFoldersInDirectory('enums')
        ],
        '/interfaces/': [
            {
                text: 'Interfaces',
                collapsible: true,
                items: getFilesAndOrderByPath('interfaces')
            },
            ...getAllFoldersInDirectory('interfaces')
        ],
        '/types/': [
            {
                text: 'Types',
                collapsible: true,
                items: getFilesAndOrderByPath('types')
            },
            ...getAllFoldersInDirectory('types')
        ],
    };
}

