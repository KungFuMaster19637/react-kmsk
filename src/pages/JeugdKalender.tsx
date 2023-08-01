import Jeugdkalender_data from "../components/Data/Jeugdkalender_Data";

const JeugdKalender = () => {
  return (
    <>
      <div className="container-table">
        <h2>Jeugdkalender</h2>
        <table className="table-kmsk">
          <thead>
            <tr>
              <th>Evenement</th>
              <th>Datum</th>
              <th>Folder</th>
            </tr>
          </thead>
          <tbody>
            {Jeugdkalender_data.map((kalenderItem, index) => (
              <tr key={index}>
                <td>{kalenderItem.event}</td>
                <td>{kalenderItem.date}</td>
                <td>{kalenderItem.folder}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default JeugdKalender;
