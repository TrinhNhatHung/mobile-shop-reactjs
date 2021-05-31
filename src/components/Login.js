import React, { useCallback, useState } from "react";
import axios from "axios";
import { config } from "../config/config";
import { useHistory } from "react-router";

const Login = () => {
  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  const history = useHistory();

  const inputForm = useCallback((event) => {
    setUser({
      ...user,
      [event.target.name]: event.target.value,
    });
  });

  const login = useCallback(async () => {
    const queryString = require('query-string');
    let stringified  = queryString.stringify(user);
    const res =await axios.get(`${config.api.users}?${stringified }`);
    if (res.data.length > 0){
       localStorage.setItem('user', JSON.stringify(user));
       if (history.location.state === null || history.location.state.from === null){
           history.location.state = {
             ...history.location.state,
             from : "/"
           }
       }
       history.push(history.location.state.from);
    }
  });
  return (
    <div class="container">
      <section id="content">
        <form>
          <h1>Login Form</h1>
          <div>
            <input
              type="text"
              placeholder="Username"
              required
              id="username"
              name="username"
              value={user.username}
              onChange={(event) => inputForm(event)}
            />
          </div>
          <div>
            <input
              type="password"
              placeholder="Password"
              required
              id="password"
              name="password"
              value={user.password}
              onChange={(event) => inputForm(event)}
            />
          </div>
          <div id="warning-area"></div>
          <div>
            <button type="button" name="submit" onClick={login}>
              Log in
            </button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default Login;
