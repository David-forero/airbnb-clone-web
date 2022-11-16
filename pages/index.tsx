import type { NextPage } from 'next'
import Head from 'next/head'

import Header from '../components/Header';

const Home: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>Airbnb clone by David Forero</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>


      {/* HEADER */}
      <Header/>

      {/* BANNER */}

    </div>
  )
}

export default Home
