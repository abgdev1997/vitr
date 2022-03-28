import AppLayout from "../components/AppLayout";
import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Vitr</title>
      </Head>
      <AppLayout>
        <img src='/public/diseno-de-logo.png' alt='logo'/>
        <h1>VITR</h1>
        <h2>Amantes del código</h2>
      </AppLayout>
    </>
  )
}
