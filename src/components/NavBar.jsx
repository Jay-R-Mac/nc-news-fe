import { Link } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../App";

export default function NavBar({ name }) {
  const [signedIn] = useContext(UserContext);

  return (
    <div className="bg-gray-800 p-4">
      <ul className="flex justify-center space-x-4">
        <li className="text-white">
          <Link to="/" className="hover:text-gray-300">
            Home
          </Link>
        </li>
        <li className="text-white">
          <Link to="/articles" className="hover:text-gray-300">
            News
          </Link>
        </li>
        <li className="text-white">
          <Link to="/users" className="hover:text-gray-300">
            Users
          </Link>
        </li>
        {signedIn && <li className="text-white text-right">Hello {name}</li>}

        {signedIn && (
          <li className="text-white">
            <Link to="/users" className="hover:text-gray-300">
              SignOut
            </Link>
          </li>
        )}
      </ul>
    </div>
  );
}
