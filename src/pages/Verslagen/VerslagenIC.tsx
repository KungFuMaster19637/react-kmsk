import BlogSection from "../../components/Blog/BlogSection";
import Verslag_data from "../../components/Data/Verslag_Data";

const VerslagenIC = () => {
  return (
    <>
      <div className="container-verslag">
        <h1>Verslagen Interclub</h1>
        <BlogSection blogPosts={Verslag_data.Interclub} />
      </div>
    </>
  );
};

export default VerslagenIC;
