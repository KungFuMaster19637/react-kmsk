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
          </p>
        </div>
        <div className="hidden container-interclub">
          <h2>Wanneer?</h2>
          <p>
            De competitie begint normaal rond september-oktober en eindigt na 11
            ronden. In elke reeks zitten er namelijk 11 of 12 ploegen.
            Afhankelijk van de klasse, spelen er meer of minder spelers mee.
            Meerdere ploegen kunnen afgevaardigd worden van één club. Zo is er
            bijvoorbeeld KGSRL 1 en KGSRL 2, Veurne 1 en Veurne 2. De KBSB
            probeert om de reistijden van deelnemende ploegen zo veel mogelijk
            te beperken. Een ploeg uit Limburg zal daarom zelden tot nooit in
            eenzelfde serie geloot worden als een ploeg uit West-Vlaanderen.
          </p>
        </div>
      </div>
    </>
  );
};

export default Interclub;
