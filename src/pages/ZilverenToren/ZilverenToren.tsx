import "./ZilverenToren.css";
import useScrollEffect from "../../ScrollEffect";

const ZilverenToren = () => {
  useScrollEffect();
  return (
    <>
      <div className="background-image-zilverentoren">
        <div>
          <h1>Zilveren Toren</h1>
        </div>

        <div className="hidden container-zilverentoren">
          <h2>Wat?</h2>
          <p>
            De “Zilveren Toren” is de provinciale interclubcompetitie ingericht
            door de Schaakliga Antwerpen. Er wordt gespeeld in lineaire
            afdelingen van maximum tien ploegen. Het toernooi telt dus negen
            ronden. In de eerste afdeling bestaan ploegen uit zes spelers, in de
            lagere afdelingen uit vier spelers. Meer info vind je{" "}
            <a href="https://zt.schaakliga-antwerpen.be" target="_blank">
              hier
            </a>
            .
          </p>
        </div>
        <div className="hidden container-zilverentoren">
          <h2>Wie?</h2>
          <p>
            Alle kringen waarvan de aansluiting bij Schaakliga Antwerpen in orde
            is op 1 januari van het kalenderjaar waarin de Zilveren Toren plaats
            vindt, mogen met een door hen vrij te bepalen aantal ploegen
            deelnemen. Spelers aangesloten bij de Koninklijke Belgische
            Schaakbond en lid van een schaakkring aangesloten bij de Schaakliga
            Antwerpen komen in aanmerking om opgesteld te worden. Spelers mogen
            uitkomen voor andere kringen dan hun hoofdkring. Dit dient bij het
            opmaken van de spelerslijsten bekend gemaakt te worden. Spelers
            wiens hoofdkring geen lid is van de Liga kunnen als gast speler
            deelnemen mits hun tweede aansluiting bij de Liga in orde is.
          </p>
        </div>

        <div className="hidden container-zilverentoren">
          <h2>Wanneer?</h2>
          <p>
            De Zilveren Toren vindt plaats gedurende de maanden januari,
            februari en maart. Er wordt gespeeld op speeldag en in het lokaal
            van de thuisspelende kring. Het aanvangsuur is 20:00 uur op
            weekdagen en 14:00 uur op zaterdag. Op zondag wordt er niet
            gespeeld.
          </p>
        </div>

        <div className="hidden container-zilverentoren">
          <h2>Hoe?</h2>
          <p>
            Uiterlijk 1 oktober nodigt de tornooileider de kringen aangesloten
            bij de schaakliga Antwerpen vzw uit om zich in te schrijven voor de
            komende competitie. Op 31/10 wordt deze inschrijvingsperiode
            afgesloten. De tornooileider maakt de kalender vervolgens uiterlijk
            15 november bekend via de “Zilveren Toren” applicatie. Uiterlijk één
            week voor de openingsronde worden de spelerslijsten geafficheerd.
            Deze worden samengesteld door de verantwoordelijken van elke kring,
            waarna de tornooileider ze nakijkt en publiceert.
          </p>
        </div>
      </div>
    </>
  );
};

export default ZilverenToren;
