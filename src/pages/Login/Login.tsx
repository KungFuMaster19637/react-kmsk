import { useState } from "react";
import "./Login.css";
import Password_Data from "../../components/Data/Password_Data";
import LoggedIn from "./LoggedIn";
import useAuth from "./useAuth";

const Login = () => {
  const { isLoggedIn } = useAuth();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (event: any) => {
    event.preventDefault(); // Prevent the form from submitting the regular way

    // Use this when deploying
    // const userPassword = process.env.REACT_APP_PASSWORD;
    // const userLoginName= process.env.REACT_APP_USERNAME;
    const userPassword = Password_Data[0].password;
    const userLoginName = Password_Data[0].username;

    console.log(userPassword);
    // Compare the entered password with the password from the environment variable
    if (password === userPassword && username === userLoginName) {
      // Passwords match, perform successful login logic
      localStorage.setItem("isLoggedIn", "true");
      window.location.reload();
    } else {
      // Passwords do not match
      alert("Invalid username or password.");
    }
  };

  return (
    <>
      <div className="container-login">
        {isLoggedIn ? (
          <LoggedIn />
        ) : (
          <form className="login-form" onSubmit={handleLogin}>
            <h2>Inlog voor bestuur KMSK</h2>
            <div className="form-group">
              <label htmlFor="username">Gebruikersnaam:</label>
              <input
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Wachtwoord:</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <button type="submit" className="login-button">
                Inloggen
              </button>
            </div>
          </form>
        )}
      </div>
    </>
  );
};

export default Login;
