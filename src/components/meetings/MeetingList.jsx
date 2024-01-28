import { Button, Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material';
// import Fab from '@mui/material/Fab';
// import AddIcon from '@mui/icons-material/Add';
import { observer } from 'mobx-react';
import React, { useEffect, useState } from 'react';
import store from '../../store/store.js';
import Meeting from './Meeting.jsx';
import { getMeetings } from '../../store/server.js';
// import AddMeeting from './AddMeeting.jsx';

const MeetingList = observer(() => {
  useEffect(() => {
    if (!store.meetings.length > 0)
      getMeetings();
  }, []);

  const [open, setOpen] = useState(false);
  const handleOpenModal = () => {
    setOpen(true);
  };
  const handleCloseModal = () => {
    setOpen(false);
  };
  const getColor = (dateTime) => {
    const currentDate = new Date();
    const meetingDate = new Date(dateTime);
    const differenceInDays = Math.floor(
      (meetingDate - currentDate) / (1000 * 60 * 60 * 24)
    );

    if (differenceInDays === 0) {
      return 'red';
    } else if (differenceInDays <= 7) {
      return 'orange';
    } else {
      return 'green';
    }
  };
  return (
    <>
              <h3>Meetings</h3>

      {store.meetings.map((meeting, index) => {
        const color = getColor(meeting.dateTime);
        return (
          // <div className={`container ${color}`} key={index}>
        <Meeting key={meeting.id} index={index} getColor={getColor} />
          // </div>
        );
      })}
    </>
  );
});
            {/* <div>
            <h3>meetings</h3>
            
            {store.meetings.map((_, index) =>
                <Meeting key={index} index={index}/>)}
            </div> 
             */}
            {/* <Button onClick={handleOpenModal}>Add Meeting</Button> */}
            {/* <br/>
            <Fab color="primary" aria-label="add">
        <AddIcon onClick={handleOpenModal}/>
      </Fab>
          <Dialog open={open} onClose={handleCloseModal}>
            <DialogTitle>Add Meeting</DialogTitle>
            <DialogContent>
             <AddMeeting hc  />  
            </DialogContent>
            <DialogActions>
              <Button variant="outlined" onClick={handleCloseModal}>Cancel</Button>
              {/* <Button variant="outlined" onClick={() => setOpen(false)}>Save</Button> */}

            {/* </DialogActions> */}
          {/* // </Dialog> */} 

//     </>
//     // )
//   )
// })
export default MeetingList
