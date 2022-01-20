import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div className="nav">
      <Link to={"/"}>
        <h1>Bloggo's Blogs</h1>
      </Link>

      <ul className="nav-right">
        <Link to={"/log-in"}>
          <li>Log In </li>
        </Link>
        <Link to={"/register"}>
          <li> Sign Up</li>
        </Link>
      </ul>
    </div>
  );
};
export default Nav;
