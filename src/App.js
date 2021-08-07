import "./App.css";
import Sidebar from "./components/Sidebar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Apis from "./pages/Apis";
import Reports from "./pages/Reports";
import Home from './pages/Home'
function App() {
  return (
    <Router>
      <Sidebar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/apis" exact component={Apis} />
        <Route path="/reports" exact component={Reports} />

      </Switch>
    </Router>
  );
}

export default App;
