import useScrollEffect from "../../ScrollEffect";
import Links_data from "../../components/Data/Links_Data";
import "./Links.css";

const Links = () => {
  useScrollEffect();
  return (
    <>
      <div className="background-image-links">
        <div className="hidden subcontainer-links">
          <h2>Blogs</h2>
          <ul>
            {Links_data.Blogs.map((item, index) => (
              <li key={index}>
                <a className="links-text" href={item.link} target="_blank">
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="hidden subcontainer-links">
          <h2>Federaties</h2>
          <ul>
            {Links_data.Federaties.map((item, index) => (
              <li key={index}>
                <a className="links-text" href={item.link} target="_blank">
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="hidden subcontainer-links">
          <h2>Internationaal</h2>
          <ul>
            {Links_data.Internationaal.map((item, index) => (
              <li key={index}>
                <a className="links-text" href={item.link} target="_blank">
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="hidden subcontainer-links">
          <h2>Andere clubs</h2>
          <ul>
            {Links_data.Clubs.map((item, index) => (
              <li key={index}>
                <a className="links-text" href={item.link} target="_blank">
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="hidden subcontainer-links">
          <h2>Leren</h2>
          <ul>
            {Links_data.Leren.map((item, index) => (
              <li key={index}>
                <a className="links-text" href={item.link} target="_blank">
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="hidden subcontainer-links">
          <h2>Andere</h2>
          <ul>
            {Links_data.Andere.map((item, index) => (
              <li key={index}>
                <a className="links-text" href={item.link} target="_blank">
                  {item.name}
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
