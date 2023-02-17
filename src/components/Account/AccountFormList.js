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

function AccountFormList(){
  const[sent,setSent]=useState(false);
  const [name,setName] = useState("");
  const [id1,setid1]= useState(0);
  const [id2,setid2]= useState(0);

    const handleSubmit = ()=>{
        saveAccount();
        setSent(true);
        setName("");
        setid1(0);
        setid2(0);
    }

    const handleName = (value) =>{
        setName(value);
    }
    const handleid1 = (value) =>{
        setid1(value);
    }
    const handleid2= (value) =>{
        setid2(value);
    }
    const handleClose = (event, reason) => {
      if (reason === 'clickaway') {
        return;
      }
  
      setSent(false);
    };
    const saveAccount = async() => {
      fetch("/accountslistdeneme",
      {
        method:"POST",
        headers:{
          "Content-Type":"application/json",
        },
        body: JSON.stringify({
          name: name ,
          id1 : id1,
          id2 : id2
        })
        ,
      }).then(res => res.json())
      .catch(err=>console.log("err"))
      
    }
    const classes = useStyles();
    return(
      <div>
      <Snackbar open={sent} autoHideDuration={1200} onClose={handleClose}>
       <Alert onClose={handleClose} severity="success">
         Yaptım grubu süloya babacım devamke
       </Alert>
     </Snackbar>
        <form className={classes.root} noValidate autoComplete="off" >
      <OutlinedInput id="outlined-basic"
      placeholder="name" 
      inputProps={{maxLength:25}}
      value={name}
      onChange={i => handleName(i.target.value)}
      />
      <OutlinedInput id="outlined-basic1"
      placeholder="id1" 
      
      value={id1}
      onChange={i => handleid1(i.target.value)} ></OutlinedInput>
      <OutlinedInput id="outlined-basic2"
      placeholder="id2" 
      
      value={id2}
      onChange={i => handleid2(i.target.value)} ></OutlinedInput>
      <Button variant='contained' 
        onClick={handleSubmit} >
            Add
        </Button>
    </form>   
        </div>
    )
}
export default AccountFormList;