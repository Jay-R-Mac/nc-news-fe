import { useContext } from "react";
import { UserContext } from "../App";

export default function SignInBtn({ user }) {
    const [signedIn, setSignedIn] = useContext(UserContext);

    const handleToggle = () => {
        setSignedIn(user.username)
        if(signedIn){
            setSignedIn('')
        }
    }

    return (
        <button className="bg-blue-700 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded" onClick={handleToggle}>
            {signedIn === user.username ? 'Sign Out' : 'Sign In'}
        </button>
    )
}

