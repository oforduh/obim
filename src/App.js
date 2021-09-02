import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { ScrollProvider } from "./context/scroll";

import Home from "./pages/home";

// import styles from "./styles/app.module.scss";

function App() {
  return (
    <Router>
      <Switch>
        <ScrollProvider>
          <Route path="/" exact component={Home} />
        </ScrollProvider>
      </Switch>
    </Router>
  );
}

export default App;
