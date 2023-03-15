import { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import TextEditor from './TextEditor';

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    fetch("/hello")
      .then((r) => r.json())
      .then((data) => setCount(data.count));
  }, []);

  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route path="/testing">
            <h1>Test Route</h1>
          </Route>
          <Route path="/">
            <h1>Page Count: {count}</h1>
            <TextEditor />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;