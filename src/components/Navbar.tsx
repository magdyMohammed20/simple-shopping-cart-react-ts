import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import CustomDrawer from "./Drawer";
import { NavbarProps } from "../types/componentsProps";
import React from "react";

const Navbar: React.FC<NavbarProps> = ({
  cart,
  deleteFromCart,
  incrementOrDecrementQuantity,
  //setOpen,
}) => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <CustomDrawer
            cart={cart}
            deleteFromCart={deleteFromCart}
            incrementOrDecrementQuantity={incrementOrDecrementQuantity}
          />
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Shopping Cart
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
