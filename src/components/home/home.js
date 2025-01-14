import "./home.css";
import { NavLink } from "react-router";
import CVImage from '../images/resume.jpg'
const Home = () => {
  return (
    <div className="Home">
      <div className="container">
        <div>
          <div className="card">
            <img src={CVImage} alt="Avatar" className="card-img" />
            <div className="card-container">
              <h4> <a href="https://mycv.pics/" rel="noreferrer" target="_blank"> View online cv</a> </h4>
              <p>Are you looking to establish a strong online presence? Look no further! Our expert team specializes in creating stunning, user-friendly cv tailored to your unique needs. Whether you're an individual looking to showcase your portfolio, we have the perfect solution for you.</p>
            </div>
          </div>
        </div>
        <div>
          <div className="card">
            <div className="card-container">
              <h4>REACT REDUX TOOLKIT </h4>
              <p>
                <NavLink
                  to="redux-toolkit"
                >
                  Learn react redux - toolkit
                </NavLink>
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Home;
