import { getUsers } from "./Axios";
import { useEffect, useState } from "react";
import SignInBtn from "./SignInBtn";

export default function Users() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getUsers().then((response) => {
      setUsers(response.users);
      setIsLoading(false)
    });
  }, []);
  if (isLoading) return <p>Loading Please Wait...</p>;
  return (
    <div className="text-center">
      <h3 className="text-2xl font-bold mb-4">Users</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {users.map((user) => (
          <div
            key={user.id}
            className="bg-white p-4 border border-gray-300 shadow-lg shadow-cyan-700 rounded"
          >
            <p className="text-xl font-semibold mb-2">{user.username}</p>
            <img
              className="mx-auto object-cover h-48 w-48 mb-2"
              src={user.avatar_url}
              alt="User Avatar"
            />
            <SignInBtn user={user}/>
          </div>
        ))}
      </div>
    </div>
  );
}
