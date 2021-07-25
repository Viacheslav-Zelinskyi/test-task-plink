import "./App.css";
import { Switch, Route, useLocation } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import Products from "./pages/products";
import User from "./pages/user";
import Order from "./pages/order";

function App() {
  let location = useLocation();

  return (
    <TransitionGroup>
      <CSSTransition timeout={300} classNames="fade" key={location.key}>
        <Switch location={location}>
          <Route path="/user">
            <div className="blockContainer">
              <User></User>
            </div>
          </Route>
          <Route path="/order">
            <div className="blockContainer">
              <Order></Order>
            </div>
          </Route>
          <Route path="/">
            <div className="blockContainer">
              <Products></Products>
            </div>
          </Route>
        </Switch>
      </CSSTransition>
    </TransitionGroup>
  );
}

export default App;
