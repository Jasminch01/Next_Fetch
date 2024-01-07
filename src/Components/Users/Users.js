"use client";
import { useEffect, useState } from "react";

const Users = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users`)
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);
  return (
    <div className="w-[80%] mx-auto space-y-5">
      {users.map((user) => (
        <div key={user.id}>
          <div className="card bg-base-100 shadow-xl">
            <div className="card-body">
              <h2 className="card-title">Name: {user.name}</h2>
              <p>Email : {user.email}</p>
              <p>username : {user.username}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Users;
