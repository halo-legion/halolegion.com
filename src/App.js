import React, { Suspense } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {
  Home,
  Philosophy,
  Contact,
  Join,
  Legal,
  Dashboard,
} from "./pages/exports";
import { ToastContainer } from "react-toastify";
import "./styles/app.css";
import "./styles/custom.css";
import Loading from './components/Loading/Loading';
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
        <Suspense fallback={<Loading />}>
          <Switch>
            <Route exact path="/legal" component={Legal} />
            <Route exact path="/dashboard" component={Dashboard} />
            <Route exact path="/join" component={Join} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/philosophy" component={Philosophy} />
            <Route exact path="/" component={Home} />
            <Route path="*">404 - Requested URL not found</Route>
          </Switch>
        </Suspense>
      </Router>
    </>
  );
}

export default App;
