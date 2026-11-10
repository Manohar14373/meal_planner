import { Link, NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Navbar() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const handleLogout = () => { logout(); navigate("/login"); };

  return (
    <header className="nav">
      <Link to="/" className="brand">🥗 PrepWell</Link>
      <nav>
        {user ? (
          <>
            <NavLink to="/dashboard" className="nav-link">Home</NavLink>
            <NavLink to="/bmi" className="nav-link">BMI and goals</NavLink>
            <span className="nav-user">Hi, {user.name.split(" ")[0]}</span>
            <button className="btn btn-ghost" onClick={handleLogout}>Log out</button>
          </>
        ) : (
          <>
            <Link to="/login" className="nav-link">Log in</Link>
            <Link to="/signup" className="btn">Sign up</Link>
          </>
        )}
      </nav>
    </header>
  );
}
