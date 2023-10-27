import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { UserContext } from "../App";

export default function NavBar({ name }) {
  const [signedIn] = useContext(UserContext);
  const [isDropDown, setIsDropDown] = useState(false);

  const toggleDropdown = () => {
    if (isDropDown) {
      setIsDropDown(false);
    } else {
      setIsDropDown(true);
    }
  };

  return (
    <div className="bg-gray-800 p-4">
      <ul className="flex justify-center space-x-4">
        <li className="text-white">
          <Link to="/" className="hover:text-gray-300">
            Home
          </Link>
        </li>
        <li className="relative group text-white" onClick={toggleDropdown}>
          <span className="cursor-pointer">Topics</span>
          <ul
            className={`absolute ${
              isDropDown ? "block" : "hidden"
            } bg-gray-800 text-white p-2 mt-2 space-y-2`}
          >
            <li>
              <Link to="/articles" className="hover:text-gray-300">All</Link>
            </li>
            <li>
              <Link to="/articles/coding" className="hover:text-gray-300">Coding</Link>
            </li>
            <li>
              <Link to="/articles/cooking" className="hover:text-gray-300">Cooking</Link>
            </li>
            <li>
              <Link to="/articles/football" className="hover:text-gray-300">Football</Link>
            </li>
          </ul>
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
