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
        <div>
          <img src='/diseno-de-logo.png' alt='logo'/>
          <h1>VITR</h1>
          <h2>Amantes del código</h2>
        </div>
      </AppLayout>
      <style jsx>{`
        div {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          margin-top: 50px;
        }

        img{
          width: 120px;
        }

        h1 {
          color: ${colors.gray};
          font-size:60px;
        }

        h2 {
          color: ${colors.gray};
          font-size:30px;
        }
        `}
      </style>
    </>
  )
}
