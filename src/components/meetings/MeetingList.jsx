import { observer } from 'mobx-react';
import { action } from 'mobx';
import React, { useEffect } from 'react';
import { getMeetings } from '../../store/server.js';
import { getColor } from '../../store/meetingFunc.js'
import store from '../../store/store.js';
import Meeting from './Meeting.jsx';
import '../../css/meetingCss.css'
const MeetingList = (observer(() => {
  useEffect(() => {
    getMeetings()
      .then(success => {
        sortMeetingsArray()
      })
      .catch(error => {
        console.log(error);
      });
  }, [])
  useEffect(() => {
    if (store.isMeeting)
      sortMeetingsArray();
  }, [store.isMeeting])
  const sortMeetingsArray = () => {
    if (store.meetings.length > 0) {
      const sortedArray = store.meetings.slice().sort((a, b) => {
        return new Date(a.dateTime) - new Date(b.dateTime);
      });
      store.setMeetings(sortedArray);
    }
  }

  return (<>
    <h3 className='title'>Appointments</h3>
    <br />
    <div className='container-comp'>
      {store.meetings.map((_, index) => (
        <div className="container" key={index}>
          <Meeting index={index} getColor={getColor} />
        </div>
      ))}
    </div>
  </>
  );
}))
export default MeetingList;
