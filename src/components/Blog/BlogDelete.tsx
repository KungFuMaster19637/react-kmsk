import { useParams } from "react-router-dom";
import { deleteICData, fetchICDataByID } from "../../services/interclub_crud";
import {
  deleteZTData,
  fetchZTDataByID,
} from "../../services/zilverentoren_crud";
import { useState, useEffect } from "react";
import useAuth from "../../pages/Login/useAuth";
import NotLoggedIn from "../../pages/Login/NotLoggedIn";

const BlogDelete = () => {
  const { isLoggedIn } = useAuth();

  const { postId, subject } = useParams();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchedData =
          subject === "Interclub"
            ? await fetchICDataByID(Number(postId))
            : await fetchZTDataByID(Number(postId));

        if (fetchedData?.data) {
          setTitle(fetchedData.data.title);
          setContent(fetchedData.data.content);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, [postId, subject]);

  const handleDelete = async (id: number) => {
    try {
      // Call the deleteData function to delete the blog post
      const { error } =
        subject === "Interclub"
          ? await deleteICData(id)
          : await deleteZTData(id);

      if (error) {
        console.error("Error deleting data:", error);
        return;
      }
      backToPage();
    } catch (error) {
      console.error("Error deleting data:", error);
    }
  };

  const backToPage = () => {
    switch (subject) {
      case "Interclub":
        window.location.href = "/react-kmsk/verslagenIC";
        break;
      case "ZilverenToren":
        window.location.href = "/react-kmsk/verslagenZT";
        break;
      default:
        break;
    }
  };

  return (
    <>
      <div>
        {isLoggedIn ? (
          <div>
            <div className="delete-container">
              <h2>Bent u zeker dat u deze post wilt verwijderen?</h2>
            </div>
            <div className="delete-subcontainer-buttons">
              <button
                className="crud-button"
                onClick={() => handleDelete(Number(postId))}
              >
                Verwijder deze post
              </button>
              <button className="crud-button" onClick={backToPage}>
                Ga terug naar verslagen
              </button>
            </div>
            <div className="subcontainer-blog">
              <h2>{title}</h2>
              <p>{content}</p>
            </div>
          </div>
        ) : (
          <NotLoggedIn />
        )}
      </div>
    </>
  );
};

export default BlogDelete;
