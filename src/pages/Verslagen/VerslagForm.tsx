import { useState } from "react";
import BlogForm from "../../components/Blog/BlogForm";

const VerslagForm = ({ subject }: { subject: string }) => {
  const [selectedSubject, setSelectedSubject] = useState(subject);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubjectChange = (event: any) => {
    setSelectedSubject(event.target.value);
  };
  return (
    <>
      <div className="container">
        <h2>Verslag invoeren</h2>
        <label htmlFor="subject">Verslag voor: </label>
        <select
          id="subject"
          value={selectedSubject}
          onChange={handleSubjectChange}
        >
          <option value="Interclub">Interclub</option>
          <option value="ZilverenToren">Zilveren Toren</option>
        </select>
        <BlogForm subject={selectedSubject}></BlogForm>
      </div>
    </>
  );
};

export default VerslagForm;
