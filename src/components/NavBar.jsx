import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>News</li>
        <li>Users</li>
      </ul>
    </div>
  );
}
