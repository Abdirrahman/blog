import Head from 'next/head'
import Link from 'next/link'



import 'tailwindcss/tailwind.css'


export default function Post({ children, frontMatter}) {
    const { title, date} = frontMatter
    return (
        <div>
            <Head>
                <title>{title}</title>
            </Head>
            <main className="font-sans flex items-center ">

                <div className="max-w-2xl">
                <h1 className="text-3xl">{title}</h1>
                <h4 className="text-gray-500 text-sm ">{date}</h4>
                <div className="font-body mt-5 ">
                    {children}
                </div>
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