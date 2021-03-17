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
  const [value, setValue] = React.useState(0);
  const classes = useStyles();
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Paper className={classes.root}>
      <Tabs
        value={value}
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
