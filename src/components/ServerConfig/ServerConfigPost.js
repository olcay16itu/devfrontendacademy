import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button, OutlinedInput } from '@material-ui/core';
import {useState} from "react";
import MuiAlert from '@material-ui/lab/Alert';
import Snackbar from '@material-ui/core/Snackbar';

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles({
    root: {
      alignItems : "right",
    },
  });

function ServerConfigPost(props){
  
  const[sent,setSent]=useState(false);
  const [ServerName,setServerName] = useState("");
  const[BotPath,setBotPath]=useState("");
    const handleSubmit = ()=>{
        saveConfig();
        setSent(true);
        setServerName("");
        setBotPath("");
    }
    const handleserverName = (value) =>{
        setServerName(value);
        setSent(false);
    }
    const handleBotPath = (value) =>{
        setBotPath(value);
        setSent(false);
    }
    const handleClose = (event, reason) => {
      if (reason === 'clickaway') {
        return;
      }
      setSent(false);
    };
    const saveConfig = () => {
      fetch(`/configs`,
      {
        method:"POST",
        headers:{
          "Content-Type":"application/json",
        },
        body: JSON.stringify({
          serverName:ServerName,
          botPath:BotPath
        })
        ,
      })
      .then(res => res.json())
      .catch(err=>console.log("err"))
    }
    const classes = useStyles();
    return(
      <div>
      <Snackbar open={sent} autoHideDuration={1200} onClose={handleClose}>
       <Alert onClose={handleClose} severity="success">
         Eklendi
       </Alert>
     </Snackbar>
        <form className={classes.root} noValidate autoComplete="off" >
            <h1>Config Ekle</h1>
      <OutlinedInput id="outlined-basic"
      placeholder="serverName" 
      inputProps={{maxLength:50}}
      value={ServerName}
      onChange={i => handleserverName(i.target.value)}></OutlinedInput>
      <br></br>
      <OutlinedInput id="outlined-basic1"
      placeholder="BotPath" 
      inputProps={{maxLength:100}}
      value={BotPath}
      onChange={i => handleBotPath(i.target.value)}></OutlinedInput>
        <br></br>
        <Button variant='contained'
        
        onClick={handleSubmit} >
            Add
        </Button>
        
    </form>   
        </div>
    )
}
export default ServerConfigPost;