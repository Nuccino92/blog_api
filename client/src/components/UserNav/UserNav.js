import { Link } from "react-router-dom";

const UserNav = () => {
  return (
    <div className="nav">
      <Link to={"/"}>
        <h1>Bloggos Blogs</h1>
      </Link>
      <ul className="nav-right">
        <Link to={"/create"}>
          <li> Post Blog </li>
        </Link>
        <li>Log Out</li>
      </ul>
    </div>
  );
};
export default UserNav;
