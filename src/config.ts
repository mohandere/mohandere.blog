import type{ NavItems } from './types'

export const NAV_ITEMS: NavItems = {
    home: {
        path: '/',
        title: 'home'
    },
    blog: {
        path: '/blog',
        title: 'blog'
    },
    tags: {
        path: '/tags',
        title: 'tags'
    },
    about: {
        path: '/about',
        title: 'about'
    }
}

export const SITE = {
    // Your site's detail?
    name: 'Reactive',
    title: `Reactive`,
    description: `Mohan Dere's personal blog`,
    url: 'https://mohandere.blog.vercel.app',
    githubUrl: 'https://github.com/mohandere',
    listDrafts: true
    // description ?
}

export const PAGE_SIZE = 8
