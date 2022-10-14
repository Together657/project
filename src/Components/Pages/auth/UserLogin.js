import { TextField, Button, Box, makeStyles, FormControlLabel, Checkbox, Grid } from "@material-ui/core"
import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";
// import Home from "../Home";

const useStyle = makeStyles ((theme)=>({
  box:{
    boxShadow: "2px ,3px",
    padding: "20px",
    marginTop:"50",
  },
}));


const UserLogin = () => {
    const classes = useStyle()

    const [emailid, setEmail] = React.useState("")
    const [passwordi, setPassword] = React.useState("")

    const formsubmit = async() => {
      const x =  await axios.post('https://dev-api.insightmonk.com/v1/auth/login', {
          email: emailid,
          password:passwordi   
        })

        if(x.data.status){
          localStorage.setItem("access_token", x.data.access_token)
          // window.location.reload()
          window.location.href= '/home'
        }else{
          localStorage.removeItem("access_token")
        }
      }




     const handleEmail = (e) => {
      // console.log(e.target.value)
      setEmail(e.target.value)
    }
    const handlePassword = (e) => {
      // console.log(e.target.value)
      setPassword(e.target.value)
    }

  return <>
        <Box  className={classes.box}>
            <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  onChange={handleEmail}
                  value={emailid}
                  autoFocus
                //   className={classes.box}
                />
   
               <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  onChange={handlePassword}
                  value={passwordi}
                  autoFocus
                  className={classes.box1}
                />
                <FormControlLabel
                  control={<Checkbox value="remember" color="primary" />}
                  label="Remember me"
                />
                  <Button
                  onClick={formsubmit}
                  fullWidth
                  variant="contained"
                  color="secondary"
                  style={{width: "100%", height: 56}}
                  className={classes.submit}
                  
                >
                 <b> Login</b>

                </Button>
                
                <Grid item xs>
                  <Link href="#" variant="body2">
                    Forgot password?
                  </Link>
                </Grid>
             
  </Box>
  
   
  </>;
  
};

export default UserLogin;
