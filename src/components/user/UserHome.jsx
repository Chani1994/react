import { Button, Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material';
// import ButtonGroup from '@mui/material/ButtonGroup';
import React, { useState } from 'react';

// import { Link, Outlet } from 'react-router-dom';
import BusinessData from '../businessData/BusinessData'
import ServiceList from '../services/ServiceList'
import AddMeeting from '../meetings/AddMeeting';


function UserHome() {
  const [open, setOpen] = useState(false);
     const handleOpenModal = () => {
       setOpen(true); };
   
     const handleCloseModal = () => {
       setOpen(false) };
  
  return (
    <>
      <BusinessData/>
    <h1>User Home</h1>
    
    
    <ServiceList></ServiceList>
    <br/>
    <br/>
     {/* <ButtonGroup size="large" aria-label="large button group">  */}
     
      {/* <Button variant="outlined">
        <Link to="/user/services">Services</Link>
      </Button> */}

       {/* <Button variant="outlined">
        <Link to="/user/meetings">Add Meeting</Link> */}
      {/* </Button> */}
    {/* </ButtonGroup>  */}
  
    {/* <Outlet />  */}
    {/* <Button variant="outlined">Add Meeting</Button> */}
     <Button variant="contained" onClick={handleOpenModal}>Add Meeting</Button>
            {/* <Fab color="primary" aria-label="add">
        <AddIcon onClick={handleOpenModal}/>
      </Fab> */}
          <Dialog open={open} onClose={handleCloseModal}>
            <DialogTitle>Add Meeting</DialogTitle>
            <DialogContent>
             <AddMeeting handleAddMeeting={() => setOpen(false)}  />  
             {/* <AddMeeting/> */}
            </DialogContent>
            <DialogActions>
              <Button variant="outlined" onClick={handleCloseModal}>Close</Button>
              {/* <Button variant="outlined" onClick={() => setOpen(false)}>Save</Button> */}

            </DialogActions>
          </Dialog>


  </> 
    
  )
}

export default UserHome