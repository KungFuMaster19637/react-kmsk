import useScrollEffect from "../../ScrollEffect";
import "./Interclub.css";

const Interclub = () => {
  useScrollEffect();
  return (
    <>
      <div className="background-image-interclub">
        <div>
          <h1>Interclub</h1>
        </div>

        <div className="hidden container-interclub">
          <h2>Wat?</h2>
          <p>
            De nationale interclub is de competitie die voor Belgische
            schaakverenigingen wordt georganiseerd door de{" "}
            <a href="https://www.frbe-kbsb-ksb.be/nl/" target="_blank">
              Koninklijke Belgische Schaakbond.
            </a>
            . Net als in het Nederlands systeem, speelt men in België één keer
            tegen elke ploeg. De thuisploeg heeft telkens wit op de even borden.
            In elke reeks zitten er namelijk 11 of 12 ploegen. Afhankelijk van
            de klasse, spelen er meer of minder spelers mee. Meerdere ploegen
            kunnen afgevaardigd worden van één club. Zo is er bijvoorbeeld KGSRL
            1 en KGSRL 2, Veurne 1 en Veurne 2. De KBSB probeert om de
            reistijden van deelnemende ploegen zo veel mogelijk te beperken. Een
            ploeg uit Limburg zal daarom zelden tot nooit in eenzelfde serie
            geloot worden als een ploeg uit West-Vlaanderen.
          </p>
        </div>
        <div className="hidden container-interclub">
          <h2>Wie?</h2>
          <p>
            Alle spelers die aangesloten zijn bij de Koninklijke Belgische
            Schaakbond kunnen zich aanmelden om mee te doen aan een interclub
            seizoen. De spelers mogen enkel opkomen voor 1 club per seizoen, en
            spelen meestal maar voor 1 bepaalde ploeg in deze club.
            <br /> <br />
            Let wel op: spelers die aangesloten zijn bij een schaakclub komen
            niet automatisch in aanmerking voor interclub te mogen spelen.
          </p>
        </div>
        <div className="hidden container-interclub">
          <h2>Wanneer?</h2>
          <p>
            De competitie begint normaal rond september-oktober en eindigt na 11
            ronden. De laatste ronde bevindt zich meestal in de maand april. De
            wedstrijden worden uiterlijk op zondag gespeeld en de partijen
            beginnen om 14:00 uur.
          </p>
        </div>

        <div className="hidden container-interclub">
          <h2>Hoe?</h2>
          <p>
            De inschrijvingen voor het volgende seizoen opent meestal in Juni.
            De spelers worden door de toernooileider van de club geïnformeerd
            via mail om een beslissing te maken of ze aan het seizoen willen
            deelnemen. Elke ronde wordt de speler een week op voorhand op de
            hoogte gebracht van de ploeg waarin hij of zij speelt en op welke
            locatie.
          </p>
        </div>
      </div>
    </>
  );
};

export default Interclub;
