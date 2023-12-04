import { CartItemType } from "../types/apiCallsTypes";
import { Box, Typography, IconButton, Button } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

type additionTypes = {
  item: CartItemType;
  deleteFromCart: (item: CartItemType) => void;
  incrementOrDecrementQuantity: (item: CartItemType, incOrDec: string) => void;
  //setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};
const CartItem = ({
  item,
  deleteFromCart,
  incrementOrDecrementQuantity,
}: additionTypes) => {
  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <img src={item.image} width={"70px"} height={"95px"} />
        <Box pl={4}>
          <Typography pt={1} variant="h6">
            {item.title?.slice(0, 10)}
          </Typography>
          <Typography
            variant="body2"
            pt={1}
            component={"div"}
            fontWeight={"bold"}>
            ${item?.price?.toFixed(2)}
          </Typography>
          <Typography
            variant="body2"
            pt={1}
            component={"div"}
            fontWeight={"bold"}>
            Quantity : {item.quantity}
          </Typography>
          <Box sx={{ display: "flex", alignItems: "center", mt: 2 }}>
            <Button
              onClick={() => incrementOrDecrementQuantity(item, "+")}
              variant="contained"
              color="inherit"
              sx={{ p: 0, width: "35px", height: "35px" }}>
              +
            </Button>
            <Typography sx={{ mx: 2 }}>{item.quantity}</Typography>
            <Button
              onClick={() => incrementOrDecrementQuantity(item, "-")}
              variant="contained"
              color="inherit"
              sx={{ p: 0, width: "35px", height: "35px" }}>
              -
            </Button>
          </Box>
        </Box>
      </Box>
      <IconButton
        aria-label="delete"
        size="large"
        onClick={() => deleteFromCart(item)}>
        <DeleteIcon color="secondary" />
      </IconButton>
    </Box>
  );
};

export default CartItem;
