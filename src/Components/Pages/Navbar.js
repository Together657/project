import { AppBar, Box, Toolbar, Typography, Button, Grid} from '@material-ui/core'
// import { AccountCircle } from '@material-ui/icons';
// import { Image } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
// import ProfileView from './Components/Pages/auth/Profile';
import ProfileView from './auth/Profileview';


const Navbar = () => {
  console.log("local",localStorage.getItem("access_token"))

  return <>
    <Box sx={{ FlexGrow: 1 }}>

      <AppBar position="static" color="Secondary">
        <Toolbar>
          <Typography variant='h5' component="div" >
            <img src='./logo1.png' />
          </Typography>
          {localStorage.getItem("access_token") && (
          <Grid container direction="row" justifyContent="flex-end">
            <Grid item>
              <Button component={NavLink} to='/home' activeStyle><b>Home</b></Button>
              <Button component={NavLink} to='/post' activeStyle>
                <b>Post</b>
              </Button>
              <Button component={NavLink} to='/topic' activeStyle>
                <b>Topic</b>
              </Button>
            </Grid>
            <Grid item>
              <ProfileView />
            </Grid>
          </Grid>
          )}
        </Toolbar>
      </AppBar>
    </Box>

  </>;

};

export default Navbar;
