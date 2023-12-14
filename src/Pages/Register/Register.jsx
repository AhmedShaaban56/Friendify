import { Link } from "react-router-dom";
import "./Resgister.scss";

const Register = () => {
  return (
    <div className="register">
      <div className="card">
        
        {/* right side of login page */}
        <section className="left">
          <h1>Resgister</h1>
          <form action="" className="loginfield">
            <input type="text" name="" id="name" placeholder="Your Name" />
            <input type="text" name="" id="text" placeholder="Username" />
            <input type="email" name="" id="email" placeholder="Email" />
            <input
              type="password"
              name=""
              id="password"
              placeholder="password"
            />
            <button>Register</button>
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
