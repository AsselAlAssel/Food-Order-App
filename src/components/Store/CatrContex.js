import React ,{createContext}from 'react';
const CartContext=createContext(
    {
        cartList:[],
        totalAmount:0,
        addItem:(item)=>{},
        blusOrMinus:(temp)=>{}
        
    }
)
export default CartContext;
