import { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import TextEditor from "./TextEditor"
import LandingPage from "./LandingPage";
import FiveDimensions from "./FiveDimensions";

function App() {
  const [count, setCount] = useState(0);
  const [user, setUser] = useState(null);


  useEffect(() => {
    // auto-login
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);

  if (!user) return <LandingPage setUser = {setUser}/>;

  return (
    <Switch>
          <Route path="/">
            <h1>Page Count: {count}</h1>
            <FiveDimensions />
            {/* <TextEditor /> */}
          </Route>
        </Switch>

  );
}

export default App;