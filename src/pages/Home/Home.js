import { Alert, Box, Container, Typography } from "@mui/material";
import React, { useContext } from "react";
import { NetworksContext } from "../../context/NetworksContext";
import Notice from "./Notice";
import TransactionHistory from "./TransactionHistory";
import WalletForm from "./WalletForm";

const Home = () => {
  const { selectedNetwork } = useContext(NetworksContext);
  return (
    <Box
      component="section"
      sx={{ backgroundColor: "#fafafa", minHeight: 1000 }}
    >
      <Notice />
      <Container maxWidth="lg">
        <Box sx={{ py: 6 }}>
          <Typography
            variant="h2"
            sx={{ fontSize: "2.1875rem", fontWeight: 700, color: "#26a69a" }}
          >
            Request testnet LINK
          </Typography>
          <Typography sx={{ lineHeight: "1.5rem", maxWidth: 700, py: 2 }}>
            Get testnet LINK for an account on one of the supported blockchain
            testnets so you can create and test your own oracle and Chainlinked
            smart contract
          </Typography>
        </Box>
        <Box sx={{ p: 2, backgroundColor: "#fff", borderRadius: "5px" }}>
          <Alert severity="info">
            Your wallet is connected to{" "}
            <Box component="span" sx={{ fontWeight: "bold" }}>
              {selectedNetwork.title}
            </Box>
            , so you are requesting{" "}
            <Box component="span" sx={{ fontWeight: "bold" }}>
              {selectedNetwork.title}
            </Box>{" "}
            Link/ETH.
          </Alert>
          <WalletForm />
          <TransactionHistory />
        </Box>
      </Container>
    </Box>
  );
};

export default Home;
