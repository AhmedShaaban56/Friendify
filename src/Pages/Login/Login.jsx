import { Link } from "react-router-dom";
import "./Login.scss";

const Login = () => {
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
          <form action="" className="loginfield">
            <input type="text" name="" id="text" placeholder="Username" />
            <input
              type="password"
              name=""
              id="password"
              placeholder="Passowrd"
            />
            <button>Login</button>
          </form>
        </section>
      </div>
    </div>
  );
};

export default Login;
