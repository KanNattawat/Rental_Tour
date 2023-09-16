import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import './register.css';
import hiLogo from './Image/hi_login.png';
import bgimg from './Image/Rectangle_11.png';

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

export default function SignUp() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const jsonData = {
      cust_email: data.get('email'),
      cust_password: data.get('pwd'),
      cust_name: data.get('fname'),
      cust_surname: data.get('lname'),
      cust_tel: data.get('number'),
    }

    fetch('http://localhost:3333/register',{
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify(jsonData),
  })
  .then(response => response.json())
  .then(data => {
      if (data.status === 'ok'){
          alert('register success')
          window.location = '/login'
      }else{
          alert('register failed')
      }
    })
    .catch((error) =>{
        console.error('Error:', error);
    });
  };

  

  return (
    <>
      <head>
        <title> ลงทะเบียน </title>
        <link rel="stylesheet" type="text/css" href="style.css"></link>
    </head>
    <body>
        <div id="frame">
          <form onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <h2 class="reg_label"> ลงทะเบียน </h2>
            <input type="text" id="fname" name="fname" class="fname_field" placeholder=" ชื่อ"></input>
            <input type="text" id="lname" name="lname" class="lname_field" placeholder=" นามสกุล"></input>
            <input type="text" id="email" name="email" class="email_field" placeholder=" อีเมล"></input>
            <input type="password" id="pwd" name="pwd" class="password_field" placeholder=" รหัสผ่าน"></input>
            <input type="text" id="number" name="number" class="number_field" placeholder=" เบอร์โทรติดต่อ"></input>
            <button class="main_btn" type='submit'> ดำเนินการ </button>
            <a href="/login" variant="body2" class="hyperlink"> มีบัญชีอยู่แล้วใช่ไหม? </a>
            </form>
        </div>
        <div id="frame2">
            <img src={bgimg} class="background_img"></img>
            <img src={hiLogo} class="hi_img"></img>
        </div>
    </body>
    </>
    // <ThemeProvider theme={defaultTheme}>
    //   <Container component="main" maxWidth="xs">
    //     <CssBaseline />
    //     <Box
    //       sx={{
    //         marginTop: 8,
    //         display: 'flex',
    //         flexDirection: 'column',
    //         alignItems: 'center',
    //       }}
    //     >
    //       <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
    //         <LockOutlinedIcon />
    //       </Avatar>
    //       <Typography component="h1" variant="h5">
    //         Sign up
    //       </Typography>
    //       <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
    //         <Grid container spacing={2}>
    //           <Grid item xs={12} sm={6}>
    //             <TextField
    //               autoComplete="given-name"
    //               name="firstName"
    //               required
    //               fullWidth
    //               id="firstName"
    //               label="First Name"
    //               autoFocus
    //             />
    //           </Grid>
    //           <Grid item xs={12} sm={6}>
    //             <TextField
    //               required
    //               fullWidth
    //               id="lastName"
    //               label="Last Name"
    //               name="lastName"
    //               autoComplete="family-name"
    //             />
    //           </Grid>
    //           <Grid item xs={12}>
    //             <TextField
    //               required
    //               fullWidth
    //               id="email"
    //               label="Email Address"
    //               name="email"
    //               autoComplete="email"
    //             />
    //           </Grid>
    //           <Grid item xs={12}>
    //             <TextField
    //               required
    //               fullWidth
    //               name="password"
    //               label="Password"
    //               type="password"
    //               id="password"
    //               autoComplete="new-password"
    //             />
    //           </Grid>
    //           <Grid item xs={12}>
    //             <TextField
    //               required
    //               fullWidth
    //               name="phone"
    //               label="Phone"
    //               type="phone"
    //               id="phone"
    //               autoComplete="new-phone"
    //             />
    //           </Grid>
    //           <Grid item xs={12}>
    //             <FormControlLabel
    //               control={<Checkbox value="allowExtraEmails" color="primary" />}
    //               label="I want to receive inspiration, marketing promotions and updates via email."
    //             />
    //           </Grid>
    //         </Grid>
    //         <Button
    //           type="submit"
    //           fullWidth
    //           variant="contained"
    //           sx={{ mt: 3, mb: 2 }}
    //         >
    //           Sign Up
    //         </Button>
    //         <Grid container justifyContent="flex-end">
    //           <Grid item>
    //             <Link href="/login" variant="body2">
    //               Already have an account? Sign in
    //             </Link>
    //           </Grid>
    //         </Grid>
    //       </Box>
    //     </Box>
    //     <Copyright sx={{ mt: 5 }} />
    //   </Container>
    // </ThemeProvider>
  );
}