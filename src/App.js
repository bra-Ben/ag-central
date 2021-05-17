import { Switch, Route } from 'react-router-dom'
import React from 'react'
import Landing from './pages/landing/Landing'
import Login from './pages/login/login'
import Signup from './pages/signup/signup'
import Maindash from './pages/dashboard/Maindash'


function App() {
  return (

    <div className="App">
    
      <Switch>

        <Route exact path='/' component={Landing} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/signup' component={Signup} />
        <Route exact path='/Maindash' component={Maindash} />

      </Switch>


    </div>
  );
}

export default App;
