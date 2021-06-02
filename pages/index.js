import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import {promises as fs} from 'fs'
import path from 'path'
import grayMatter from 'gray-matter'

import 'tailwindcss/tailwind.css'

export default function Home({posts}) {
  return (
    <div className="container">
      <Head>
        <title>Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <main>
      
        <div className="grid">
        <h1 className="title">
          .
        </h1>
          {posts.map(post => {
            return (
              <Link key={post.path} href={post.path}>
              <a className="card">
              <h3>{post.title}</h3>
              <h4>{post.date}</h4>
            </a>
            </Link>
            )
          })}
        </div>
      </main>
    </div>
  )
}

export async function getStaticProps() {

  const postsDirectory = path.join(process.cwd(), 'pages/posts')
  const filenames = await fs.readdir(postsDirectory)
  
  const files = await Promise.all(filenames.map(async filename => {
    const filePath = path.join(postsDirectory, filename)
    const content = await fs.readFile(filePath, 'utf8')
    const matter = grayMatter(content)
    return {
      filename,
      matter
    }
  }))

  const posts = files.map(file => {
    return {
      path: `/posts/${file.filename.replace('.mdx', '')}`,
      title: file.matter.data.title,
      date: file.matter.data.date
    }
  })
  return {
    props: {
      posts
    }
  }
}