import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableContainer,
  TablePagination,
  TableRow,
  TextField,
  Button
} from '@material-ui/core/';

const useStyles = makeStyles({
  root: {
    width: '100%',
  },
  container: {
    maxHeight: 440,
  },
  separate: {
    margin: '10px'
  }
});

export default function User() {
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const inicialDataUser = {
    'name': '',
    'email': ''
  } 

  const [rows, setRows] = useState([]);
  const [userData, setUserData] = React.useState(inicialDataUser);

  const getUsers = () => {
    axios.get(`${process.env.REACT_APP_API}/users`)
      .then(function (response) {
        setRows(response.data)
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  useEffect(() => {
    getUsers() 
  }, [])


  function handleChange(evt) {
    const value = evt.target.value
    setUserData({
      ...userData, 
      [evt.target.name]: value
    }, [])
  }

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const sendData = (event) => {
    event.preventDefault();
    axios.post(`${process.env.REACT_APP_API}/users`, userData)
      .then(function (response) {
        getUsers()
        setUserData(inicialDataUser)
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  return ( 
    <>
      <h2>Add user</h2>
      <form onSubmit={sendData} className={classes.root} noValidate autoComplete='off'>
        <TextField className={classes.separate} label='Name' 
          value={userData.name} onChange={handleChange}
          name='name'
        />
        <TextField className={classes.separate} label='Email' 
          value={userData.email} onChange={handleChange}
          name='email'
        />
        <Button className={classes.separate} 
          variant='contained' color='primary'
          type='submit' value='submit'
        >
          Primary
        </Button>
      </form>
      <hr className={classes.separate}/>
      <Paper className={classes.root}>
        <TableContainer className={classes.container}>
          <Table stickyHeader aria-label='sticky table'>
            <TableHead>
              <TableRow>
                <TableCell> Name </TableCell>
                <TableCell> Email</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.slice(page * rowsPerPage,
                page * rowsPerPage + rowsPerPage).map((row) => {     
                  return ( 
                    <TableRow hover role='checkbox' tabIndex={-1} key={row.id}>
                      <TableCell > { row.name  }</TableCell>
                      <TableCell > { row.email } </TableCell> 
                    </TableRow> 
                  ); 
                })}  
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[10, 25, 100]}
          component='div'
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
        />
      </Paper>
    </>
  )
}
