import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button, InputAdornment, OutlinedInput } from '@material-ui/core';
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

function AccountForm(props){
  const[sent,setSent]=useState(false);
  const [name,setName] = useState("");
    const handleSubmit = ()=>{
        saveAccount();
        setSent(true);
        setName("");
    }
    const handleName = (value) =>{
        setName(value);
        setSent(false);
    }
    const handleClose = (event, reason) => {
      if (reason === 'clickaway') {
        return;
      }
  
      setSent(false);
    };
    const saveAccount = async() => {
      fetch("/accounts",
      {
        method:"POST",
        headers:{
          "Content-Type":"application/json",
        },
        body: JSON.stringify({
          name:name
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
      <OutlinedInput id="outlined-basic"
      placeholder="name" 
      inputProps={{maxLength:25}}
      value={name}
      onChange={i => handleName(i.target.value)} 
      endAdornment={
      <InputAdornment position='end'>
        <Button variant='contained' 
        onClick={handleSubmit} >
            Add
        </Button>
      </InputAdornment>
      }  />
    </form>   
        </div>
    )
}
export default AccountForm;