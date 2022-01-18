import github from "../Nav/GitHub.png";

const Footer = () => {
  return (
    <div className="footer">
      <a
        href="https://github.com/Nuccino92/blog_api"
        target="https://github.com/Nuccino92/blog_api"
      >
        <img
          className="github-mark"
          src={github}
          title="Link to Respository"
          alt="github icon"
        />
      </a>
    </div>
  );
};

export default Footer;
