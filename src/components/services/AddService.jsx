import { Button, TextField } from '@mui/material';

import { observer } from 'mobx-react';
import { useState } from 'react';
import { addService } from '../../store/server';

const AddService = (observer(({handleAdd}) => {
  const [service, setService] = useState({
  id: '',
  name: '',
  description: '',
  price: '',
  duration: '',
});
const handleFormSubmit = (e) => {
  e.preventDefault();
  addService(service).then(() => {
    // Handle success
    handleAdd() 
  });
  setService({
    id: '',
    name: '',
    description: '',
    price: '',
    duration: '',
  });
};

  const handleInputChange = (e) => {
    setService({ ...service,[e.target.name]: e.target.value,});
  }
    return (
        <>

            <form onSubmit={handleFormSubmit}>
            <TextField name="id" type='number' label="serviceId" variant="outlined" value={service.id} onChange={ handleInputChange} margin="dense" />
            <br/>
            <TextField name="name" type='text' label="serviceName" variant="outlined" value={service.name} onChange={handleInputChange} margin="dense" />
            <br/>
            <TextField name="description" label="description" variant="outlined" value={service.description} onChange={handleInputChange} margin="dense" />
            <br/>
            <TextField name="price" label="servicePrice" variant="outlined" value={service.price} onChange={handleInputChange} margin="dense"/>
            <br/>
            <TextField name="duration" label="serviceDuration" variant="outlined" value={service.duration} onChange={handleInputChange} margin="dense"/>
            <br/>
            <Button variant="outlined" type="submit">Add</Button>
            </form>
                

        </>
    )
}))

export default AddService
