import React, { useState, Fragment } from "react";
import Box from "@mui/material/Box";
import {
  Drawer,
  Divider,
  Typography,
  IconButton,
  Badge,
  Grid,
  Alert,
} from "@mui/material";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { NavbarProps } from "../types/componentsProps";
import CartItem from "./CartItem";

const CustomDrawer: React.FC<NavbarProps> = ({
  cart,
  deleteFromCart,
  incrementOrDecrementQuantity,
}) => {
  const [cartOpen, setCartOpen] = useState<boolean>(false);
  const toggleDrawer = (open: boolean): void => {
    setCartOpen(open);
  };

  const totalCartCount =
    cart.length > 0
      ? cart.reduce((acc, item) => acc + (item.quantity || 0), 0)
      : 0.0;
  const totalCartPrice =
    cart.length > 0
      ? cart.reduce((acc, item) => acc + (item.price * item?.quantity || 0), 0)
      : 0.0;

  return (
    <div>
      <Fragment>
        <IconButton
          onClick={() => toggleDrawer(true)}
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}>
          <Badge
            badgeContent={totalCartCount == 0 ? "0" : totalCartCount}
            color="secondary">
            <ShoppingCartOutlinedIcon />
          </Badge>
        </IconButton>
        <Drawer
          anchor={"left"}
          open={cartOpen}
          onClose={() => setCartOpen(false)}>
          <Box sx={{ width: 350, px: 2, py: 2 }} role="presentation">
            <Typography sx={{ mb: 2 }} variant="h6">
              Cart
            </Typography>
            <Divider />

            {cart.length > 0 ? (
              <Grid container rowGap={5} mt={3}>
                {cart.map((item) => (
                  <Grid item key={item.id}>
                    <CartItem
                      item={item}
                      deleteFromCart={deleteFromCart}
                      incrementOrDecrementQuantity={
                        incrementOrDecrementQuantity
                      }
                    />
                  </Grid>
                ))}
              </Grid>
            ) : (
              <Alert severity="info" sx={{ mt: 2 }}>
                Cart Is Empty
              </Alert>
            )}
          </Box>

          {cart.length > 0 && (
            <>
              <Divider />
              <Typography sx={{ my: 2, px: 2 }} variant="h6">
                Total : ${totalCartPrice?.toFixed(2)}
              </Typography>
            </>
          )}
        </Drawer>
      </Fragment>
    </div>
  );
};

export default CustomDrawer;
