import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { Button, ButtonGroup, Box } from '@mui/material';
import logo2 from '../images/logo2.png'
function HomePage() {
  return (<>
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        padding: '2rem',
        backgroundColor: ' rgb(15, 10, 89)',
      }}>
      <Box
        component="form"
        sx={{
          display: 'flex',
          flexDirection: 'column',
          p: '2rem',
          boxShadow: '0px 3px 6px rgba(0, 0, 0, 0.16)',
          borderRadius: '8px',
          maxWidth: '400px',
          minWidth: '300px',
          backgroundColor: 'white',
          border: '10px solid rgb(152, 128, 9)',
        }} >
        <Box sx={{ marginBottom: '2rem', display: 'flex', justifyContent: 'center' }}>
          <img src={logo2} alt="Logo" style={{ width: '200px' }} />
        </Box>
        <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
          <h1>Golden Hands</h1>
          <ButtonGroup spacing={2} direction="row">
            <div className='btn'>
            <Button variant="contained"  >
              <Link to="/admin">Admin</Link>
            </Button>
            
            <Button variant="contained">
              <Link to="/user">Users</Link>
            </Button>
            </div>
           
          </ButtonGroup>
        </Box>
        <Outlet />
      </Box>
    </Box>
  </>)
}
export default HomePage
