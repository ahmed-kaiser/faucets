import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
  Button,
  FormControl,
  IconButton,
  Input,
  InputAdornment,
  InputLabel,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import { GoogleLogin } from "react-google-login";
import { gapi } from "gapi-script";
import { Link } from "react-router-dom";

const RegisterForm = ({ title, link, message }) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  useEffect(() => {
    const initClient = () => {
      gapi.client.init({
        clientId: process.env.REACT_APP_CLIENT_ID,
        scope: "",
      });
    };
    gapi.load("client:auth2", initClient);
  }, []);

  return (
    <Box
      sx={{
        display: "grid",
        justifyItems: "center",
        alignItems: "center",
        minHeight: 800,
        bgcolor: "#fafafa",
      }}
    >
      <Box
        component="form"
        sx={{ maxWidth: 400, bgcolor: "#fff", p: 3, borderRadius: "5px" }}
      >
        <Typography variant="h5" sx={{ textAlign: "center" }}>
          {title}
        </Typography>
        <FormControl sx={{ my: 1, width: "100%" }} variant="standard">
          <InputLabel htmlFor="email">Email</InputLabel>
          <Input id="email" type="email" />
        </FormControl>
        <FormControl sx={{ my: 1, width: "100%" }} variant="standard">
          <InputLabel htmlFor="password">Password</InputLabel>
          <Input
            id="password"
            type={showPassword ? "text" : "password"}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleShowPassword}
                >
                  {showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>
        <Button variant="contained" fullWidth sx={{ my: 2 }}>
          {title}
        </Button>
        <Box sx={{ textAlign: "center" }}>
          <Typography>
            {message}
            <Link to={link}>{link.slice(1)}</Link>
          </Typography>
          <Typography sx={{ py: 2, fontWeight: 600 }}>Or</Typography>
          <Box>
            <GoogleLogin
              clientId={process.env.REACT_APP_CLIENT_ID}
              onSuccess={(res) => console.log(res)}
              onFailure={(err) => console.log(err)}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default RegisterForm;
