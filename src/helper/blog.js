import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';

const contentDir = path.join(process.cwd(), 'content');

export async function getBlogList() {
    const filenames = fs.readdirSync(contentDir);

    const blogs = filenames.map((filename) => {
        const filePath = path.join(contentDir, filename);
        const fileContent = fs.readFileSync(filePath, 'utf8');

        const { data } = matter(fileContent);

        return {
            slug: filename.replace(/\.mdx$/, ''),
            title: data.title,
            description: data.description,
            date: data.date,
            tags: data.tags,
            cover: data.cover
        };
    });

    blogs.sort((a, b) => new Date(b.date) - new Date(a.date));

    return blogs;
}

export async function getBlog(slug) {
    const filePath = path.join(contentDir, `${slug}.mdx`);
    const fileContent = fs.readFileSync(filePath, { encoding: "utf-8" });

    const { data, content } = matter(fileContent);
    return { data, content };
}

export function getTags (blogs) {
    const tagMap = new Map();
    blogs.forEach((blog) => {
        blog.tags.forEach((tag) => {
            if(tagMap.has(tag)) {
                tagMap.set(tag, [...get(tag), blog]);
            }
            else {
                tagMap.set(tag, [blog]);
            }
        });
    });

    return tagMap;
}

export function getTagBlog (tagMap = new Map(), tag='') {
    if(!tagMap) {
        return [];
    }

    if(tagMap.has(tag)){
        return tagMap.get(tag);
    }
    else {
        return [];
    }
}