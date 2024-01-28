import * as React from 'react';
import { Button, TextField } from '@mui/material';
// import alert from '../../store/meetingsFunc.js'
// import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
// import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
// import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
// import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// import dayjs from 'dayjs';
// import meetingStyle from '../../store/meetingStyle.js';
// import{showAlert} from '../../store/meetingStyle.js'
import { useState } from 'react';
import { observer } from 'mobx-react';
import { addMeeting } from '../../store/server.js';
// import MeetingsAlert from './MeetingsAlert.jsx';
const AddMeeting = (observer(({handleAddMeeting}) => { 
  const [formDataMeeting, setFormDataMeeting] = useState({
    // id: '',
    serviceType: '',                            
    dateTime: '',
    Name: '',
    Phone: '',
    Email: '',
  });
  const handleForm= (e) => {
    e.preventDefault();
    // if (!formDataMeeting.Email.includes('@')) {
    //     // <MeetingsAlert/>
    //   // emailvalid= false
    //     alert("email invalid")
    // }
    addMeeting(formDataMeeting).then(() => {
        // Handle success
        handleAddMeeting()
        alert("הפגישה נוספה בהצלחה")


    });
    setFormDataMeeting({
      // id: '',
      serviceType: '',
      dateTime: '',
      Name: '',
      Phone: '',
      Email: '',
      });
  };
  const handleChange = (e) => {
    
    setFormDataMeeting({ ...formDataMeeting,[e.target.name]: e.target.value,});

  }
  // const handleChangeTime = (date) => 
  // {
  //   const currentDate = dayjs();
  //   const selectedDate = dayjs(date);

  //   if (selectedDate.isBefore(currentDate)) {
  //    showAlert()
  //     return;
  //   }

  //   setFormDataMeeting((prevData) => ({
  //     ...prevData,
  //     dateTime: date,
  //   }));
  //   const handleInputChange = (event) => {
  //     setEmail(event.target.value);
  //   };
  
    // const handleSubmit = (event) => {
    //   event.preventDefault();
  
     
  

    // Handle the valid date selection
    // You can update the state or perform any necessary actions here
  //   setFormDataMeeting((prevData) => ({
  //     ...prevData,
  //     dateTime: date,
  //   }));
  // }
  
    return (
        <>
            <form onSubmit={handleForm}>
            {/* <TextField   name="id" type='number' label="Id" variant="outlined" value={formDataMeeting.id} onChange={handleChange} margin="dense" /> */}
            <br/>
            <TextField name="serviceType" type='number' label="serviceType" variant="outlined" value={formDataMeeting.serviceType} onChange={handleChange} margin="dense" />
            <br/>
            <TextField fullWidth sx={{ mt:1}} type='datetime-local' name="dateTime"  variant="outlined" value={formDataMeeting.dateTime} onChange={handleChange} margin="dense" />

            {/* <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={['DateTimePicker']}>
        <DateTimePicker id="dateTime" label="dateTime" variant="outlined" value={formDataMeeting.dateTime} onChange={handleChangeTime} margin="dense" />
      </DemoContainer>
    </LocalizationProvider> */}
            <br/>
            <TextField name="Name" label="Name" variant="outlined" value={formDataMeeting.Name} onChange={handleChange} margin="dense"/>
            <br/>
            <TextField required name="Phone" label="Phone" variant="outlined" value={formDataMeeting.Phone} onChange={handleChange} margin="dense"/>
            <br/>
            <TextField required type='email' name="Email" label="Email" variant="outlined" value={formDataMeeting.Email} onChange={handleChange} margin="dense"/>
            <br/>
            <Button variant="outlined" type="submit">Add</Button>
            </form>
            {
              // emailvalid && <MeetingsAlert/>
            }
             </> )}))
export default AddMeeting
