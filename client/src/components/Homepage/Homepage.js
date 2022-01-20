import { Link } from "react-router-dom";
const Homepage = () => {
  return (
    <div className="homepage">
      <Link to={"/posts"}>
        <button>View Bloggos</button>
      </Link>
    </div>
  );
};

export default Homepage;
