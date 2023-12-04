//import CustomDrawer  from './components/Drawer'
import { useState } from "react";
import "./App.css";
import { useQuery } from "react-query";
import { CartItemType } from "./types/apiCallsTypes";
import { getProducts } from "./utils/function/apiCalls";
import Loader from "./components/Loader";
import MediaCard from "./components/Card";
import Grid from "@mui/material/Grid";
import Navbar from "./components/Navbar";
//import BasicModal from "./components/Modal";

function App() {
  const { data, isLoading, error } = useQuery<CartItemType[]>(
    "products",
    getProducts
  );
  const [cart, setCartItem] = useState<CartItemType[]>([]);
  //const [open, setOpen] = useState<boolean>(false);

  const handleAddToCart = (item: CartItemType): void => {
    const findItem = cart.find((cartItem) => item.id === cartItem.id);

    if (findItem) {
      const updatedProducts: CartItemType[] = cart.map((product) => {
        if (product.id === item.id) {
          return { ...product, quantity: (product?.quantity || 0) + 1 };
        }

        return product; // Add this line to return the original product for other items
      });

      setCartItem(updatedProducts);
    } else {
      setCartItem([...cart, { ...item, quantity: 1 }]);
    }
  };

  const deleteFromCart = (item: CartItemType) => {
    const findItem = cart.find((cartItem) => item.id === cartItem.id);
    if (findItem) {
      setCartItem((prev) => prev.filter((cartItem) => cartItem.id != item.id));
    }
  };

  const incrementOrDecrementQuantity = (
    item: CartItemType,
    incOrDec: string
  ) => {
    setCartItem((prev) => {
      const updatedProducts: CartItemType[] = prev.map((product) => {
        if (product.id === item.id) {
          const newQuantity =
            incOrDec === "+"
              ? (product?.quantity || 0) + 1
              : (product?.quantity || 0) - 1;

          return {
            ...product,
            quantity: newQuantity,
          };
        }

        return product;
      });

      const filteredCart = updatedProducts.filter(
        (product) => product.quantity !== 0
      );

      return filteredCart;
    });
  };

  if (error) {
    return <div>Error</div>;
  }

  if (isLoading) {
    return <Loader />;
  } else {
    return (
      <div>
        {/* <BasicModal open={open} setOpen={setOpen} /> */}
        <Navbar
          cart={cart}
          deleteFromCart={deleteFromCart}
          incrementOrDecrementQuantity={incrementOrDecrementQuantity}
        />
        {/* <CustomDrawer /> */}
        <Grid container columnSpacing={4} rowSpacing={3} px={14} py={5}>
          {data?.map((item) => (
            <Grid item xs={3} sm={12} md={6} lg={3} key={item.id}>
              <MediaCard item={item} handleAddToCart={handleAddToCart} />
            </Grid>
          ))}
        </Grid>
      </div>
    );
  }
}

export default App;
