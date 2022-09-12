import { getSidebar } from './sidebar';

const BASE_URL = '/altv-js-docs/'

export default {
    base: BASE_URL,
    title: 'alt:V JS Docs',
    description: 'JavaScript Module Documentation',
    themeConfig: {
        logo: '/logo.svg',
        // Social Links - Top Right of the Documentation Page Links
        socialLinks: [
            { icon: 'github', link: 'https://github.com/altmp/altv-issues' },
            { icon: 'twitter', link: 'https://twitter.com/altvmp' },
            { icon: 'discord', link: 'https://discord.altv.mp/' }
        ],
        // Navigation - Top of the Documentation Page Links
        nav: [
            {
                text: 'Intro', link: '/intro/index'
            },
            {
                text: 'API', items: [
                    {
                        text: 'Server', link: '/server/index'
                    },
                    {
                        text: 'Client', link: '/client/index'
                    },
                    {
                        text: 'Shared', link: '/shared/index'
                    },
                    {
                        text: 'Enums', link: '/enums/index'
                    },
                    {
                        text: 'Types', link: '/types/index'
                    },
                    {
                        text: 'Interfaces', link: '/interfaces/index'
                    }
                ],
            },
            {
                text: 'Guides', link: '/guides/fundamentals/index'
            },
            {
                text: 'Team', link: '/about/team'
            },
            {
                text: '💾 Download', link: 'https://altv.mp/#/downloads'
            },
        ],
        // Footer - Bottom of the Documentation Page
        footer: {
            message: 'Documentation Created with ❤️ by Stuyk',
            // copyright:
        },
        // Page - Next & Previous Buttons
        docFooter: {
            prev: 'Prev',
            next: 'Next'
        },
        // Page - Show Last Update on Page
        lastUpdatedText: 'Updated Date',
        sidebar: getSidebar(),
    },
    head: [
        ['link', { rel: 'icon', type: 'image/x-icon', href: BASE_URL + 'favicon.ico' }],
        ['link', { rel: 'apple-touch-icon', sizes: '180x180', href: BASE_URL + 'apple-touch-icon.png' }],
        ['link', { rel: 'icon', type: 'image/png', sizes: '32x32', href: BASE_URL + 'favicon-32x32.png' }],
        ['link', { rel: 'icon', type: 'image/png', sizes: '16x16', href: BASE_URL + 'favicon-16x16.png' }],
        ['link', { rel: 'manifest', href: BASE_URL + 'site.webmanifest' }],
        ['link', { rel: 'mask-icon', href: BASE_URL + 'safari-pinned-tab.svg', color: '#5bbad5' }],
        ['meta', { name: 'msapplication-TileColor', content: '#da532c' }]
    ]
}

