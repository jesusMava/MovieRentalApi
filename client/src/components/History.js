import React, { useState, useEffect } from 'react';
import axios from 'axios'
import {
  makeStyles,
  Box,
  Collapse,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  Button,
  TableRow,
  Typography,
  Paper,
} from '@material-ui/core/';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';

const useRowStyles = makeStyles({
  root: {
    '& > *': {
      borderBottom: 'unset',
    },
  },
});
function UsersRows(props) {
  const { row } = props;
  const [open, setOpen] = useState(false);
  const [historyMovie, setHistoryMovie] = useState([{'name': '', 'status': false}])
  const classes = useRowStyles();

  const getMovies = (userId) => {
    axios.post(`${process.env.REACT_APP_API}/get_history`,
      { 
        'history': {
          'user_id': userId
        }
      }).then(response => {
        setHistoryMovie(response.data)
      })
    setOpen(!open)
  }

  const changeValue = (movieId) => {
    axios.post(`${process.env.REACT_APP_API}/change_value`,
      { 
        'movie': {
          'movie_id': movieId
        }
      }).then(response => {
        console.log('oki doki')
      })
  }

  const HistoryRow = (props) => {
    return (
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0  }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box margin={1}>
              <Typography variant="h6" gutterBottom component="div">
                History
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell>Movie</TableCell>
                    <TableCell>Status</TableCell>
                    <TableCell>Change</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {historyMovie.map((movie, ind )=> {
                    return(
                      <TableRow key={movie.id}>
                        <TableCell>{movie.name}</TableCell>
                        <TableCell>
                          { movie.status ? 'Disponible': 'Rented'}
                        </TableCell>
                        <TableCell>
                          <Button color="primary" variant="contained"
                            disabled={movie.status ? false : true}
                            onClick={()=> changeValue(movie.id)}
                          >
                            Change status
                          </Button>
                        </TableCell>
                      </TableRow>
                    )
                  })}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    )
  }

  return (
    <>
      <TableRow key={row.id} className={classes.root}>
        <TableCell>
          <IconButton aria-label="expand row" size="small" 
            onClick={() =>  getMovies(row.id)}>
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell align="center" component="th" scope="row"> 
          { row.name }
        </TableCell>
        <TableCell align="center">{ row.email}</TableCell>
      </TableRow>
      {open ? HistoryRow(row.id): <TableRow></TableRow>}
    </>
  );
}

export default function CollapsibleTable() {
  const [rows, setRows] = useState([]);

  const getData = () => {
    axios.get(`${process.env.REACT_APP_API}/history`)
      .then(function (response) {
        setRows(response.data)
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  useEffect(() => {
    getData();
  },[])
  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell align='center'>User Name</TableCell>
            <TableCell align="center">Email</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <UsersRows key={row.id} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
