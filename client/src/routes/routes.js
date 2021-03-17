import {
  Switch,
  Route,
} from 'react-router-dom';
import User from '../components/User'

const Routes = () => {
  return (
    <Switch>
      <Route path='/movies/:id' />
      <Route path='/movies' />
      <Route path='/users/:id' />
      <Route path='/users' component={User} />
      <Route path='/history' />
      <Route exact path='/' />
    </Switch>
    )
}

export default Routes
