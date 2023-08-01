import { useState } from "react";

const Ligging = () => {
  const [iframeLoaded, setIframeLoaded] = useState(false);

  const handleIframeLoad = () => {
    setIframeLoaded(true);
  };

  return (
    <>
      <div className="container-ligging">
        <div className="subcontainer-ligging">
          <h2>Ligging van het lokaal</h2>
          {!iframeLoaded && <div>Loading...</div>}
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1017.744102083503!2d4.481429385520395!3d51.023515353040054!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c3e5cc35fa8287%3A0xe67ff14312f353b5!2sGO*21%20Busleyden%20Atheneum%20-%20Campus%20Pitzemburg!5e0!3m2!1snl!2sbe!4v1690293605449!5m2!1snl!2sbe"
            className="iframe-container"
            onLoad={handleIframeLoad}
            hidden={!iframeLoaded}
            // loading="lazy"
          ></iframe>
          <p>
            Refter van het Busleyden Atheneum - Campus Pitzemburg, <br />
            Bruul 129, 2800 Mechelen
          </p>
        </div>
        <div className="subcontainer-ligging extra-ligging">
          <h2>Extra foto's</h2>
          <img src="./assets/images/Lokaal1.jpg"></img>
          <p>Ingang bruul</p>
          <img src="./assets/images/Lokaal2.jpg"></img>
          <p>
            Begin van de Bruul via de Vijfhoek met groene lichten voor vrije
            doorgang en vanaf 11 uur tot 18 uur : rode lichten en €55 boete voor
            wie toch doorrijdt.
          </p>
          <img src="./assets/images/Lokaal3.jpg"></img>
          <p>Bruul 129 : Ingang van het Atheneum Pitzemburg vanop de Bruul</p>
          <img src="./assets/images/Lokaal4.jpg"></img>
          <p>
            Zicht op de speelplaats van het Atheneum Pitzemburg met achteraan
            het gebouw met refter
          </p>
        </div>
        <div className="subcontainer-ligging tips-ligging">
          <h2>
            <u>Handig om te weten</u>
          </h2>

          <h3>
            Op vrijdagavond en zondagmorgen voor 11u, toegang tot de
            speelplaats:
          </h3>
          <img src="./assets/images/Lokaal5.jpg"></img>
          <p>
            Afrit Mechelen - Zuid ( afrit Nr.10 ) : aan het rond punt neem je
            richting Mechelen (over de viaduct). Je volgt de Tangent en gaat
            door de tunnel. Aan de eerste lichten ga je linksaf. Aan de volgende
            lichten ga je rechtdoor naar de Hanswijkstraat. Op de vijfhoek ga je
            rechtsaf naar de Bruul, hier staan de lichten die je toegang (groen)
            of geen toegang (rood) verlenen. Je rijdt tot net over de brug waar
            je direct rechts gaat naar de ingang van het Atheneum Pitzemburg en
            je verder op de speelplaats kan.
          </p>

          <hr></hr>

          <h3>Uit richting Leuven (via de Leuvensesteenweg):</h3>
          <img src="./assets/images/Lokaal6.jpg"></img>
          <p>
            Komende van Leuven rijd je naar Mechelen via de Leuvensesteenweg en
            ga je aan de lichten rechtdoor naar de Hanswijkstraat. Op de
            vijfhoek ga je rechtsaf naar de Bruul, hier staan de lichten die je
            toegang (groen) of geen toegang (rood) verlenen. Je rijdt tot net
            over de brug waar je direct rechts gaat naar de ingang van het
            Atheneum Pitzemburg en je verder op de speelplaats kan.
          </p>

          <hr></hr>

          <h3>Op zondagnamiddag (Interclub):</h3>
          <img src="./assets/images/Lokaal7.jpg"></img>
          <p>
            Voor de interclub op zondagnamiddag kan je best parkeren op de grote
            Randparking aan de Zandpoortvest. Op zon- en feestdagen is deze
            parking altijd gratis. Vermijd straatparkeren of de ondergrondse
            parking Bruul op de Hendrik Speecqvest. Deze parkings zijn altijd
            betalend, ook op zondag en vrij duur. De school Pitzemburg grenst
            aan het stadspark Botaniek (kruidtuin) en als je door dat park
            loopt, kom je zo aan de Zandpoortvest. Het is 750m of 9' wandelen
            van de gratis Parking Zandpoortvest tot het Atheneum Pitzemburg. Ook
            met de trein is ons lokaal goed bereikbaar. Op 500m ben je van
            station Mechelen (opgelet, stap af in het hoofdstation, niet in
            Mechelen-Nekkerspoel) in ons lokaal.
          </p>
        </div>
      </div>
    </>
  );
};

export default Ligging;
