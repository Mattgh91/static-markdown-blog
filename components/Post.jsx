import Link from 'next/link';
import Image from 'next/image';
import CategoryLabel from '@/components/CategoryLabel';

export default function Post({ post }) {
    return (
        <div className="w-full px-10 py-6 bg-white rounded-lg shadow-md mt-6">
            <Image src={post.frontMatter.cover_image} width={600} height={420} />

            <div className="flex justify-between items-center">
                <span className="font-light text-gray-600">{post.frontMatter.date}</span>
                <CategoryLabel>{post.frontMatter.category}</CategoryLabel>
            </div>

            <div className="mt-2">
                <Link href={`/blog/${post.slug}`}>
                    <a className="text-2xl text-gray-700 font-bold hover:underline">
                        {post.frontMatter.title}
                    </a>
                </Link>
                <p className="mt-2 text-gray-600">
                    {post.frontMatter.excerpt}
                </p>
            </div>

            <div className="flex justify-between items-center mt-6">
                <Link href={`/blog/${post.slug}`}>
                    <a className="text-gray-900 hover:text-blue-600">Read more</a>
                </Link>
                <div className="flex items-center">
                    <Image
                        src={post.frontMatter.author_image}
                        width={25}
                        height={25}
                        alt=""
                        className="object-cover rounded-full"
                    />
                    <h3 className="text-gray-700 ml-2 font-bold">{post.frontMatter.author}</h3>
                </div>
            </div>
        </div>
    )
}
