import AppLayout from "../components/AppLayout";
import Head from 'next/head'
import { colors } from "../styles/theme";

export default function Home() {
  return (
    <>
      <Head>
        <title>Vitr</title>
      </Head>
      <AppLayout>
        <img src='/diseno-de-logo.png' alt='logo'/>
        <h1>VITR</h1>
        <h2>Amantes del código</h2>
      </AppLayout>
      <style jsx>{`
        img{
          width: 120px;
        }

        h1 {
          color: ${colors.gray};
          font-size:800;
        }

        h2 {
          color: ${colors.gray};
        }
        `}
      </style>
    </>
  )
}
