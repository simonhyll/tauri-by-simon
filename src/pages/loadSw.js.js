import { generateSW } from 'workbox-build';
import { promises as fs } from 'fs';

const SCRIPT = `if ('serviceWorker' in navigator) {
    window.addEventListener('load', function () {
        navigator.serviceWorker.register('/sw.js').then(function (registration) {
            console.log('ServiceWorker registration successful with scope: ', registration.scope);
        }, function (err) {
            console.log('ServiceWorker registration failed: ', err);
        });
    });
}`

export async function GET(context) {
    await generateSW({
        globDirectory: 'dist/',
        globPatterns: [
            '**/*.{css,woff2,webp,svg,js}'
        ],
        runtimeCaching: [{
            urlPattern: /^https:\/\/(tauri.by.simon.hyll.nu)\/.*\.(png|svg|webp|jpg|jpeg)/i,
            handler: 'CacheFirst',
            options: {
                cacheName: 'image-cache',
                expiration: {
                    maxEntries: 1000,
                    maxAgeSeconds: 60 * 60 * 24 * 7,
                },
                cacheableResponse: {
                    statuses: [0, 200],
                },
                fetchOptions: {
                    redirect: 'follow',
                },
            },
        },],
        skipWaiting: true,
        swDest: 'dist/sw.js'
    });
    return new Response(
        SCRIPT
    )
}
