import AppLayout from "../components/AppLayout";
import Head from 'next/head'
import { colors } from "../styles/theme";
import Button from "../components/Button";

export default function Home() {
  return (
    <>
      <Head>
        <title>Vitr</title>
      </Head>
      <AppLayout>
        <div>
          <img src='/diseno-de-logo.png' alt='logo'/>
          <span>VITR</span>
          <span>Amantes del código</span>
          <Button>Login with GitHub</Button>
        </div>
      </AppLayout>
      <style jsx>{`
        div {
          display: flex;
          flex-direction: column;
        }

        img{
          width: 120px;
        }

        span {
          color: ${colors.gray};
          font-size:60px;
        }
        `}
      </style>
    </>
  )
}
