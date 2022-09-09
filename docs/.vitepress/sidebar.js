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
                text: 'Fundamentals',
                collapsible: true,
                items: getFilesAndOrderByPath('guides/fundamentals')
            },
            {
                text: 'Guides',
                collapsible: true,
                items: getFilesAndOrderByPath('guides/articles')
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
                items: getFilesAndOrderByPath('enums', false)
            },
            ...getAllFoldersInDirectory('enums', false)
        ],
        '/interfaces/': [
            {
                text: 'Interfaces',
                collapsible: true,
                items: getFilesAndOrderByPath('interfaces', false)
            },
            ...getAllFoldersInDirectory('interfaces', false)
        ],
        '/types/': [
            {
                text: 'Types',
                collapsible: true,
                items: getFilesAndOrderByPath('types', false)
            },
            ...getAllFoldersInDirectory('types', false)
        ],
    };
}

