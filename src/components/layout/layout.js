import Header from "../header/header";
import './layout.css'
const Layout = (props) => {
    return (
        <>
            <div className="layout">
                <div>
                    <Header></Header>
                </div>
                <div>
                    <main className="Content">{props.children}</main>
                </div>
                <footer>
                    India: +91 7709558425, UAE: + 971 561580253, Email: ggadekar87@gmail.com
                </footer>
            </div>
        </>
    );
};

export default Layout;
