import { observer } from 'mobx-react';
import { Button, TextField } from '@mui/material';

import DataStore from '../../store/store';
import './ServiceCss.css'

const Service = (observer(({ index }) => {  
   
    const thisService = DataStore.services[index];
   
  return (
  
    <div className="containerS">{thisService ? <>
      <h2>id: {thisService.id}</h2>
      <p> name: {thisService.name}</p>
      <p>description: {thisService.description}</p>
      <p>price: {thisService.price}</p>
      <p>duration: {thisService.duration}</p>
      {/* <Button  class='add-appointment-button'   >Add Meeting</Button> */}


    </>
    : null}
      </div>
  )
}))

export default Service