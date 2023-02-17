import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import ServerConfigPost from './ServerConfigPost';
import ServerConfigDelete from './ServerConfigDelete';
import AccountCountForm from './AccountCountForm';
import AccountModeUpdate from './AccountModeUpdate';





const useStyles = makeStyles({
    table: {
      width: 1000,
      margin : 50
    }
  });

function ServerConfig(props){
  const classes = useStyles();
    return(
        <div className="characterContainer">
          <ServerConfigPost></ServerConfigPost> 
              <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow key={props.list.name}>
            <TableCell align="right">id</TableCell>
            <TableCell align="right">account_limit</TableCell>
            <TableCell align="center">bot_path</TableCell>
            <TableCell align="right">is_enable</TableCell>
            <TableCell align="right">server_name</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
              {props.list.map(char => (
                <TableRow key={char.id}>
                    <TableCell align="right">{char.id}</TableCell>
                    <TableCell align="right">{char.accountLimit}</TableCell>
                    <TableCell align="right">{char.botPath}</TableCell>
                    <TableCell align="right">{String(char.enable)}</TableCell>
                    <TableCell align="right">{char.serverName}</TableCell>
                    <TableCell align="right"><AccountCountForm  id={char.id} ></AccountCountForm></TableCell>
                    <TableCell align="right"><AccountModeUpdate id={char.id} ></AccountModeUpdate></TableCell>
                    <TableCell align="right"><ServerConfigDelete id={char.id} serverName={char.serverName} botPath={char.botPath}></ServerConfigDelete></TableCell>
                    </TableRow>
                ))}
        </TableBody>
      </Table>
    </TableContainer>
       
        </div>
    )
}

export default ServerConfig;