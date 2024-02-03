import { observer } from 'mobx-react';
import { Avatar } from '@mui/material';
import store from '../../store/store';
import logo1 from '../../images/logo1.png'
import '../../css/meetingCss.css'

const Meeting = (observer(({ index ,getColor}) => {  
   
  const thisMeeting = store.meetings[index];
  
  return (
    <div className='session'  >
    {thisMeeting ? (
      <>
        {/* <h3 >dateTime: {thisMeeting.dateTime}</h3> */}
        {/* <h3 className={getColor(thisMeeting.dateTime)}>dateTime: {thisMeeting.dateTime}</h3> */}
        
        {/* <h4>id: {thisMeeting.id}</h4> */}
        {/* <img src={`${getColor(thisMeeting.dateTime)}`} alt="Logo" /> */}
        <Avatar src={logo1} alt="logo" ></Avatar>
        <div className={getColor(thisMeeting.dateTime)}>
        <p>Date: {new Date(thisMeeting.dateTime).toLocaleDateString()}</p>
        <p>Time: {thisMeeting.dateTime.split('T')[1]}</p>
        </div>
        <p>serviceName: {thisMeeting.serviceName}</p>
        <p>Name: {thisMeeting.NameUser}</p>
        <p>Phone: {thisMeeting.Phone}</p>
        <p>Email: {thisMeeting.Email}</p>
        
        
      </>
    ) : null}
  </div>
  )
}))

export default Meeting