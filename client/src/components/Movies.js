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

export default function Movies() {
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const inicialDataMovie = {
    'name': '',
    'director': '',
    'category': '',
    'release_date': ''
  } 

  const [rows, setRows] = useState([]);
  const [movieData, setMovieData] = React.useState(inicialDataMovie);

  const getMovies = () => {
    axios.get(`${process.env.REACT_APP_API}/movies`)
      .then(function (response) {
        setRows(response.data)
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  useEffect(() => {
    getMovies() 
  }, [])


  function handleChange(evt) {
    const value = evt.target.value
    setMovieData({
      ...movieData, 
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
    axios.post(`${process.env.REACT_APP_API}/movies`, movieData)
      .then(function (response) {
        getMovies()
        setMovieData(inicialDataMovie)
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  return ( 
    <>
      <h2>Add Movie</h2>
      <form onSubmit={sendData} className={classes.root} noValidate autoComplete='off'>
        <TextField className={classes.separate} label='Name' 
          value={movieData.name} onChange={handleChange}
          name='name'
        />
        <TextField className={classes.separate} label='Director' 
          value={movieData.director} onChange={handleChange}
          name='director'
        />
        <TextField className={classes.separate} label='Category' 
          value={movieData.category} onChange={handleChange}
          name='category'
        />
        <TextField className={classes.separate} label='Release date' 
          value={movieData.release_date} onChange={handleChange}
          name='release_date' type='date'
        />
        <Button className={classes.separate} 
          variant='contained' color='primary'
          type='submit' value='submit'
        >
          Send
        </Button>
      </form>
      <hr className={classes.separate}/>
      <Paper className={classes.root}>
        <TableContainer className={classes.container}>
          <Table stickyHeader aria-label='sticky table'>
            <TableHead>
              <TableRow>
                <TableCell> Name </TableCell>
                <TableCell> Director </TableCell>
                <TableCell> Category </TableCell>
                <TableCell> Release Date </TableCell>
                <TableCell> Status </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.slice(page * rowsPerPage,
                page * rowsPerPage + rowsPerPage).map((row) => {     
                  return ( 
                    <TableRow hover role='checkbox' tabIndex={-1} key={row.id}>
                      <TableCell > { row.name  }</TableCell>
                      <TableCell > { row.email } </TableCell> 
                      <TableCell > { row.category } </TableCell> 
                      <TableCell > { row.release_date } </TableCell> 
                      <TableCell > 
                        { row.status ? 'Disponible': 'No Disponible'}
                      </TableCell> 
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
