import "./header.css"
import NavigationItem from "./navigationItem/navigationItem";
import HomeIcon from '@mui/icons-material/Home';
import LockPersonSharpIcon from '@mui/icons-material/LockPersonSharp';
import { RootState } from '../store/store.ts'
import { useSelector, useDispatch } from 'react-redux'
import { userLogin, userLogOut } from '../store/reducers/authSlice'
import LockOpenSharpIcon from '@mui/icons-material/LockOpenSharp';
import { loginUser } from "../store/actions/actions.ts";
import { persistor } from '../store/store.ts'

const Header = () => {

  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated)
  const dispatch = useDispatch()

  const openNav = () => {
    document.getElementById("myNav").style.width = "70%";
  }

  const closeNav = () => {
    document.getElementById("myNav").style.width = "0%";
  }

  const handleLogin = () => {
  }
  const handleLogOut = () => {
    dispatch(userLogOut());
    persistor.purge().then(() => {
      console.log('Persisted state has been cleared.');
    });
  }
  let menu = (
    <ul>
      <NavigationItem link="/" close={closeNav} exact>
        <HomeIcon color="primary" />
      </NavigationItem>
      <NavigationItem link="/aboutme" close={closeNav}>About me</NavigationItem>
      <NavigationItem link="/contact" close={closeNav}>Contact</NavigationItem>
      {isAuthenticated ? <NavigationItem link="/admin" close={closeNav}>Admin</NavigationItem> : ""}
    </ul>
  );

  return (
    <header className="Toolbar">
      {!isAuthenticated ?
        <LockPersonSharpIcon onClick={handleLogin} titleAccess="login" className="Login"></LockPersonSharpIcon>
        : <LockOpenSharpIcon onClick={handleLogOut} titleAccess="logout" className="Login"></LockOpenSharpIcon>
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
