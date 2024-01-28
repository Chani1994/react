 import { observer } from 'mobx-react';
 import { Button, Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material';

import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';

import React, { useEffect, useState } from 'react';
import Service from './Service.jsx';
import AddService from './AddService.jsx';
import { getServices } from '../../store/server.js';
import store from '../../store/store.js';
const ServiceList = (observer(() => {
    // const services = store.services;
    useEffect(() => {
      if (!store.services.length > 0)
             getServices()
    }, [])
  
    const [open, setOpen] = useState(false);
    const handleOpenModal = () => {
      setOpen(true);
    };
  
    const handleCloseModal = () => {
      setOpen(false);
      
    };
    

    return (
        <>
        <h3>Services</h3>
        <div>
        {store.services.map((_, index) => (
          <Service key={index} index={index} />
        ))}
      </div>
{/* <Button onClick={handleOpenModal}>Add Service</Button> */}
<br/>
{store.isLogin && (
  <>
    <Fab color="primary" aria-label="add">
        <AddIcon onClick={handleOpenModal}/>
      </Fab>

<Dialog open={open} onClose={handleCloseModal}>
  <DialogTitle>Add Service</DialogTitle>
  <DialogContent>
     <AddService handleAdd={() => setOpen(false)}  />  
     {/* <AddService/>   */}
  </DialogContent>
  <DialogActions>
    <Button variant="outlined" onClick={handleCloseModal}>Cancel</Button>
    {/* <Button  variant="outlined" onClick={() => setOpen(false)}>Save</Button> */}
    
    
  </DialogActions>
</Dialog>
</>
      )}
 </>
  )
                  }))
                  

export default ServiceList