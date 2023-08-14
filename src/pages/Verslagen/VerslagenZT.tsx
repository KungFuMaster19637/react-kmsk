import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import BlogSection from "../../components/Blog/BlogSection";
import useAuth from "../Login/useAuth";
import { fetchZTData } from "../../services/zilverentoren_crud";
import { BlogPost } from "../../components/Data/Verslag_Data";
// import Verslag_data from "../../components/Data/Verslag_Data";

const VerslagenZT = () => {
  const { isLoggedIn } = useAuth();
  const [data, setData] = useState<BlogPost[]>([]);

  useEffect(() => {
    async function fetchDataFromSupabase() {
      const { data: fetchedData, error } = await fetchZTData();
      if (!error) {
        setData(fetchedData as BlogPost[]);
      }
    }
    fetchDataFromSupabase();
  }, []);
  return (
    <>
      <div className="container-verslag">
        <div className="verslag-link">
          <h1>Verslagen Zilveren Toren</h1>
          {isLoggedIn && (
            <Link to="/verslagFormZT/${'ZilverenToren'}/${''}/${'false'}">
              Verslag invoeren
            </Link>
          )}
        </div>
        <BlogSection subject="ZilverenToren" blogPosts={data} />
      </div>
    </>
  );
};

export default VerslagenZT;
