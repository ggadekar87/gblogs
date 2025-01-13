import "./App.css";
import Layout from "./components/layout/layout";
import { RoutesComponent } from "./components/routes/routes";
function App() {
  let routes = (
    <RoutesComponent />
  );
  return (
    <div className="App">
      <Layout> {routes} </Layout>
    </div>
  );
}

export default App;
