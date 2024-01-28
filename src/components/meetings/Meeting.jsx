import { observer } from 'mobx-react';
import DataStore from '../../store/store';
import './MeetingCss.css'
const Meeting = (observer(({ index ,getColor}) => {  
   
  const thisMeeting = DataStore.meetings[index];
  
  return (
  
       <div className="container"> {thisMeeting ? <>
      {/* <h3 >dateTime: {thisMeeting.dateTime}</h3> */}
      <h3 className={getColor(thisMeeting.dateTime)}>dateTime: {thisMeeting.dateTime}</h3>

      {/* <h4>id: {thisMeeting.id}</h4> */}
      <p>serviceType: {thisMeeting.serviceType}</p>
      <p>Name: {thisMeeting.Name}</p>
      <p>Phone: {thisMeeting.Phone}</p>
      <p>Email: {thisMeeting.Email}</p>
      </> 
      : null}
    </div>
    
   
  )
}))

export default Meeting