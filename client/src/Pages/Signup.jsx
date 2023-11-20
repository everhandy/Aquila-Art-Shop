import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { ADD_USER } from "../utils/mutations";
import Auth from "../utils/auth";

const Signup = () => {
// state
  const [formState, setFormState] = useState({
    username: "",
    email: "",
    password: "",
  });

// mutation hook
  const [addUser, { error }] = useMutation(ADD_USER);

// event handlers
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await addUser({
        variables: { ...formState },
      });
      Auth.login(data.addUser.token);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <main id="login" className="grow justify-center container">
      <div className="mb-5">
        <p className="signhead">Log In</p>
      </div>

      <div className="px-6 py-3 rounded w-64">
        <form onSubmit={handleFormSubmit}>
          <div className="flex flex-col my-3">
            <div className="flex flex-col my-3">
              <input
                className="border rounded py-1"
                placeholder="Username"
                name="username"
                value={formState.username}
                onChange={handleChange}
              />
            </div>

            <input
              className="border rounded py-1"
              placeholder="Email"
              name="email"
              value={formState.email}
              onChange={handleChange}
            />
          </div>

          <div className="flex flex-col my-3">
            <input
              className="border rounded py-1"
              placeholder="Password"
              name="password"
              type="password"
              id="password"
              value={formState.password}
              onChange={handleChange}
            />
          </div>

          <div className="flex flex-col my-3">
            <button className="border submitlog rounded py-1">Submit</button>
            {error && (
              <div className="errorlogin">
                <span>
                  <b>Invalid: </b> Signup fail
                </span>
              </div>
            )}
          </div>
        </form>
      </div>
    </main>
  );
};

export default Signup;
