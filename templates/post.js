import Head from 'next/head'
import Link from 'next/link'





export default function Post({ children, frontMatter}) {
    const { title} = frontMatter
    return (
        <div>
            <Head>
                <title>{title}</title>
            </Head>
            <main>
                <h1>{title}</h1>
                <div>
                    {children}
                </div>
                <p>
                    <Link href="/">
                        <a>Back to Home</a>
                    </Link>
                </p>
            </main>
        </div>
    )
}