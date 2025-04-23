import "./home.css";
import { data, NavLink } from "react-router";
import Card from "../ui/card/card";
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
    name: "Javascript Latest Features",
    data: `<p>Latest features added in javascript till 2024</p>`,
    link: "",
    isNavLink: true,
    linkTitle: "click to view Javascript Latest Features",
    linkName: "Javascript Latest Features",
    to: "javascript-latest-features"
  }
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
      </div>
    </div>
  );
};

export default Home;
