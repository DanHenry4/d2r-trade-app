import Head from 'next/head'
import NavBar from '../components/NavBar'

export default function Layout({children}) {
    return (
        <>
        <Head>
            <title>D2R Trade</title>
            <meta name="description" content="The webapp I wish I had for trading in Diablo 2." />
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <NavBar />
        <main>{children}</main>
        </>
    )
}