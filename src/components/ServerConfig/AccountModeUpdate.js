import * as React from 'react';
import Switch from '@mui/material/Switch';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';


export default function AccountModeUpdate(props) {
  const [mode,setMode] = React.useState(true);
  const{id}=props;
  const handleChange = (event) => {
    setMode(!event.target.checked);
    updatemode();
  };
  
  const updatemode = async () => {
    fetch(`/updatemode/${id}`,
    {
      method:"PUT",
      headers:{
        "Content-Type":"application/json",
      },
      body: JSON.stringify({
        enable:mode,
      })
      ,
    })
    .then(res => res.json())
    .catch(err=>console.log("err"))
  }
  return (
    <FormGroup>
    <FormControlLabel control={<Switch onChange={handleChange}/>} label="On" />
    </FormGroup>
  );
}