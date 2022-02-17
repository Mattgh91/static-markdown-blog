import Layout from '@/components/Layout';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export default function BlogPostPage({
    frontmatter: {
        title,
        category,
        date,
        cover_image: coverImage,
        author,
        author_image: authorImage,
    },
    content,
    slug,
}) {
    return (
        <Layout>
            <h1 className="text-5xl border-b-4 p-5 font-bold">{title}</h1>
            {content}
        </Layout>
    )
}

// Generate the dynamic paths /blog/blog-name
export async function getStaticPaths() {
    const files = fs.readdirSync(path.join('posts'));

    const paths = files.map(file => {
        return {
            params: {
                slug: file.replace('.md', '')
            }
        }
    });

    console.log({ paths });

    return {
        paths,
        fallback: false,
    }
}

// send props to BlogPostPage
export async function getStaticProps({
    params: {
        slug,
    }
}) {
    const markdownWithMeta = fs.readFileSync(path.join('posts', `${slug}.md`), 'utf-8');
    const { data: frontmatter, content } = matter(markdownWithMeta);

    return {
        props: {
            frontmatter,
            content,
            slug,
        }
    }
}