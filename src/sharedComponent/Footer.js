import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const Footer = () => {
  return (
    <Box component="footer" sx={{ py: 3, px: 1, textAlign: "center" }}>
      <Typography sx={{ fontSize: ".8rem" }}>
        © copyright 2022 - All Right Reserved by Faucet
      </Typography>
    </Box>
  );
};

export default Footer;
