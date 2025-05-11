import "./header.css"
import NavigationItem from "./navigationItem/navigationItem";
import LockPersonSharpIcon from '@mui/icons-material/LockPersonSharp';
import { useSelector, useDispatch } from 'react-redux'
import { userLogOut } from '../store/reducers/authSlice'
import LockOpenSharpIcon from '@mui/icons-material/LockOpenSharp';
import { persistor } from '../store/store.ts'
import { useNavigate } from "react-router";
import Logout from "../account/signup/logout.js";
const Header = (props) => {
  const navigate = useNavigate();
  const given_name = useSelector((state) => state.auth.given_name)

  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated)
  const userRole = useSelector((state) => state.auth.userRole)
  const dispatch = useDispatch()

  const openNav = () => {
    document.getElementById("myNav").style.width = "70%";
  }

  const closeNav = () => {
    document.getElementById("myNav").style.width = "0%";
  }

  const handleLogin = () => {
    navigate('/signup');
  }
  const handleLogOut = () => {
    dispatch(userLogOut());
    persistor.purge().then(() => {
      console.log('Persisted state has been cleared.');
    });
    navigate('/logout');

  }
  let menu = (
    <ul>
      <NavigationItem link="/" close={closeNav} exact>
        Home
      </NavigationItem>
      <NavigationItem link="/aboutme" close={closeNav}>About Us</NavigationItem>
      <NavigationItem link="/contact" close={closeNav}>Contact</NavigationItem>
      {isAuthenticated && userRole == 'Admin' ? <NavigationItem link="/admin" close={closeNav}>Admin</NavigationItem> : ""}
    </ul>
  );

  return (
    <header className="Toolbar">
      {!isAuthenticated ?
        <LockPersonSharpIcon onClick={handleLogin} titleAccess="login" className="Login"></LockPersonSharpIcon>
        : <div className="Login">Hi {given_name} <LockOpenSharpIcon onClick={handleLogOut} titleAccess="logout" ></LockOpenSharpIcon></div>
      }
      <span className="MobileMenu" onClick={openNav}>&#9776;</span>
      <div id="myNav" className="overlay">
        <a className="closebtn" onClick={closeNav}>&times;</a>
        <div class="overlay-content">
          {menu}
        </div>
      </div>
      <div className="menu">
        {menu}
      </div>
    </header>
  );
};

export default Header;
