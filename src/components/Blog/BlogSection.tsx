import { BlogPost } from "../Data/Verslag_Data";
import { useEffect } from "react";
import "./BlogSection.css";
import { Link } from "react-router-dom";
import useAuth from "../../pages/Login/useAuth";

const BlogSection = ({
  subject,
  blogPosts,
}: {
  subject: string;
  blogPosts: BlogPost[];
}) => {
  const { isLoggedIn } = useAuth();
  const verslagURL =
    subject === "Interclub" ? "/verslagFormIC" : "/verslagFormZT";
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
      {blogPosts
        .slice(0)
        .reverse()
        .map((post, index) => (
          <div className="hidden subcontainer-blog" key={index}>
            {isLoggedIn && (
              <div>
                <div>
                  <Link to={`../verslagDelete/${subject}/${post.id}`}>
                    Verwijder post
                  </Link>
                </div>
                <div>
                  <Link to={`${verslagURL}/${subject}/${post.id}/${"true"}`}>
                    Bewerk post
                  </Link>
                </div>
              </div>
            )}

            <h2>{post.title}</h2>
            <p>{post.content}</p>
          </div>
        ))}
    </>
  );
};

export default BlogSection;
