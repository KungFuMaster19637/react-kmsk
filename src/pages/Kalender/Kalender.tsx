import React from "react";
import Interclub_data from "../../components/Data/Interclub_Data";
import ZilverenToren_data from "../../components/Data/ZilverenToren_Data";

const Kalender = () => {
  return (
    <>
      <div className="container-table">
        <h2>Kalender Interclub 2023 - 2024</h2>
        <table className="table-kmsk">
          <thead>
            <tr>
              <th>Ronde</th>
              <th>Datum</th>
              <th>Club</th>
            </tr>
          </thead>
          <tbody>
            {Interclub_data.map((interclub, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{interclub.date}</td>
                <td>{interclub.club}</td>
              </tr>
            ))}
          </tbody>
        </table>
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
