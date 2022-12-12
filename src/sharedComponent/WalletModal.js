import {
  Dialog,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import MetaMask from "../assets/images/MetaMask.svg";
import WalletConnect from "../assets/images/WalletConnect.svg";
import CloseIcon from "@mui/icons-material/Close";

const WalletModal = ({ handleWallet, showModal }) => {
  return (
    <Dialog open={showModal} onClose={handleWallet}>
      <DialogTitle
        id="alert-dialog-title"
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {"Connect your wallet"}
        <CloseIcon onClick={handleWallet} sx={{ cursor: "pointer" }} />
      </DialogTitle>
      <DialogContent sx={{ maxWidth: 600 }}>
        <DialogContentText id="alert-dialog-description">
          <Box
            component="div"
            sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
          >
            <Wallet title="MetaMask" img={MetaMask} />
            <Wallet title="WalletConnect" img={WalletConnect} />
          </Box>
        </DialogContentText>
      </DialogContent>
    </Dialog>
  );
};

const Wallet = ({ title, img }) => {
  return (
    <Box
      sx={{ bgcolor: "#fafafa", textAlign: "center", p: 4, m: 1, width: 100 }}
    >
      <img src={img} alt={title} />
      <Typography sx={{ fontWeight: 600, color: "#26a69a" }}>
        {title}
      </Typography>
    </Box>
  );
};

export default WalletModal;
