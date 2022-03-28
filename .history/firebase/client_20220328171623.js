import { getAuth, signInWithPopup, GithubAuthProvider } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBvRjfKG_PWxVFBkKafNCiybJ3iy4GYOIQ",
    authDomain: "vitr-c822c.firebaseapp.com",
    projectId: "vitr-c822c",
    storageBucket: "vitr-c822c.appspot.com",
    messagingSenderId: "962014862883",
    appId: "1:962014862883:web:1faeef81cdef4b54969b96",
    measurementId: "G-SG87DWXQ7Z"
};    

initializeApp(firebaseConfig);

export const loginGithub = () => {
    const provider = new GithubAuthProvider();
    const auth = getAuth();
    return signInWithPopup(auth, provider);
}  