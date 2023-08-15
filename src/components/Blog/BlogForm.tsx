import { useState, useEffect } from "react";

import {
  createZTData,
  fetchZTDataByID,
  updateZTData,
} from "../../services/zilverentoren_crud";
import {
  createICData,
  fetchICDataByID,
  updateICData,
} from "../../services/interclub_crud";
import { useParams, useNavigate } from "react-router-dom";
import useAuth from "../../pages/Login/useAuth";
import NotLoggedIn from "../../pages/Login/NotLoggedIn";

const BlogForm = () => {
  const navigate = useNavigate();
  const { isLoggedIn } = useAuth();
  const { postId, update, subject } = useParams();
  const [selectedSubject, setSelectedSubject] = useState(subject?.toString());
  const [title, setTitle] = useState<string | undefined>("");
  const [content, setContent] = useState<string | undefined>("");

  console.log(update);
  const fetchedData = useEffect(() => {
    const fetchData = async () => {
      if (update === "true") {
        const fetchedData =
          subject === "Interclub"
            ? await fetchICDataByID(Number(postId))
            : await fetchZTDataByID(Number(postId));
        setTitle(fetchedData?.data.title);
        setContent(fetchedData?.data.content);
      }
    };

    fetchData();
  }, [update, subject]);

  // If subject changes
  const handleSubjectChange = (event: any) => {
    setSelectedSubject(event.target.value);
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    // Call the addBlogPost function to add the new blog post
    try {
      // Call the createData function to create a new blog post
      if (update === "true") {
        const { data, error } =
          selectedSubject === "Interclub"
            ? await updateICData({
                id: Number(postId),
                title: title!,
                content: content!,
              })
            : await updateZTData({
                id: Number(postId),
                title: title!,
                content: content!,
              });

        if (error) {
          console.error("Error 101 creating data:", error);
          return;
        }
      } else {
        const { createdData, error } =
          selectedSubject === "Interclub"
            ? await createICData(title!, content!)
            : await createZTData(title!, content!);

        if (error) {
          console.error("Error 102 creating data:", error);
          return;
        }
      }

      // Optionally reset the form fields here
      setTitle("");
      setContent("");
      let subjectUrl = "";
      switch (selectedSubject) {
        case "Interclub":
          subjectUrl = "IC";
          window.location.href = "/react-kmsk/verslagen" + subjectUrl;
          break;
        case "ZilverenToren":
          subjectUrl = "ZT";
          window.location.href = "/react-kmsk/verslagen" + subjectUrl;
          break;
        default:
          break;
      }
    } catch (error) {
      console.error("Error 103 creating data:", error);
    }
  };
  return (
    <>
      {isLoggedIn ? (
        <div className="container">
          {update === "true" ? (
            <h2>Verslag aanpassen</h2>
          ) : (
            <h2>Verslag invoeren</h2>
          )}
          <label htmlFor="subject">Verslag voor: </label>
          <form onSubmit={handleSubmit}>
            <div className="subcontainer-blogform">
              <select
                id="subject"
                value={selectedSubject}
                onChange={handleSubjectChange}
              >
                <option value="Interclub">Interclub</option>
                <option value="ZilverenToren">Zilveren Toren</option>
              </select>
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
              <button className="back-button" onClick={() => navigate(-1)}>
                Terug naar verslagen
              </button>
            </div>
          </form>
        </div>
      ) : (
        <NotLoggedIn />
      )}
    </>
  );
};

export default BlogForm;
