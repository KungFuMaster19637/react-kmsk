import React from "react";
import Lesgevers_data from "../components/Data/Lesgevers_Data";

const Lesgevers = () => {
  return (
    <>
      <div className="container-table">
        <h2>Onze lesgevers</h2>
        <table className="table-kmsk">
          <thead>
            <tr>
              <th>Stap</th>
              <th>Naam</th>
            </tr>
          </thead>
          <tbody>
            {Lesgevers_data.map((lesgever, index) => (
              <tr key={index} style={{ backgroundColor: lesgever.color }}>
                <td>{lesgever.level}</td>
                <td>
                  {Array.isArray(lesgever.name)
                    ? lesgever.name.join(", ")
                    : lesgever.name}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Lesgevers;
