import "./App.css";
import Layout from "./components/layout/layout";
import { RoutesComponent } from "./components/routes/routes";
import axios from "axios";
import { useEffect } from "react";
function App() {
  useEffect(() => {
  //   const path = 'https://gtechblog.com/gblogsapi/visit';
  //   axios.get(path).then(
  //     (response) => {
  //         var result = response.data;
  //         console.log(result);
  //     },
  //     (error) => {
  //         console.log(error);
  //     }
  // );
}, []);
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
