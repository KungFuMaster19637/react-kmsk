import useScrollEffect from "../../ScrollEffect";
import { BlogPost } from "../Data/Verslag_Data";
import "./BlogSection.css";

const BlogSection = ({ blogPosts }: { blogPosts: BlogPost[] }) => {
  useScrollEffect();
  return (
    <>
      {blogPosts.map((post, index) => (
        <div className="hidden subcontainer-blog" key={index}>
          <h2>{post.title}</h2>
          <p>{post.content}</p>
        </div>
      ))}
    </>
  );
};

export default BlogSection;
