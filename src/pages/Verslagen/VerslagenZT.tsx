import { Link } from "react-router-dom";
import BlogSection from "../../components/Blog/BlogSection";
import Verslag_data from "../../components/Data/Verslag_Data";
import VerslagForm from "./VerslagForm";
import useAuth from "../Login/useAuth";

const VerslagenZT = () => {
  const { isLoggedIn } = useAuth();
  return (
    <>
      <div className="container-verslag">
        <div className="verslag-link">
          <h1>Verslagen Zilveren Toren</h1>
          {isLoggedIn && <Link to="/verslagFormZT">Verslag toevoegen</Link>}
        </div>
        <BlogSection blogPosts={Verslag_data.ZilverenToren} />
      </div>
    </>
  );
};

export default VerslagenZT;
