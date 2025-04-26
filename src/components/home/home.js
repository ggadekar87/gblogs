import "./home.css";
import { data, NavLink } from "react-router";
import Card from "../ui/card/card";
// import { useGeolocated } from "react-geolocated";

const Home = () => {
  let card1 = {
    name: "Online Resume",
    data: "Are you looking to establish a strong online presence? Look no further! Our expert team specializes in creating stunning, user-friendly cv tailored to your unique needs. Whether you're an individual looking to showcase your portfolio, we have the perfect solution for you.",
    link: "https://mycv.pics/",
    linkTitle: "click to view online cv",
    linkName: "View Demo CV"
  }
  let card2 = {
    name: "Reduxt Toolkit",
    data: `The <strong>Redux Toolkit</strong> package is intended to be the standard way to write Redux logic. <p> Redux toolkit support react v 19</p>`,
    link: "",
    isNavLink: true,
    linkTitle: "click to view redux toolkit",
    linkName: "Redux Toolkit",
    to: "redux-toolkit"
  }
  let card3 = {
    name: "Javascript",
    data: `<p>Latest features added in javascript till 2024</p>`,
    link: "",
    isNavLink: true,
    linkTitle: "click to view Javascript Latest Features",
    linkName: "Javascript Latest Features",
    to: "javascript-latest-features"
  }

  let card4 = {
    name:"ReactJs",
    data:`<strong>ReactJs Version Features</strong> : React version history and added new features <p> It coverse react v15, v16, v17, v18, v19</p>`,
    link:"",
    isNavLink:true,
    linkTitle:"click to view ReactJs Version Features",
    linkName:"ReactJs Version Features",
    to:"react-version-features"
  }

  // const { coords, isGeolocationAvailable, isGeolocationEnabled } =
  // useGeolocated({
  //     positionOptions: {
  //         enableHighAccuracy: false,
  //     },
  //     userDecisionTimeout: 5000,
  // });


  return (
    <div className="Home">
      <div className="container">
        <div>
          <Card {...card1}></Card>
        </div>
        <div>
          <Card {...card2}></Card>
        </div>
        <div>
          <Card {...card3}></Card>
        </div>
        <div>
        <Card {...card4}></Card>
        </div>

{/* {!isGeolocationAvailable ? (
        <div>Your browser does not support Geolocation</div>
    ) : !isGeolocationEnabled ? (
        <div>Geolocation is not enabled</div>
    ) : coords ? (
        <table>
            <tbody>
                <tr>
                    <td>latitude</td>
                    <td>{coords.latitude}</td>
                </tr>
                <tr>
                    <td>longitude</td>
                    <td>{coords.longitude}</td>
                </tr>
                <tr>
                    <td>altitude</td>
                    <td>{coords.altitude}</td>
                </tr>
                <tr>
                    <td>heading</td>
                    <td>{coords. heading}</td>
                </tr>
                <tr>
                    <td>speed</td>
                    <td>{coords.speed}</td>
                </tr>
            </tbody>
        </table>
    ) : (
        <div>Getting the location data&hellip; </div>
    )
  } */}

      </div>
    </div>
  );
};

export default Home;
