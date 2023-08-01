import Links_data from "../../components/Data/Links_Data";
import "./Links.css";

const Links = () => {
  return (
    <>
      <div className="container-links">
        <div className="subcontainer-links">
          <h2>Blogs</h2>
          <ul>
            {Links_data.Blogs.map((blog, index) => (
              <li key={index}>
                <a href={blog.link} target="_blank">
                  {blog.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="subcontainer-links">
          <h2>Federaties</h2>
          <ul>
            {Links_data.Federaties.map((federatie, index) => (
              <li key={index}>
                <a href={federatie.link} target="_blank">
                  {federatie.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Links;
