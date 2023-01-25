import { Link } from "react-router-dom";
import { authActions } from "../redux/authSlice";
import { useDispatch } from "react-redux";
const Navbar = ({ setIsLoggedIn }) => {
  const dispatch = useDispatch();
  const handleLogOut = () => {
    // setIsLoggedIn(false);
    dispatch(authActions.logout());
    // localStorage.setItem("isLoggedIn", "no");
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
