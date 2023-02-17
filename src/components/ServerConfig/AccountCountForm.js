import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Button } from '@material-ui/core';


export default function AccountCountForm(props) {
  const [age, setAge] = React.useState('');
  const array = Array(101).fill(0).map((n, i) => n + i)
  const{id}=props;
  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const changeCharCount = (props) => {
    fetch(`/configs/${id}`,
    {
      method:"PUT",
      headers:{
        "Content-Type":"application/json",
      },
      body: JSON.stringify({
        accountLimit:age,
      })
      ,
    })
    .then(res => res.json())
    .catch(err=>console.log("err"))
  }
  return (
    
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">CharCount</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="CharCount"
          onChange={handleChange}
        >
          
        {array.map(index=>(
            <MenuItem key={index} value={index}>{index} 
            </MenuItem>
        ))}
        </Select>
        <Button variant='contained'
        onClick={changeCharCount} >
            UPDATE
        </Button>
      </FormControl>
    </Box>
  );
}