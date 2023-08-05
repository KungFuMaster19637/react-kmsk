import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className="container">
        <h2>Welkom bij de Koninklijke Mechelse Schaakclub</h2>
        <p>
          Wil jij ook schaken in een schaakclub? Kom eens langs bij de
          Koninklijke Mechelse Schaakkring. De clubavond gaat door elke vrijdag
          om 20 uur van september tot juni in het{" "}
          <Link to="/Ligging">Busleyden Atheneum - Campus Pitzemburg</Link>.
          Iedereen vindt zijn gading bij ons, van de beginner tot de sterke
          schaker. Gewoon zin in een partijtje schaak of een eerste
          kennismaking. Bij ons kan je op vrijdagavond vanaf september tot april
          vrijblijvend spelen in het Laddertornooi . Inschrijven voor 20u15. Er
          wordt 1 partij gespeeld van 1u bedenktijd per speler. Kom eens langs.
          Voor de jeugd, kijk op onze <Link to="/Jeugd"> jeugdwerking</Link>.
        </p>
      </div>
    </>
  );
};

export default Home;
