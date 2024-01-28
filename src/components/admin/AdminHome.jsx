import { Button } from '@mui/material';
import ButtonGroup from '@mui/material/ButtonGroup';
import { Link, Outlet } from 'react-router-dom';
import BusinessData from '../businessData/BusinessData'


function AdminHome() {
  
  return (
    <>
      <BusinessData/>
    <h1>Admin Home</h1>

    <ButtonGroup size="large" aria-label="large button group">
     
      <Button variant="outlined">
        <Link to="/admin/services">Services</Link>
      </Button>

      <Button variant="outlined">
        <Link to="/admin/meetings">Meetings</Link>
      </Button>
    </ButtonGroup>
    <br/>
    <Outlet />
  </>
    
  )
}

export default AdminHome