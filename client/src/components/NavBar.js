import React from 'react'
import { 
  makeStyles,
  Paper,
  Tabs,
  Tab
} from '@material-ui/core/';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  }
})
const NavBar = () => {
  const [option, setOption] = React.useState(0);
  const classes = useStyles();
  const handleChange = (event, newValue) => {
    setOption(newValue);
  };

  return (
    <Paper className={classes.root}>
      <Tabs
        value={option}
        onChange={handleChange}
        indicatorColor="primary"
        textColor="primary"
        centered
      >
        <Tab label="Users" />
        <Tab label="Movies" />
        <Tab label="History" />
      </Tabs>
    </Paper>
  ); 
}

export default NavBar
