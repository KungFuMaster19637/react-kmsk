import { useState } from "react";
import TeamTable from "./TeamTable";
import Interclub_data from "../../components/Data/Interclub_Data";
import ZilverenToren_data from "../../components/Data/ZilverenToren_Data";
import "./Kalender.css";
import { Link } from "react-router-dom";

const Kalender = () => {
  //Interclub
  const [selectedInterclubTeam, setSelectedInterclubTeam] = useState({
    teamName: Interclub_data.Teams[0].name,
    opponents: Interclub_data.Teams[0].opponents,
  });

  const handleInterclubTeamClick = (index: number) => {
    setSelectedInterclubTeam({
      teamName: Interclub_data.Teams[index].name,
      opponents: Interclub_data.Teams[index].opponents,
    });
  };

  //ZT
  const [selectedZTTeam, setSelectedZTTeam] = useState({
    teamName: ZilverenToren_data[0].name,
    dates: ZilverenToren_data[0].dates,
    opponents: ZilverenToren_data[0].opponents,
  });

  const handleZTTeamClick = (index: number) => {
    setSelectedZTTeam({
      teamName: ZilverenToren_data[index].name,
      dates: ZilverenToren_data[index].dates,
      opponents: ZilverenToren_data[index].opponents,
    });
  };

  return (
    <>
      <div className="container-table">
        <h2>Kalender Interclub 2023 - 2024</h2>
        <div className="team-display">
          {Interclub_data.Teams.map((teamName, index) => (
            <button
              key={index}
              onClick={() => handleInterclubTeamClick(index)}
              className="button-team"
            >
              {teamName.name}
            </button>
          ))}
        </div>
        {selectedInterclubTeam && (
          <TeamTable
            dates={Interclub_data.Dates}
            opponents={selectedInterclubTeam.opponents}
            selectedTeam={selectedInterclubTeam.teamName}
          />
        )}
        <Link to="/verslagenIC" onClick={() => window.scrollTo(0, 0)}>
          Verslag Interclub
        </Link>
      </div>

      <div className="container-table">
        <h2>Kalender Zilveren Toren 2023</h2>
        <div className="team-display">
          {ZilverenToren_data.map((teamName, index) => (
            <button
              key={index}
              onClick={() => handleZTTeamClick(index)}
              className="button-team"
            >
              {teamName.name}
            </button>
          ))}
        </div>
        {selectedZTTeam && (
          <TeamTable
            dates={selectedZTTeam.dates}
            opponents={selectedZTTeam.opponents}
            selectedTeam={selectedZTTeam.teamName}
          />
        )}
        <Link to="/verslagenZT" onClick={() => window.scrollTo(0, 0)}>
          Verslag Zilveren Toren{" "}
        </Link>
      </div>
    </>
  );
};

export default Kalender;
