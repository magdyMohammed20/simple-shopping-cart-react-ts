//import { SetStateAction } from "react";
import { CartItemType } from "./apiCallsTypes";

export type NavbarProps = {
  cart: CartItemType[];
  deleteFromCart: (item: CartItemType) => void;
  incrementOrDecrementQuantity: (item: CartItemType, incOrDec: string) => void;
  //setOpen: React.Dispatch<SetStateAction<boolean>>;
};
