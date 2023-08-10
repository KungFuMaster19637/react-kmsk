import React, { useState } from "react";
import { addBlogPost } from "../Data/Verslag_Data";

const BlogForm = ({ subject }: { subject: string }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = (e: any) => {
    e.preventDefault();
    // Call the addBlogPost function to add the new blog post
    addBlogPost(subject, title, content);
    setTitle("");
    setContent("");
    let subjectUrl = "";
    switch (subject) {
      case "Interclub":
        subjectUrl = "IC";
        break;
      case "ZilverenToren":
        subjectUrl = "ZT";
        break;
      default:
        break;
    }
    // window.location.href = "/react-kmsk/verslagen" + subjectUrl;
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="subcontainer-blogform">
          <label>Titel:</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            className="blogform-input"
          />
        </div>
        <div className="subcontainer-blogform">
          <label>Inhoud:</label>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
          />
        </div>
        <div>
          <button type="submit" className="submit-button">
            Verslag doorvoeren
          </button>
        </div>
      </form>
    </div>
  );
};

export default BlogForm;
