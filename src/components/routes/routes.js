import { Route, Routes } from "react-router";
import Home from "../home/home";
import Contact from "../contact/contact"
import About from "../about/about";
import { ReduxToolkit } from "../posts/reduxtoolkit/redux-toolkit";
import { JavascriptLatestFeatures } from "../posts/javascript/LatestFeatures/javascript-latest-features";
import { ReactVersionFeatures } from "../posts/reactversionfeatures/reactversionfeatures";
import SignUp from "../account/signup/signup";
import Logout from "../account/signup/logout";
export const RoutesComponent = () => {
    return <Routes>
        <Route index element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/ggadekar" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/aboutme" element={<About />} />.
        <Route path="/redux-toolkit" element={<ReduxToolkit />} />
        <Route path="/javascript-latest-features" element={<JavascriptLatestFeatures />} />
        <Route path="/react-version-features" element={<ReactVersionFeatures />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/logout" element={<Logout />} />
    </Routes>
}