import { Button, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import ReCAPTCHA from "react-google-recaptcha";

const WalletForm = () => {
  return (
    <Box component="form" sx={{ maxWidth: 400, py: 3 }}>
      <Box sx={{ mb: 1.5 }}>
        <FieldTitle>Wallet Address</FieldTitle>
        <InputField placeholder="Wallet Address.." />
      </Box>
      <Box sx={{ mb: 1.5 }}>
        <FieldTitle>Request Type</FieldTitle>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: 1,
          }}
        >
          <InputField value="20 Test Link" disable={true} />
          <InputField value="0.5 ETH" disable={true} />
        </Box>
      </Box>
      <Box sx={{ my:1 }}>
        <ReCAPTCHA sitekey={process.env.REACT_APP_CAPTCHA_SITE_KEY} />
      </Box>
      <Button variant="contained" sx={{ textTransform: 'capitalize' }}>Send Request</Button>
    </Box>
  );
};

const FieldTitle = ({ children }) => {
  return (
    <Typography
      variant="subtitle2"
      sx={{ fontWeight: 600, color: "#26a69a", gridColumn: "1 / 3" }}
    >
      {children}
    </Typography>
  );
};

const InputField = ({ value, placeholder, disable = false }) => {
  return (
    <TextField
      id="outlined-basic"
      placeholder={placeholder}
      value={value}
      variant="outlined"
      size="small"
      disabled={disable}
      fullWidth
      sx={{ fontSize: ".8rem" }}
    />
  );
};

export default WalletForm;
