import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./routes/Home";
import RestaurantDetailPage from "./routes/RestaurantDetailPage";
import UpdatePage from "./routes/UpdatePage";

const App = () => {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/restaurants/:id/update" component={UpdatePage} />
          <Route path="/restaurants/:id" component={RestaurantDetailPage} />
          <Route exact path="/" component={Home} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
