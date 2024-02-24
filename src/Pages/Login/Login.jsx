import { Link } from "react-router-dom";
import "./Login.scss";
import { useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import { AuthContext } from "../../Context/AuthContext";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [hidePassword, setHidePassword] = useState(true);

  // const { login } = useContext(AuthContext);
  const userPassword = JSON.parse(localStorage.getItem("user")).password;
  const userName = JSON.parse(localStorage.getItem("user")).email;

  // handling login
  const handleLogin = (e) => {
    e.preventDefault();

    email == userName && password == userPassword
      ? navigate("/")
      : setErrorMessage("Username or Password is wrong");
  };

  // show and hide password
  const showHide = () => {
    setHidePassword(!hidePassword);
  };
  return (
    <div className="login">
      <div className="card">
        {/* left side of login page */}
        <section className="left">
          <h1>
            Hello,
            <br /> Universe
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
            ab labore veritatis dolore.
          </p>
          <span>Don't you have an account?</span>
          <br />
          <Link to="/register">
            <button>Register</button>
          </Link>
        </section>

        {/* right side of login page */}
        <section className="right">
          <h2>Login</h2>
          {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
          <form action="" className="loginfield">
            <input
              type="text"
              name=""
              id="text"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              placeholder="Username"
            />
            <div className="passField">
              <input
                type={hidePassword ? "password" : "text"}
                name=""
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                id="password"
                placeholder="Passowrd"
              />
              <span>
                {hidePassword ? (
                  <VisibilityOffOutlinedIcon
                    style={{ cursor: "pointer" }}
                    onClick={showHide}
                  />
                ) : (
                  <VisibilityOutlinedIcon
                    style={{ cursor: "pointer" }}
                    onClick={showHide}
                  />
                )}
              </span>
            </div>

            <button onClick={handleLogin}>Login</button>
          </form>
        </section>
      </div>
    </div>
  );
};

export default Login;
