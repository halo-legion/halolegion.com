import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home, Philosophy, Contact, Join } from './pages/exports';
import './styles/app.css';
import './styles/custom.css';

function App() {
  return (
    <Router>
          <Switch>
            <Route exact path="/join" component={Join} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/philosophy" component={Philosophy} />
            <Route exact path="/" component={Home} />
            <Route path="*">404 - Requested URL not found</Route>
          </Switch>
    </Router>
  );
}

export default App;
