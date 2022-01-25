import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { clearErrors } from "../../actions/error";
import { logInUser } from "../../actions/user";

const LogIn = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });
  const [errorMessage, setErrorMessage] = useState(null);

  const { message, id } = useSelector((state) => state.errorReducer);
  useEffect(() => {
    if (id === "LOGIN_FAIL") {
      setErrorMessage(message.message);
    } else {
      setErrorMessage(null);
    }
    if (id === "LOGIN_SUCCESS") {
      navigate("/");
    }
  }, [errorMessage, navigate, id, message.message]);

  // resets errors on page load
  useEffect(() => {
    dispatch(clearErrors());
  }, [dispatch]);

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(logInUser(userData));
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
      {errorMessage !== "" && <div>{errorMessage}</div>}
    </div>
  );
};
export default LogIn;
