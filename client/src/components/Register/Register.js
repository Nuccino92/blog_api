import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearErrors } from "../../actions/error";
import { createUser } from "../../actions/user";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [userData, setUserData] = useState({
    email: "",
    username: "",
    password: "",
  });
  const [errorMessage, setErrorMessage] = useState(null);

  const { message, id } = useSelector((state) => state.errorReducer);
  // if register_fail set error message, if register_success navigate to home
  useEffect(() => {
    if (id === "REGISTER_FAIL") {
      setErrorMessage(message.message);
    } else {
      setErrorMessage(null);
    }
    if (id === "REGISTER_SUCCESS") {
      navigate("/");
    }
  }, [errorMessage, id, message.message, navigate]);

  // resets errors on page load
  useEffect(() => {
    dispatch(clearErrors());
  }, [dispatch]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createUser(userData));
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
        {errorMessage === "Email already taken" && <div>{errorMessage}</div>}
        <label htmlFor="username">username</label>
        <input
          type="text"
          value={userData.username}
          onChange={(e) =>
            setUserData({ ...userData, username: e.target.value })
          }
        ></input>
        {errorMessage === "Username already taken" && <div>{errorMessage}</div>}
        <label htmlFor="password">password</label>
        <input
          type="text"
          value={userData.password}
          onChange={(e) =>
            setUserData({ ...userData, password: e.target.value })
          }
        ></input>
        <button type="submit">Submit</button>
      </form>
      {errorMessage === "Please fill out form" && <div>{errorMessage}</div>}
    </div>
  );
};
export default Register;
