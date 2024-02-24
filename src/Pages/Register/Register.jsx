import { Link } from "react-router-dom";
import "./Resgister.scss";
import { useNavigate } from "react-router-dom";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import { useContext, useState } from "react";
import { AuthContext } from "../../Context/AuthContext";

const Register = () => {
  const navigate = useNavigate();

  const [hidePassword, setHidePassword] = useState(true);

  const [Name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { Register } = useContext(AuthContext);
  const handleRegister = (e) => {
    e.preventDefault();
    Register(Name, email, password);
    navigate("/login");
  };

  // handling show-hide password
  const showHide = () => {
    setHidePassword(!hidePassword);
  };

  return (
    <div className="register">
      <div className="card">
        {/* right side of login page */}
        <section className="left">
          <h1>Resgister</h1>
          <form action="" className="loginfield">
            <input
              type="text"
              name=""
              onChange={(e) => setName(e.target.value)}
              id="name"
              placeholder="Your Name"
            />

            <input
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              name=""
              id="email"
              placeholder="Email"
            />
            <div className="passField">
              <input
                type={hidePassword ? "password" : "text"}
                name=""
                onChange={(e) => setPassword(e.target.value)}
                id="password"
                placeholder="password"
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
            <button onClick={handleRegister}>Register</button>
          </form>
        </section>
        {/* left side of login page */}
        <section className="right">
          <h1>
            Friendify,
            <br /> Universely
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
            ab labore veritatis dolore.
          </p>
          <span>Do you have an account?</span>
          <br />
          <Link to="/login">
            <button>Login</button>
          </Link>
        </section>
      </div>
    </div>
  );
};

export default Register;
