import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import { useContext, useState } from "react";
import { CurrencyContext } from "../context/CurrencyContext";
import { Stack } from "@mui/system";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import WalletIcon from '@mui/icons-material/Wallet';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

const settings = ["Log In", "Sign Up", "FAQ"];

function Navbar() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('sm'));
  const { networks, selectedNetwork, setSelectedNetwork } =
  useContext(CurrencyContext);
  const [anchorElUser, setAnchorElUser] = useState(null);
  const [anchorElNetwork, setAnchorElNetwork] = useState(null);

  const handleOpenUserMenu = (event) => {
    setAnchorElNetwork(null);
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleOpenNetworksMenu = (event) => {
    setAnchorElUser(null);
    setAnchorElNetwork(event.currentTarget);
  };

  const handleCloseNetworksMenu = (network) => {
    setAnchorElNetwork(null);
    if (network) {
        setSelectedNetwork(network);
    }
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: "#fff" }}>
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          <Typography
            variant="h2"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              fontFamily: "monospace",
              fontWeight: 600,
              color: "#333333",
              textDecoration: "none",
              fontSize: "1.5625rem",
              flexGrow: 1,
            }}
          >
            Faucets
          </Typography>
          <Stack direction="row" alignItems="center" spacing={matches? 2 : 1}>
            {/* -------- Currency button -------- */}
            <Box sx={{fontFamily: 'Varela Round', fontSize: ".9rem"}}>
              <Button
                variant="outlined"
                size="medium"
                onClick={handleOpenNetworksMenu}
                sx={{ textTransform: 'capitalize' }}
              >
                <img src={selectedNetwork.img} alt={selectedNetwork.title} style={{ height: '15px', width: '15px', marginRight: "6px"}}/>
                <span style={{ display: !matches && "none" }}>{selectedNetwork.title}</span>
                <ExpandMoreIcon />
              </Button>
              <Menu
                sx={{ mt: "40px" }}
                id="menu-appbar"
                anchorEl={anchorElNetwork}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElNetwork)}
                onClose={() => handleCloseNetworksMenu()}
              >
                {networks.map((currency) => (
                  <MenuItem
                    key={networks.title}
                    onClick={() => handleCloseNetworksMenu(networks)}
                  >
                    <img src={networks.img} alt={networks.title} style={{ height: '15px', width: '15px', marginRight: "6px"}}/>
                    <Typography textAlign="center">{networks.title}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            {/* -------- Wallet button -------- */}
            <Box>
              <Button
                variant="outlined"
                size="medium"
                sx={{ textTransform: 'capitalize' }}
              >
                <WalletIcon />
                <span style={{ display: !matches && "none" }}>Connect Wallet</span>
              </Button>
            </Box>
            {/* -------- User button -------- */}
            <Box>
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {settings.map((setting) => (
                  <MenuItem key={setting} onClick={handleCloseUserMenu}>
                    <Typography textAlign="center">{setting}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          </Stack>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Navbar;
