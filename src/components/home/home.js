import "./home.css";
import { NavLink } from "react-router";
import CVImage from '../images/resume.jpg'
const Home = () => {
  return (
    <div className="Home">
      <div className="container">
        <div>
          <div className="card">
            {/* <img src={CVImage} alt="Avatar" className="card-img" /> */}
            <div className="DivUpperBorder">
              Online Resume
            </div>
            <div className="card-container">
              <h4> <a href="https://mycv.pics/" className="linkCss" rel="noreferrer" target="_blank"> View online cv</a> </h4>
              <p>Are you looking to establish a strong online presence? Look no further! Our expert team specializes in creating stunning, user-friendly cv tailored to your unique needs. Whether you're an individual looking to showcase your portfolio, we have the perfect solution for you.</p>
            </div>
          </div>
        </div>
        <div>
          <div className="card">
            <div className="DivUpperBorder">
              Reduxt Toolkit
            </div>
            <div className="card-container">
              <h4>  <NavLink className="linkCss"
                to="redux-toolkit"
              >
                Redux Toolkit
              </NavLink> </h4>
              <p>
                Redux toolkit is used to manage redux store operation.
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Home;
