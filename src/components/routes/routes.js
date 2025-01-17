import { Route, Routes } from "react-router";
import Home from "../home/home";
import Contact from "../contact/contact"
import About from "../about/about";
import { ReduxToolkit } from "../posts/reduxtoolkit/redux-toolkit";
export const RoutesComponent = () => {
    return <Routes>
        <Route index element={<Home />} />
        <Route path="/ggadekar" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/aboutme" element={<About />} />.
        <Route path="/redux-toolkit" element={<ReduxToolkit />} />
    </Routes>
}