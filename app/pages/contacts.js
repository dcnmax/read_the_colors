import Head from 'next/head'
import Layout from '../components/Layout.js'

export default function Contacts() {
  return (
    <Layout>
      <Head>
        <title>WebTech - contact us</title>
        <meta name="description" content="Don't be shy, drop us an email" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className='wt-title'>
        Contact
      </h1>
      <form className="[&_span]:block">
        <div>
          <label>
            <span>First name</span>
            <input type="text" name="firstname" />
          </label>
        </div>
        <div>
          <label>
            <span>Last name</span>
            <input type="text" name="lastname" />
          </label>
        </div>
        <div>
          <label>
            <span>Email</span>
            <input type="text" name="email" />
          </label>
        <div>
        </div>
          <label>
            <span>Message</span>
            <textarea name="message" />
          </label>
        </div>
        <div>
          <input type="submit" value="Send" />
        </div>
      </form>
    </Layout>
  )
}
