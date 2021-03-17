import {
  Switch,
  Route,
} from 'react-router-dom';

import User from '../components/User'
import Movies from '../components/Movies'

const Routes = () => {
  return (
    <Switch>
      <Route path='/movies' component={Movies} />
      <Route path='/users' component={User} />
      <Route path='/history' />
      <Route exact path='/' />
    </Switch>
    )
}

export default Routes
