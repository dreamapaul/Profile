import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./Components/homepage";
import FusionX from "./Components/fusionx";
import GetPass from "./Components/getpass";
import Template from "./Components/template";
import MealKit from "./Components/mealkit";
import CiTi from "./Components/citi";

function App() {
  return (
    <div>
      <Router>
        <div className="container">
          <Routes>
            <Route path="/" exact element={<HomePage />}></Route>
            <Route path="/fusionx"exact element={<FusionX/>}></Route>
            <Route path="/getpass"exact element={<GetPass/>}></Route>
            <Route path="/template"exact element={<Template/>}></Route>
            <Route path="/mealkit"exact element={<MealKit/>}></Route>
            <Route path="/citi"exact element={<CiTi/>}></Route>
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
