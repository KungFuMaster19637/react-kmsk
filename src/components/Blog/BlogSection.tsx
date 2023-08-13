import { BlogPost } from "../Data/Verslag_Data";
import { useEffect } from "react";
import "./BlogSection.css";

const BlogSection = ({ blogPosts }: { blogPosts: BlogPost[] }) => {
  //Duplicate from scrolleffect to avoid hook errors
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        } else {
          entry.target.classList.remove("show");
        }
      });
    });

    const hiddenElements = document.querySelectorAll(".hidden");
    hiddenElements.forEach((el) => observer.observe(el));
    return () => {
      hiddenElements.forEach((el) => observer.unobserve(el));
    };
  }, [blogPosts]);
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
