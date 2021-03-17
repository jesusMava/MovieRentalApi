import React from 'react'
import { 
  makeStyles,
  Paper,
  Tabs,
  Tab
} from '@material-ui/core/';
import { 
  Link,
  useLocation
} from 'react-router-dom';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    marginBottom: '30px',
    backgroundColor: '#bec7d4'
  }
})
const NavBar = () => {
  let { pathname } = useLocation();
  const myPageIndex = {
    '/users': 0,
    '/movies': 1,
    '/history': 2,
    '/': 0
  }
  const [option, setOption] = React.useState(myPageIndex[pathname]);
  const classes = useStyles();
  const handleChange = (event, newValue) => {
    setOption(newValue);
  };

  return (
    <Paper className={classes.root}>
      <Tabs
        value={option}
        onChange={handleChange}
        indicatorColor='primary'
        textColor='primary'
        centered
      >
        <Tab label='Users' component={Link} to='/users'/>
        <Tab label='Movies' component={Link} to='/movies'/>
        <Tab label='History' component={Link} to='/history'/>
      </Tabs>
    </Paper>
  ); 
}

export default NavBar
