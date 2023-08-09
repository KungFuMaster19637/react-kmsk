import BlogSection from "../../components/Blog/BlogSection";
import Verslag_data from "../../components/Data/Verslag_Data";

const VerslagenZT = () => {
  return (
    <>
      <div className="container-verslag">
        <h1>Verslagen Zilveren Toren</h1>
        <BlogSection blogPosts={Verslag_data.ZilverenToren} />
      </div>
    </>
  );
};

export default VerslagenZT;
