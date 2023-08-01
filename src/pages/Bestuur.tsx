import Bestuur_data from "../components/Data/Bestuur_Data";

const Bestuur = () => {
  return (
    <>
      <div className="container-table">
        <h2>Bestuursleden</h2>
        <table className="table-kmsk">
          <thead>
            <tr>
              <th>Rol</th>
              <th>Naam</th>
              <th>Contact</th>
            </tr>
          </thead>
          <tbody>
            {Bestuur_data.map((bestuurslid, index) => (
              <tr key={index}>
                <td>{bestuurslid.rol}</td>
                <td>{bestuurslid.naam}</td>
                <td>{bestuurslid.contact}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="subcontainer-bestuur">
          <h2>Bankrekening</h2>
          <p>IBAN = BE36 9731 4996 6781</p>
          <p>BIC = ARSPBE22</p>
        </div>
      </div>
    </>
  );
};

export default Bestuur;
