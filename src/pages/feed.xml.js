import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { basename, dirname, join } from 'node:path';
import { spawnSync } from 'node:child_process';

export async function GET(context) {
    const docs = await getCollection('docs');
    return rss({
        title: 'Tauri by Simon',
        description: 'My unofficial opinionated articles on using Tauri',
        site: context.site,
        items: docs.map((post) => ({
            title: post.data.title,
            pubDate: getNewestCommitDate(join('src', 'content', 'docs', post.id)),
            description: post.data.description,
            customData: post.data.customData,
            link: `/${post.slug}/`,
        })).sort((a, b) => b.pubDate - a.pubDate),
    });
}

function getNewestCommitDate(file) {
    const result = spawnSync('git', ['log', '--format=%ct', '--max-count=1', basename(file)], {
        cwd: dirname(file),
        encoding: 'utf-8',
    });

    if (result.error) {
        throw new Error(`Failed to retrieve the git history for file "${file}"`);
    }
    const output = result.stdout.trim();
    const regex = /^(?<timestamp>\d+)$/;
    const match = output.match(regex);

    if (!match?.groups?.timestamp) {
        throw new Error(`Failed to validate the timestamp for file "${file}"`);
    }

    const timestamp = Number(match.groups.timestamp);
    const date = new Date(timestamp * 1000);
    return date;
}
