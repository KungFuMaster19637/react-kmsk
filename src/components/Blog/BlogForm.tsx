import { useState } from "react";
import { createData } from "../../services/zilverentoren_crud";

const BlogForm = ({ subject }: { subject: string }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    // Call the addBlogPost function to add the new blog post
    try {
      // Call the createData function to create a new blog post
      const { createdData, error } = await createData({ title, content });

      if (error) {
        console.error("Error creating data:", error);
        return;
      }
      console.log("New blog post created:", createData);
      // Optionally reset the form fields here
      setTitle("");
      setContent("");
    } catch (error) {
      console.error("Error creating data:", error);
    }
  };
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
