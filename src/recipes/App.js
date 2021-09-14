import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Pla from "./pages/Pla";
import tubtim from "./pages/tubtim.webp";
import kapao from "./pages/kapao.webp";

const rootUrl = "/the_odin_project/recipes";

const App = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route path={rootUrl + "/pla"}>
            <Pla />
          </Route>
          <Route path={rootUrl + "/"}>
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;

function Home() {
  return (
    <div className="app-recipes">
      <h1 className="app-recipes-title">Odin Recipes</h1>
      <div className="app-recipes-item">
        <img src={tubtim} alt="Pla Tubtim Neung Manao" />
        <Link to={rootUrl + "/pla"}>Pla Tubtim Neung Manao</Link>
      </div>
      <div className="app-recipes-item">
        <img src={kapao} alt="Pad Kapao" />
        <Link to={rootUrl + "/pla"} className="app-recipes-item-link">
          Pla Tubtim Neung Manao
        </Link>
      </div>
      <Link to={rootUrl + "/pla"} className="app-recipes-item">
        <img src={kapao} alt="Pad Kapao" />
        Pla Tubtim Neung Manao
      </Link>
    </div>
  );
}
