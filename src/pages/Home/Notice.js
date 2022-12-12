import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const Notice = () => {
  return (
    <Box
      sx={{
        textAlign: "center",
        p: 3,
        backgroundColor: "#26a69a",
        color: "#fff",
      }}
    >
      <Typography component="p" sx={{ fontWeight: 600 }}>
        Notice Here
      </Typography>
    </Box>
  );
};

export default Notice;
