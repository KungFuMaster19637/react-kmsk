import { useState } from "react";
import TeamTable from "./TeamTable";
import Interclub_data from "../../components/Data/Interclub_Data";
import ZilverenToren_data from "../../components/Data/ZilverenToren_Data";
import "./Kalender.css";

const Kalender = () => {
  const [selectedInterclubTeam, setSelectedInterclubTeam] = useState({
    teamName: Interclub_data.Teams[0].name,
    opponents: Interclub_data.Teams[0].opponents,
  });

  const handleTeamClick = (index: number) => {
    setSelectedInterclubTeam({
      teamName: Interclub_data.Teams[index].name,
      opponents: Interclub_data.Teams[index].opponents,
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
              onClick={() => handleTeamClick(index)}
              className="button-team"
            >
              {teamName.name}
            </button>
          ))}
        </div>
        {selectedInterclubTeam && (
          <TeamTable
            dates={Interclub_data.Dates}
            teams={selectedInterclubTeam.opponents}
            selectedTeam={selectedInterclubTeam.teamName}
          />
        )}
        <a href="">Verslag Interclub </a>
      </div>

      <div className="container-table">
        <h2>Kalender Zilveren Toren 2023</h2>
        <table className="table-kmsk">
          <thead>
            <tr>
              <th>Ronde</th>
              <th>Datum</th>
              <th>Club</th>
            </tr>
          </thead>
          <tbody>
            {ZilverenToren_data.map((zilverenToren, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{zilverenToren.date}</td>
                <td>{zilverenToren.club}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <a href="">Verslag Zilveren Toren </a>
      </div>
    </>
  );
};

export default Kalender;
