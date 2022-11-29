import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/Layout.js'

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>WebTech</title>
        <meta name="description" content="Web technologies blogging application" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className='wt-title'>
        Use state
      </h1>
      <div>
        <button onClick={() => setCount(count + 1)}>
            Click on me
        </button>
      </div>
    </Layout>
  )
}