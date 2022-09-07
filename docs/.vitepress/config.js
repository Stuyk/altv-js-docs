import { getSidebar } from "./sidebar";

export default {
    base: '/altv-js-docs/',
    title: 'alt:V Docs',
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
                text: 'Server', link: '/server/index'
            },
            {
                text: 'Client', link: '/client/index'
            },
            {
                text: 'Guides', link: '/guides/index'
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
        sidebar: getSidebar()
    }
}