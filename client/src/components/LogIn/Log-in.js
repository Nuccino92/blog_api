import { useState } from "react";
import { logInRequest } from "../../api/log-in";

const LogIn = () => {
  const [userData, setUserData] = useState({
    username: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    logInRequest(userData);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">username</label>
        <input
          type="text"
          value={userData.username}
          onChange={(e) =>
            setUserData({ ...userData, username: e.target.value })
          }
        ></input>
        <label htmlFor="password">password</label>
        <input
          type="text"
          value={userData.password}
          onChange={(e) =>
            setUserData({ ...userData, password: e.target.value })
          }
        ></input>
        <button type="submit">submit</button>
      </form>
    </div>
  );
};
export default LogIn;
