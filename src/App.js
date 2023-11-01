import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
// import About from "./components/About";
import TextForm from "./components/TextForm";
import { BrowserRouter as Route, Switch } from "react-router-dom";
function App() {
  return (
    <>
      {/* <Route> */}
      <Navbar title="Textutils" abouttext="About"></Navbar>
      <div className="container my-3">
        {/* <Switch>
            <Route path="/about">
              <About />
            </Route> */}

        {/* <Route exact path="/"> */}
        {<TextForm heading="Enter The Text To Analyze Below"></TextForm>}
        {/* </Route> */}
        {/* </Switch> */}
      </div>
      {/* </Route> */}
    </>
  );
}

export default App;
