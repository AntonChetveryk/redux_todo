import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import TodoList from "./TodoList/TodoList";
import Info from "./Info";
import Layout from "./Layout";

function App() {
  return (
    <Router>
      <Switch>
        <Layout>
          <Route exact path="/" component={TodoList} />
          <Route path="/info" component={Info} />
        </Layout>
      </Switch>
    </Router>
  );
}

export default App;
