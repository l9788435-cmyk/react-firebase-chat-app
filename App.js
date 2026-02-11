import { auth } from "./firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import Login from "./Login";
import Chat from "./Chat";

function App() {
  const [user] = useAuthState(auth);

  return (
    <div>
      {user ? <Chat /> : <Login />}
    </div>
  );
}

export default App;
