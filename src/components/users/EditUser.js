import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory, useParams } from "react-router-dom";

const EditUser = () => {
  let history = useHistory();
  const { id } = useParams();
  const url = `https://5f639e34363f0000162d8e82.mockapi.io/api/p1/users/${id}`;
  const [user, setUser] = useState([]);
  //   {
  //   name: "",
  //   username: "",
  //   email: "",
  //   phone: "",
  //   webiste: "",
  // });
  /*    photo: null,
    city: "",
    createdAt: "2019-10-29T20:03:10.238Z",
    desc: "empty",
*/

  const { name, username, email, phone, website, desc, photo } = user;
  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    loadUser();
  }, []);

  const loadUser = async () => {
    const result = await axios.get(url);
    setUser(result.data);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.put(url, user);
    history.push("/");
  };

  return (
    <div className="container">
      <div className="w-75 mx-auto shadow p-5">
        <h2 className="text-center mb-4">Edit A User</h2>
        <form onSubmit={(e) => onSubmit(e)}>
          <div className="form-group">
            Name:
            <input
              type="text"
              className="form-control"
              placeholder="Enter Your Name"
              name="name"
              value={name}
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            User name:
            <input
              type="text"
              className="form-control"
              placeholder="Enter Your Username"
              name="username"
              value={username}
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            Email:
            <input
              type="email"
              className="form-control"
              placeholder="Enter Your E-mail Address"
              name="email"
              value={email}
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            Phone Number:
            <input
              type="text"
              className="form-control"
              placeholder="Enter Your Phone Number"
              name="phone"
              value={phone}
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            Website:
            <input
              type="text"
              className="form-control"
              placeholder="Enter Your Website Name"
              name="website"
              value={website}
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            Description:
            <textarea
              className="form-control"
              placeholder="Enter Description"
              name="desc"
              value={desc}
              rows="6"
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            Photo:
            <input
              className="form-control"
              placeholder="Enter link to the image"
              name="photo"
              value={photo}
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <button className="btn btn-warning btn-block">Update User</button>
        </form>
      </div>
    </div>
  );
};

export default EditUser;
