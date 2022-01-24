import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { logInUser } from "../../actions/user";

const LogIn = () => {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });
  // const [errorMessage, setErrorMessage] = useState("");

  // const states = useSelector((state) => state.errorReducer);

  // useEffect(() => {
  //   setErrorMessage(states.message.message);
  // }, [states, errorMessage]);

  // useEffect(() => {
  //   setErrorMessage("");
  // }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    logInUser(userData);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">email</label>
        <input
          type="text"
          value={userData.email}
          onChange={(e) => setUserData({ ...userData, email: e.target.value })}
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
      {/* {errorMessage !== "" && <div>{errorMessage}</div>} */}
    </div>
  );
};
export default LogIn;
