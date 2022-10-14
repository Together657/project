import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
// import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import axios from 'axios';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));
export function SignUp() {
  const classes = useStyles();
 
  const[firstName,setfirstName] = React.useState("");

const changeFirstname=(e)=>{
  // console.log(e.target.value)
  setfirstName(e.target.value)

}
const[lastName,setlastName] = React.useState("");
const changelastName=(e)=>{
  // console.log(e.target.value)
setlastName(e.target.value)
}
const[email,setemail] = React.useState("");
const changeemail=(e)=>{
  // console.log(e.target.value)
  setemail(e.target.value)
}
const[password,setpassword] = React.useState("");
const changepassword=(e)=>{
  // console.log(e.target.value)
  setpassword(e.target.value)
}

const formsubmit = async() => {
  const x =  await axios.post('https://dev-im.insightmonk.com/api/v1/register', {
   
    // fn:firstName,
    // ln:lastName,
    // em: email,
    // pwd:password,

    // ur:null
    fn: firstName,
    ln: lastName,
    pwd: password.trim(),
    em: email.trim(),
    terms: true,
    mn: "",
    compliance: true,
    ti: "Mr",
    ur: "1",
    campaign:  "",
    medium: "",
    source: "",
    expert:false,

    })
  }


// const onSubmit = ()=>{
//  // console.log("data")
// }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          {/* <LockOutlinedIcon /> */}
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form className={classes.form}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
              value={firstName}
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="First Name"
                autoFocus
                onChange={changeFirstname}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
              value={lastName}
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="lname"
                autoFocus
                onChange={changelastName}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
              value={email}
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
                onChange={changeemail}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
              value={password}
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                autoFocus
                onChange={changepassword}
              />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox value="allowExtraEmails" color="primary" />}
                label="Remember me"
                // label="I want to receive inspiration, marketing promotions and updates via email."
              />
            </Grid>
          </Grid>
          <Button
            onClick={formsubmit}
            fullWidth
            variant="contained"
            color="secondary"
            className={classes.submit}
          >
            Sign Up
          </Button>
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Link href="#" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
  );
}
export default SignUp
