import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
    return {
        rules: {
            userAgent: '*',
            allow: '/',
            disallow: ['/admin', '/login', '/admin/', '/login/'],
        },
        sitemap: 'https://ohiocodespace.vercel.app/sitemap.xml',
    };
}
