import Head from 'next/head';
import Header from './Header';
import CursorAnimation from './CursorAnimation';

export default function Layout({ title, children, description, keywords }) {
    return (
        <div>
            <Head>
                <title>{title}</title>
                <meta name="description" content={description} />
                <meta name="keywords" content={keywords} />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <CursorAnimation />
            <Header />
            <main className="container mx-auto my-7">
                {children}
            </main>
        </div>
    )
}

Layout.defaultProps = {
    title: 'Welcome to DevScape',
    keywords: 'development, coding, programming',
    description: 'The best info and news in development'
}