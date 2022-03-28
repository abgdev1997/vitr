import AppLayout from "../components/AppLayout";
import Head from "next/head";
import { colors } from "../styles/theme";
import Button from "../components/Button";
import GitHub from "../components/Icons/github";
import { loginGithub } from "../firebase/client";
import { useState } from "react";

export default function Home() {

  const [user, setUser] = useState(null);

  const onClickLoginButton = () => {
    loginGithub()
      .then((user) => {
        let userMod = {
          email: user.user.email,
          username: user.user.reloadUserInfo.screenName,
          photo: user.user.photoURL,
          token: user.user.accessToken
        }
        console.log(userMod);
        setUser(userMod);
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
          {user === null ?
          <img src={user?.photo}/>
          :
          <Button onClick={onClickLoginButton}>
            <GitHub fill="white" width={24} height={24} />
            Login with GitHub
          </Button>}
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
