import { observer } from 'mobx-react';
import { Button, TextField } from '@mui/material';
import { useState } from 'react';
import { addServiceToServer } from '../../store/server';
const AddService = (observer(({ handleAdd }) => {
  const [service, setService] = useState({
    name: '',
    description: '',
    price: '',
    duration: '',
  });
  const handleFormSubmit = (e) => {
    e.preventDefault();
    addServiceToServer(service).then(() => {
      handleAdd()
    });
    setService({
      name: '',
      description: '',
      price: '',
      duration: '',
    });
  };
  const handleInputChange = (e) => {
    setService({ ...service, [e.target.id]: e.target.value, });
  }
  return (<>
    <h2>Add Service</h2>
    <form onSubmit={handleFormSubmit}>
      <TextField required id="name" type='text' label="serviceName" variant="outlined" value={service.name} onChange={handleInputChange} margin="dense" />
      <br />
      <TextField id="description" label="description" variant="outlined" value={service.description} onChange={handleInputChange} margin="dense" />
      <br />
      <TextField required id="price" label="servicePrice" variant="outlined" value={service.price} onChange={handleInputChange} margin="dense" />
      <br />
      <TextField id="duration" type='text' label="duration" variant="outlined" value={service.duration} onChange={handleInputChange} margin="dense" />
      <br />
      <Button variant="outlined" type="submit">Add</Button>
    </form>


  </>
  )
}))

export default AddService
