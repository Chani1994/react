
import React, { useEffect, useState } from 'react';
import { observer } from 'mobx-react';
import Fab from '@mui/material/Fab';
import EditIcon from '@mui/icons-material/Edit';
import EditBusinessData from './EditBusinessData'
import store from '../../store/store'
import { Button, Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material';
import { getBusinessData } from '../../store/server';

const BusinessData = (observer(() => {
  // const [business, setBusiness] = useState(
  //   {
  //   name: "Coding Academy",
  //   address: "123 Main Street",
  //   phone: "555-1234",
  //   owner: "John Doe",
  //   logo: "https://example.com/logo.png",
  //   description: "A coding academy that offers courses on web development."
  // }
  //  );
  const business = store.businessData;
  useEffect(() => {
    
    getBusinessData()
    // getServices()
    // getMeetings
  }, [])

  const [open, setOpen] = useState(false);


  const handleOpenModal = () => {
    setOpen(true);
  };

  const handleCloseModal = () => {
    setOpen(false);
  };

  return (
    <div>{business ? <>
      <h2>Business Details</h2>
      <p>Name: {business.name}</p>
      <p>Address: {business.address}</p>
      <p>Phone: {business.phone}</p>
      <p>Owner: {business.owner}</p>
      <p>Logo: <img src={business.logo} alt="Logo" /></p>
      <p>Description: {business.description}</p>
    </>
      : null}
      {/* <Button onClick={handleOpenModal}>עריכת פרטי עסק</Button> */}
      {store.isLogin && (
  <>
      <Fab color="primary" aria-label="edit">
        <EditIcon onClick={handleOpenModal}/>
      </Fab>

      <Dialog open={open} onClose={handleCloseModal}>
        <DialogTitle>Edit Business Details</DialogTitle>
        <DialogContent>
          <EditBusinessData business={business} handleEdit={() => setOpen(false)} />
        </DialogContent>
        <DialogActions>
          <br/>
          <Button variant="outlined"  onClick={handleCloseModal}>Cancel</Button>
          {/* <Button onClick={() => handleEdit(business)}>Save</Button> */}
        </DialogActions>
      </Dialog>
      </>
      )}
    </div>
  );
}));

export default BusinessData