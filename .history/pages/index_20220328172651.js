import AppLayout from "../components/AppLayout";
import Head from "next/head";
import { colors } from "../styles/theme";
import Button from "../components/Button";
import GitHub from "../components/Icons/github";
import { loginGithub } from "../firebase/client";

export default function Home() {
  const onClickLoginButton = () => {
    loginGithub()
      .then((user) => {
        console.log(user.user.email);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <Head>
        <title>Vitr</title>
      </Head>
      <AppLayout>
        <div>
          <img src="/diseno-de-logo.png" alt="logo" />
          <span>VITR</span>
          <h2>Amantes del código</h2>
          <Button onClick={onClickLoginButton}>
            <GitHub fill="white" width={24} height={24} />
            Login with GitHub
          </Button>
        </div>
      </AppLayout>
      <style jsx>
        {`
          div {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            height: 100%;
            gap: 40px;
          }

          img {
            width: 120px;
          }

          span {
            color: ${colors.gray};
            font-size: 60px;
          }
        `}
      </style>
    </>
  );
}
