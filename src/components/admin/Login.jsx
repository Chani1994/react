import { observer } from "mobx-react"
import { Button, TextField } from '@mui/material';
import React from 'react';
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import InputAdornment from '@mui/material/InputAdornment';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import { useState } from 'react'
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import AccountCircle from '@mui/icons-material/AccountCircle';
import { CheckLogin } from "../../store/serverLogin.js"



const Login = (observer(() =>{
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = React.useState(false);

    
    const handleLogin = () => {
      CheckLogin(name, password);
      setName('');
      setPassword('');
    }
    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const handleMouseDownPassword = (event) => {
      event.preventDefault();
    };
  return (
    <>
    
    <TextField margin="normal"  fullWidth noValidate sx={{ mt: 1 }} type='text' value={name} onChange={(e) => setName(e.target.value)}
        id="input-with-icon-textfield"
        label="  Name"
        InputProps={{
          endAdornment: (
            <InputAdornment position="start" >
              <AccountCircle />
            </InputAdornment>
          ),
        }}
        variant="standard"
      />
      <br/>
     <FormControl margin="normal" fullWidth noValidate sx={{ mt: 1 }} value={password} onChange={(e) => setPassword(e.target.value)} variant="standard" >
          <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
          <Input
            id="standard-adornment-password"
            type={showPassword ? 'text' : 'password'}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>
    {/* <label>name:
                <input type='text' value={name} onChange={(e) => setName(e.target.value)} />
            </label>
            <br />
            <label>password:
                <input type='password' value={password} onChange={(e) => setPassword(e.target.value)} />
            </label> */}
             <br /> 
            <Button fullWidth variant="contained"  sx={{ mt: 3, mb: 2 }} onClick={handleLogin}>Sign In</Button>


    </>
  )
}))

export default Login