import * as React from "react";
import Home from "./Home";
import UserDetails from "./UserDetails";

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';



const App: React.FC = (): React.ReactElement => {
  return (
     <Router>
       <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/user/:login" component={UserDetails} />
               
        </Switch>
     </Router>
  );
};

export default App;
