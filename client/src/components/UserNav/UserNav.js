import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { logOutUser } from "../../actions/user";

const UserNav = () => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(logOutUser());
  };

  return (
    <div className="nav">
      <Link to={"/"}>
        <h1>Bloggos Blogs</h1>
      </Link>
      <ul className="nav-right">
        <Link to={"/create"}>
          <li> Post Blog </li>
        </Link>
        <li onClick={handleClick}>Log Out</li>
      </ul>
    </div>
  );
};
export default UserNav;
