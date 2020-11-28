import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home, Philosophy, Contact, Join, Legal } from "./pages/exports";
import { ToastContainer } from "react-toastify";
import "./styles/app.css";
import "./styles/custom.css";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      ></ToastContainer>
      <Router>
        <Switch>
          <Route exact path="/legal" component={Legal} />
          <Route exact path="/join" component={Join} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/philosophy" component={Philosophy} />
          <Route exact path="/" component={Home} />
          <Route path="*">404 - Requested URL not found</Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
