import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button, InputAdornment } from '@material-ui/core';
import {useState} from "react";
import MuiAlert from '@material-ui/lab/Alert';
import Snackbar from '@material-ui/core/Snackbar';
import DeleteIcon from '@mui/icons-material/Delete';
function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles({
    root: {
      alignItems : "right",
    },
  });

function ServerConfigDelete(props){
  const{id}=props;
  const[sent,setSent]=useState(false);
    const handleSubmit = ()=>{
        deleteAccount();
        setSent(true);
    }
    const handleClose = (event, reason) => {
      if (reason === 'clickaway') {
        return;
      }
      setSent(false);
    };
    const deleteAccount = async () => {
      fetch(`/configs/${id}`,
      {
        method:"DELETE",
        headers:{
          "Content-Type":"application/json",
        },
      })
      .catch(err=>console.log("err"))
    }
    const classes = useStyles();
    return(
      <div>
      <Snackbar open={sent} autoHideDuration={1200} onClose={handleClose}>
       <Alert onClose={handleClose} severity="success">
         Silindi
       </Alert>
     </Snackbar>
        <form className={classes.root} noValidate autoComplete="off">
      <InputAdornment position="end">
        <Button variant="outlined" 
        startIcon={<DeleteIcon />} 
        onClick={handleSubmit} >
            DELETE
        </Button>
      </InputAdornment>
      
    </form>   
        </div>
    )
}
export default ServerConfigDelete;