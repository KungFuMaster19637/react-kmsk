import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import BlogSection from "../../components/Blog/BlogSection";
import useAuth from "../Login/useAuth";
import { fetchICData } from "../../services/interclub_crud";
import { BlogPost } from "../../components/Data/Verslag_Data";
// import Verslag_data from "../../components/Data/Verslag_Data";

const VerslagenIC = () => {
  const { isLoggedIn } = useAuth();
  const [data, setData] = useState<BlogPost[]>([]);

  useEffect(() => {
    async function fetchDataFromSupabase() {
      const { data: fetchedData, error } = await fetchICData();
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
          <h1>Verslagen Interclub</h1>
          {isLoggedIn && (
            <Link to="/verslagFormIC/${'Interclub'}/${''}/${'false'}">
              Verslag invoeren
            </Link>
          )}
        </div>
        <BlogSection subject="Interclub" blogPosts={data} />
      </div>
    </>
  );
};

export default VerslagenIC;
