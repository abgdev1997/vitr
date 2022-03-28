import AppLayout from "../components/AppLayout";
import {Head} from "next/head"

export default function Home() {
  return (
    <>
      <Head>
        <title>Vitr</title>
      </Head>
      <AppLayout>
        <h1>VITR</h1>
      </AppLayout>
    </>
  )
}
