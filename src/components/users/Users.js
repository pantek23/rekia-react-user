import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Users() {
  const [users, setUser] = useState([]);
  const url = `https://5f639e34363f0000162d8e82.mockapi.io/api/p1/users`;

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    console.log("loading users");
    const result = await axios.get(url);
    setUser(result.data.reverse());
  };

  // photo: null,
  // city: "",
  // createdAt: "2019-10-29T20:03:10.238Z",
  // desc: "empty",
  // name: "",
  // username: "",
  // email: "",
  // phone: "",
  // webiste: "",

  return (
    <React.Fragment>
      <div className="text-center">
        <h1 className="display-6">Welcome to Rekia Solutions Co.</h1>
        <p>
          Learn about{" "}
          <a href="https://docs.microsoft.com/aspnet/core">
            building Web apps with ASP.NET Core
          </a>
          .
        </p>
      </div>
      <div className="card-columns">
        {users.map((user, index) => (
          <div key={index} className="card">
            <Link to={`/users/edit/${user.id}`}>
              <img className="card-img-top" src={user.photo} />
            </Link>
            <div className="card-body">
              <h5 className="card-title">{user.name}</h5>
              <a href={`mailto:${user.email}?subject=Mail from Our Site`}>
                Email me if you dare
              </a>
              <div className="card-text">
                {`Created at ${new Date(user.createdAt)
                  .toISOString()
                  .slice(0, 10)}`}
              </div>
              <div>
                <a href={user.website} target="_blank">
                  See more..
                </a>
              </div>
              <div className="card-text">{user.desc} </div>

              {/* <p>
                    @product.Maker <br />
                    @if (@product.Ratings != null)
                    {
                        <ul>
                            Raiting:
                            @foreach (var rating in @product.Ratings)
                            {
                                <li>  @rating.ToString()</li>
                            }
                        </ul>
                    }
                </p> */}
            </div>
          </div>
        ))}
        <img src="dog-5482171__340.webp" />
      </div>
    </React.Fragment>
  );
}
