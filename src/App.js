import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SignUp from './Component/SignUp/signup';
import SignIn from './Component/SignIn/signin';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/signup" component={SignUp} />
          <Route path="/signin" component={SignIn} />
          {/* Add other routes for different pages as needed */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
