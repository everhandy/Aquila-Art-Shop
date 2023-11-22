import React, { useState } from 'react';
import { useMutation } from "@apollo/client";
import { LOGIN_USER } from "../utils/mutations";
import Auth from "../utils/auth";
import { useNavigate } from "react-router-dom";

const Login = () => {
// state form input values
  const [formState, setFormState] = useState({ email: "", password: "" });

  // use history hook for returning to home page
  const history = useNavigate();

// mutation for login
  const [login, { error }] = useMutation(LOGIN_USER);

// update state based on form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

// submit form
  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
// login mutation
      const { data } = await login({
        variables: { ...formState },
      });

//user token in Auth
      Auth.login(data.login.token);
    } catch (e) {
      console.error(e);
    }
// clear form
    setFormState({
      email: "",
      password: "",
    });
  };


  return (
    <main id="login" className="grow justify-center container">
      <div className="mb-5">
        <p className="signhead">Log In</p>
      </div>
      <div className="px-6 py-5 rounded w-64">
        <form onSubmit={handleFormSubmit}>
          <div className="flex flex-col my-3">
        
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
            <button className="border submitlog rounded py-1">
              Submit
            </button>
            <button className="border returnBtn rounded py-1"  onClick ={() => history('/')}>
              Back
            </button>
            {error && (
              <div className='errorlogin'>
                <span>
                  <b>Invalid: </b> Do not match
                </span>
              </div>
            )}
          </div>
        </form>
      </div>
    </main>
  );
};

export default Login;
