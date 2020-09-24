import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const User = () => {
  const [user, setUser] = useState({
    photo: null,
    city: "",
    createdAt: "2019-10-29T20:03:10.238Z",
    desc: "empty",
    name: "",
    username: "",
    email: "",
    phone: "",
    webiste: "",
  });
  const { id } = useParams();
  const url = `https://5f639e34363f0000162d8e82.mockapi.io/api/p1/users/${id}`;
  useEffect(() => {
    loadUser();
  }, []);

  const loadUser = async () => {
    const res = await axios.get(url);
    setUser(res.data);
  };

  return (
    <div>
      <div className="card">
        <img src={`url('${user.photo}')`} className="card-img-top" />
        User Id: {user.id}
        <Link to={`/users/${user.id}`}>
          <div
            style={{
              backgroundImage: `url('${user.photo}')`,
            }}
            className="card-img-top h-64 bg-blue bg-cover"
          ></div>
        </Link>
        <div className="p-3">
          <h3 className="font-bold text-xl mb-3">
            <Link to={`/users/${user.id}`}>{user.name}</Link>
          </h3>
          <div className="font-bold mb-3">
            {new Date(user.createdAt).toISOString().slice(0, 10)}
          </div>
          <div className="mb-3">{user.city}</div>
          <div className="mb-3">{user.desc}</div>
          <Link
            to={`/users/${user.id}`}
            className="bg-blue-500 text-white p-2 flex justify-center w-full"
          >
            View
          </Link>
        </div>
      </div>
      <div className="container py-4">
        <Link className="btn btn-primary" to="/">
          back to Home
        </Link>
        <h1 className="display-4">User Id: {id}</h1>
        <hr />
        <ul className="list-group w-50">
          <li className="list-group-item">name: {user.name}</li>
          <li className="list-group-item">user name: {user.username}</li>
          <li className="list-group-item">email: {user.email}</li>
          <li className="list-group-item">phone: {user.phone}</li>
          <li className="list-group-item">website: {user.website}</li>
        </ul>
      </div>
    </div>
  );
};

export default User;
