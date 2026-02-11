import { auth } from "./firebase";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

function Login() {
  const signIn = async () => {
    const provider = new GoogleAuthProvider();
    await signInWithPopup(auth, provider);
  };

  return (
    <div className="login">
      <h2>Login to Chat</h2>
      <button onClick={signIn}>Sign in with Google</button>
    </div>
  );
}

export default Login;
