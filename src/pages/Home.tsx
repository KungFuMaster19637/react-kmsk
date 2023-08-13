import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import supabase from "../services/supabase";

type BlogPost = {
  title: string;
  content: string;
};

const Home = () => {
  // console.log(supabase);
  // const [data, setData] = useState<BlogPost[]>([]);
  // const fetchData = async () => {
  //   try {
  //     const { data: fetchedData, error } = await supabase
  //       .from("zilverentoren_verslag")
  //       .select("title, content");

  //     if (error) {
  //       console.error("Error fetching data:", error);
  //     } else {
  //       console.log("Fetched data:", fetchedData);
  //       console.log("first in the row: " + fetchedData[0]);
  //       setData(fetchedData as BlogPost[]); // Make sure fetchedData matches the BlogPost[] type
  //     }
  //   } catch (error) {
  //     console.error("Error fetching data:", error);
  //   }
  // };

  // useEffect(() => {
  //   fetchData(); // Call the fetchData function to trigger data fetching
  // }, []);
  return (
    <>
      {/* <button onClick={fetchData} style={{ display: "block" }}>
        Read data
      </button> */}
      <div className="container">
        <h2>Welkom bij de Koninklijke Mechelse Schaakclub</h2>
        <p>
          Wil jij ook schaken in een schaakclub? Kom eens langs bij de
          Koninklijke Mechelse Schaakkring. De clubavond gaat door elke vrijdag
          om 20 uur van september tot juni in het{" "}
          <Link to="/Ligging" onClick={() => window.scrollTo(0, 0)}>
            Busleyden Atheneum - Campus Pitzemburg
          </Link>
          . Iedereen vindt zijn gading bij ons, van de beginner tot de sterke
          schaker. Gewoon zin in een partijtje schaak of een eerste
          kennismaking. Bij ons kan je op vrijdagavond vanaf september tot april
          vrijblijvend spelen in het Laddertornooi . Inschrijven voor 20u15. Er
          wordt 1 partij gespeeld van 1u bedenktijd per speler. Kom eens langs.
          Voor de jeugd, kijk op onze{" "}
          <Link to="/Jeugd" onClick={() => window.scrollTo(0, 0)}>
            {" "}
            jeugdwerking
          </Link>
          .
        </p>
      </div>

      <div className="container">
        <h2>Verslagen van onze competities</h2>
        <Link to="/verslagenIC" onClick={() => window.scrollTo(0, 0)}>
          Verslagen van onze Interclub
        </Link>
        <br />
        <Link to="/verslagenZT" onClick={() => window.scrollTo(0, 0)}>
          Verslagen van onze Zilveren Toren
        </Link>
      </div>
    </>
  );
};

export default Home;
