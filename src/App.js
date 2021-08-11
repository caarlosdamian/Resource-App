import "./App.css";
import Sidebar from "./components/Sidebar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Apis from "./pages/Apis";
import Reports from "./pages/Reports";
import Home from './pages/Home'
import Animal from "./pages/apiSubmenu/Animal";
function App() {
  return (
    <Router>
      <Sidebar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/apis" exact component={Apis} />
        <Route path="/reports" exact component={Reports} />
        <Route path="/apis/animals" exact component={Animal} />


      </Switch>
    </Router>
  );
}

export default App;
