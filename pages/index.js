import Head from 'next/head'
import SearchContainer from '../components/SearchContainer'

export default function Home() {
  return (
    <div>
      <Head>
        <title>D2R Trade</title>
        <meta name="description" content="The webapp I wish I had for trading in Diablo 2." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <SearchContainer />
      </main>

      <footer>

      </footer>
    </div>
  )
}
