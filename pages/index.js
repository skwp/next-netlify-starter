import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Welcome to the Rise!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome to the Rise!" />
        <p className="description">
          <img src="https://res.cloudinary.com/swan-bitcoin/image/upload/v1709424076/TheRise.webp"/>
        </p>
      </main>
    </div>
  )
}
