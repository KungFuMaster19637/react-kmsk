import "./Login.css";

const LoggedIn = () => {
  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    window.location.reload();
  };

  return (
    <div className="container-logout">
      <h2>U bent ingelogd als bestuurslid op de website!</h2>
      <button onClick={handleLogout} className="logout-button">
        Uitloggen
      </button>
    </div>
  );
};

export default LoggedIn;
