import "./home.css";
import { NavLink } from "react-router";
const Home = () => {
  return (
    <div className="Home">
      <div className="row">
        <div className="column1">
          <NavLink
            to="redux-toolkit"
          >
            Learn react redux - toolkit
          </NavLink>
        </div>
        <div className="column2">

        </div>
      </div>
    </div>
  );
};

export default Home;
