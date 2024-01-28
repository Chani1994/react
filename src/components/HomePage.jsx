import { Button, Stack } from '@mui/material';
import { Link, Outlet } from 'react-router-dom';
function HomePage() {
  

    return (
      <>
       <h1> Home Page</h1>

<Stack spacing={2} direction="row">
  <Button variant="outlined">
    <Link to="/user">Users </Link>
  </Button>

  <Button variant="outlined">
    <Link to="/admin">Admin</Link>
  </Button>
</Stack>
<Outlet />
</>   
    
    
    )
  }
  
  export default HomePage
  