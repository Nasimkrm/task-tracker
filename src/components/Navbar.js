import { Link } from "react-router-dom";
import { auth } from "../firebase";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const handleLogOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        console.log("error", error);
      });
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
