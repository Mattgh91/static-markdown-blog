import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Layout from "@/components/Layout"

export default function HomePage({ posts }) {
    console.log(posts);
    return (
        <Layout>
            <h1 className="text-3xl font-bold underline">
                Welcome to <a href="https://nextjs.org">Next.js!</a>
            </h1>
        </Layout>
    )
}

export async function getStaticProps() {
    const files = fs.readdirSync(path.join('posts'));

    const posts = files.map(file => {
        const slug = file.replace('.md', '');

        const markdownWithMeta = fs.readFileSync(path.join('posts', file), 'utf-8');

        const { data: frontMatter } = matter(markdownWithMeta);

        return {
            slug,
            frontMatter,
        }
    });

    return {
        props: {
            posts,
        }
    }
}
