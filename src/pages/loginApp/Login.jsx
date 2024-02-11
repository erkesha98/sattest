import React, { useContext, useState } from "react";
import { UserContext } from "../../App";
import "./login.style.css"
const cred = {
  username: "a",
  password: "1",
};

const Login = () => {
  const [user, setUser] = useState({ username: "", password: "" });
  const { setIsAuthenticated } = useContext(UserContext);
  const onChangeHandler = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (cred.username === user.username && cred.password === user.password) {
     
      setIsAuthenticated(true);
    } else {
      alert("Wrong username or password");
    }
  };
  return (
    <div className="login-container">
      <h1>Login</h1>
      <form onSubmit={onSubmitHandler}>
        <input
          name="username"
          value={user.username}
          type="text"
          placeholder="username"
          onChange={onChangeHandler}
        />
        <br /> <br />
        <input
          name="password"
          value={user.password}
          type="password"
          placeholder="password"
          onChange={onChangeHandler}
        />
        <br /> <br />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
