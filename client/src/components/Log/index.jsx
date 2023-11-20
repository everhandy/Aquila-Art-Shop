import { Link } from "react-router-dom";

function Log() {
  return (
    <div>
      <ul className="">
        <li>
          <Link to="/login" className="loginbtn rounded">
            Login
          </Link>
        </li>
        <li>
          <Link to="/signup" className="loginbtn rounded">
            Signup
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Log;
