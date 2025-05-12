
import { getAuth,  signOut } from 'firebase/auth';
import appFirebase from "../../utils/firebase";


const auth = getAuth(appFirebase);

function Welcome() {


  return (
    <main className="container xs mx-auto px-4 mb-6 pb-6 pt-6 mtop">
        <div>
            <h2>Welcome {auth.currentUser?.email}</h2>
            <button onClick={() => signOut(auth)}>Logout</button>
        </div>
    </main>
  )
}

export default Welcome