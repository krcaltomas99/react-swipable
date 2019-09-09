import React, { useEffect, useState } from "react";
import "./App.css";
import HomeScreen from "./pages/Homepage";
import AboutScreen from "./pages/Aboutpage";
import ContactScreen from "./pages/ContactScreen";

import { Route, Switch, withRouter } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";

function App(props) {
  const timeout = 400;
  const [depth, setDepth] = useState(getDepth(props.location));
  const currentKey = props.location.pathname.split("/")[1] || "/";

  function getDepth(location) {
    return location.pathname.split("/").filter(n => n !== "").length;
  }

  useEffect(() => {
    console.log(depth);
    setDepth(getDepth(props.location));
  }, [getDepth(props.location)]);

  return (
    <TransitionGroup component="div" className="App">
      <CSSTransition
        key={currentKey}
        timeout={timeout}
        classNames={
          (getDepth(props.location) - depth >= 0 ? "left" : "right") + " swipe"
        }
        mountOnEnter={false}
        unmountOnExit={true}
      >
        <Switch location={props.location}>
          <Route exact path="/" component={HomeScreen} />
          <Route path="/about" component={AboutScreen} />
          <Route path="/contact" component={ContactScreen} />
        </Switch>
      </CSSTransition>
    </TransitionGroup>
  );
}

export default withRouter(App);
