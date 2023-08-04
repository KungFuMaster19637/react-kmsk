import React from "react";

interface TeamTableProps {
  dates: string[];
  teams: string[];
  selectedTeam: string | null;
}

const TeamTable: React.FC<TeamTableProps> = ({
  dates,
  teams,
  selectedTeam,
}) => {
  return (
    <div>
      <h2>{selectedTeam || "None"}</h2>
      <table className="table-kmsk">
        {/* Render the table with dates and opponents */}
        <thead>
          <tr>
            <th>Ronde</th>
            <th>Datum</th>
            <th>Tegenstander</th>
          </tr>
        </thead>
        <tbody>
          {dates.map((date, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{date}</td>
              <td>{teams[index]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TeamTable;
