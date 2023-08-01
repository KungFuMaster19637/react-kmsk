import "./Inschrijven.css";
import useScrollEffect from "../../ScrollEffect";

const Inschrijven = () => {
  useScrollEffect();

  return (
    <>
      <div className="background-image-inschrijven">
        {/* <img
        src="src/assets/images/JeugdSchaak.jpeg"
        className="background-image"
      ></img> */}
        <div className="hidden container-inschrijven">
          <h2>Wie kan er zich inschrijven voor de jeugdlessen?</h2>
          <p>
            Iedereen die interesse heeft in schaken is welkom bij onze club,
            zelfs als je nog geen basis hebt. De lessen zijn bedoeld voor
            kinderen vanaf het 2e leerjaar tot en met het seizoen waarin ze 20
            jaar worden en dus niet meer als jeugdspeler meegerekend worden. In
            het 1e leerjaar leren ze immers lezen en dit is noodzakelijk omdat
            ze een werkboekje meekrijgen met oefeningen.
          </p>
        </div>
        <div className="hidden container-inschrijven">
          <h2>
            Hoeveel bedraagt het inschrijvingsgeld en wat is er inbegrepen?
          </h2>
          <p>
            Het inschrijvingsgeld bedraagt 55€ en dient betaald te worden via
            het rekeningnummer van de club met IBAN = BE36 9731 4996 6781 en BIC
            = ARSPBE22. Hiervoor krijgen ze tijdens het seizoen les op
            zondagmorgen van 10u tot 12u, waar ze begeleid worden door lesgevers
            op hun niveau en ook een werkboekje met oefeningen krijgen dat ze
            mogen meenemen naar huis. Ze mogen ook gratis deelnemen aan onze 3
            interne clubtornooien en het Provinciaal Jeugdkampioenschap dat in
            Mechelen plaatsvindt. Wij zorgen ook voor begeleiding ter plaatse
            tijdens alle criteriumtornooien, alsook de Provinciale, Vlaamse en
            Belgische Jeugdkampioenschappen. Voor alle schaakactiviteiten zijn
            de kinderen verzekerd, ook als deze zich buiten onze club bevinden.
            Wij zorgen ook voor de nodige aansluiting bij de Koninklijke
            Belgische Schaakbond indien dit nodig is voor externe competitie.
          </p>
        </div>

        <div className="hidden container-inschrijven">
          <h2>Hoe schrijf ik mijn zoon/dochter in?</h2>
          <p>
            Alles begint met een mail te sturen naar de jeugdverantwoordelijke{" "}
            <a href="mailto:kevin.de.winter@hotmail.be">Kevin De Winter</a>. Hij
            verzamelt jullie gegevens en nodigt jullie uit om in september te
            komen. De eerste zondag van september is er plaats voor een eerste
            kennismaking met onze jeugdwerking. Op de 2e zondag is er voor de
            kinderen mogelijk een test voorzien om te kijken of zij in een
            hogere groep kunnen inschrijven. Terwijl wordt via een korte
            presentatie aan de ouders uitgelegd hoe onze club werkt en wat de
            doelstellingen en verwachtingen zijn. De resterende zondagen starten
            we met de eerste lessen. Daarna kunnen de kinderen voldoende
            oordelen of ze ook de rest van het seizoen naar onze lessen willen
            komen en gemotiveerd zijn om te schaken. Tegen eind september
            verwachten we dan ook een definitieve beslissing en de betaling van
            het inschrijvingsgeld.
          </p>
        </div>

        <div className="hidden container-inschrijven">
          <h2>Wat gebeurt er als een groep volzet is?</h2>
          <p>
            Om de kwaliteit van de lessen te garanderen worden de groepen
            beperkt tot maximaal 8 kinderen per lesgever. Hierdoor kan het zijn
            dat we in september nieuwe leden moeten weigeren omdat sommige
            groepen al volzet zijn. Wij doen uiteraard ons best om zoveel
            mogelijk plaatsen aan te bieden zodat iedereen bij ons terecht kan
            om het schaken te leren. Val je echter toch uit de boot, dan wordt
            je op een wachtlijst gezet. De kinderen op deze wachtlijst komen dan
            in aanmerking als er in het begin van het seizoen iemand onverwacht
            stopt met schaken. Zij zullen bij de inschrijvingen van het
            daaropvolgende seizoen van dezelfde voorrangsregel kunnen genieten
            zoals kinderen die al lid waren van onze club en broers, zussen of
            kinderen van reeds aangesloten leden. In de tussentijd kan er in
            overleg en afhankelijk van de motivatie en het niveau van het kind
            afgesproken worden wat het beste is om de periode tot het volgende
            seizoen te overbruggen.
          </p>
        </div>

        <div className="hidden container-inschrijven">
          <h2>Wat gebeurt er als de inschrijvingen al voorbij zijn?</h2>
          <p>
            Helaas sluiten wij na september onze inschrijvingen voor dat seizoen
            af. De lessen zijn immers al gestart en dan is het voor zowel de
            lesgever als de jeugdspeler moeilijk om aan te sluiten als er
            verschillende lessen gemist zijn. Er is wel de mogelijkheid om een
            gratis proefles te volgen en om dit te plannen neem je best even
            contact met onze jeugdverantwoordelijke{" "}
            <a href="mailto:kevin.de.winter@hotmail.be">Kevin De Winter</a>.
            Daarna kan er in overleg en afhankelijk van de motivatie en het
            niveau van het kind afgesproken worden wat het beste is om de
            periode tot het volgende seizoen te overbruggen.
          </p>
        </div>
      </div>
    </>
  );
};

export default Inschrijven;
