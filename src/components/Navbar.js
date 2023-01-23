import { Link } from "react-router-dom";
const Navbar = ({ setIsLoggedIn }) => {
  const handleLogOut = () => {
    setIsLoggedIn(false);
    localStorage.setItem("isLoggedIn", "no");
  };

  return (
    <nav>
      <Link to="/tasks" className="NavLink">
        Tasks
      </Link>
      <Link to="/profile" className="NavLink">
        Profile
      </Link>
      <button onClick={handleLogOut}>Logout</button>
    </nav>
  );
};

export default Navbar;
