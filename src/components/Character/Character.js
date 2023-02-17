import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import SingleCharacter from './SingleCharacter';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';


function Character({list,setSearchInput}){
  

const useStyles = makeStyles({
    table: {
      width: 1000,
      margin : 50
    },
  });


  const classes = useStyles();
    


    return(
      
        <div className="characterContainer">
          <br/>
      <Box
      sx={{
        width: 500,
        maxWidth: '100%',

      }}
    >
      <TextField fullWidth label="Char Search" id="fullWidth" className="input"
        type="text"
        placeholder="search"
        onChange={(event)=>setSearchInput(event.target.value)} />
    </Box>
              <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="right">id</TableCell>
            <TableCell align="right">name</TableCell>
            <TableCell align="right">serverName</TableCell>
            <TableCell align="right">isinAcademy</TableCell>
            <TableCell align="right">Account</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
              {list.map(char => (
                <TableRow key={char.id}>
                    <TableCell align="right">{char.id}
                    <SingleCharacter char={char}></SingleCharacter>
                    </TableCell>
                    <TableCell align="right">{char.name}</TableCell>
                    <TableCell align="right">{char.serverName}</TableCell>
                    <TableCell align="right">{char.isinAcademy}</TableCell>
                    <TableCell align="right">{char.account}</TableCell>
                    </TableRow>
                ))}
        </TableBody>
      </Table>
    </TableContainer>
        
        </div>
    )
}
export default Character;