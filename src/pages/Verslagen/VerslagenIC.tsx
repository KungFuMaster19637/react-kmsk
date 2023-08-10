import { Link } from "react-router-dom";
import BlogSection from "../../components/Blog/BlogSection";
import Verslag_data from "../../components/Data/Verslag_Data";
import useAuth from "../Login/useAuth";

const VerslagenIC = () => {
  const { isLoggedIn } = useAuth();
  return (
    <>
      <div className="container-verslag">
        <div className="verslag-link">
          <h1>Verslagen Interclub</h1>
          {isLoggedIn && <Link to="/verslagFormIC">Verslag toevoegen</Link>}
        </div>
        <BlogSection blogPosts={Verslag_data.Interclub} />
      </div>
    </>
  );
};

export default VerslagenIC;
