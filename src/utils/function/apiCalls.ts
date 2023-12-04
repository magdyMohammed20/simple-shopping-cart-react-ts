import {CartItemType} from '../../types/apiCallsTypes'

export const getProducts = async (): Promise<CartItemType[]> => {
    const products = await fetch('https://fakestoreapi.com/products')
  
    return await products.json()
}
  
