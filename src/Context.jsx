import React, { createContext, useState } from "react";
import AllProdData from "./JsonData/allProd";
import Wishlist from "./Pages/Wishlist";

export const ShopContext  = createContext(null);

const getDefaultCart = () => {

    let cart = {};
    for(let index = 0 ; index < AllProdData.length+1; index++){

        cart[index] = 0;
        
    }

    return cart ;
    
}


const getDefaultWishList = () => {

    let wishList = {} ;
    for(let index  = 0 ; index < AllProdData.length+1; index++){
        wishList[index] = 0;
    }

    return wishList ;
    
}


const ShopContextProvider = (props) => {

    const [cartItems , setCartItems] = useState(getDefaultCart());
    const [wishListItem , setWishListItem] = useState([]);


    const addToWishList = (prod) => {

        setWishListItem((prevItems) => {

        if (!prevItems.find((item) => item.id === prod.id)) {
            return [...prevItems, prod];
          }

       
          return prevItems;

        })
        
    }

  

    const removeFromWishList = (itemId) => {

            setWishListItem( (prev) =>  prev.filter((e) => e.id !== itemId) )
        
    }

//    const getwishListItem = () => {

//     let wishListNum = 0;
//     for(const item in wishListItem){

//         if(wishListItem[item]>0){

//             wishListNum += wishListItem[item] ;

//         }
        
//     }

//     return wishListNum ;
    
//    }

const wishListNum = wishListItem.length ;

    const addToCart = (itemid) => {

        setCartItems((prev) => ({...prev, [itemid]: prev[itemid] + 1}));
    }

    const getTotalAmount =() => {

        let totalAmount = 0;

        for(const item in cartItems){

            if(cartItems[item]>0){

                let cartInfo =  AllProdData.find((curElem) => curElem.id === Number(item) );
                totalAmount += cartItems[item] * cartInfo.price ;
                
            }
            
        }

        return totalAmount ;
        
    }

    const getTotalCartItem = () => {

        let totalItem = 0;
        for(const item in cartItems){

            if(cartItems[item]>0){

                totalItem += cartItems[item] ;
                
            }
            
        }

        return totalItem ;
        
    }

    const removeFromCart = (itemid) => {

        setCartItems((prev) => ({...prev, [itemid]: prev[itemid] - 1}));
    }

    const contextValue = { wishListItem , addToWishList ,removeFromWishList,  wishListNum , getTotalAmount ,getTotalCartItem , AllProdData , cartItems , addToCart , removeFromCart};
        
    return (

        <ShopContext.Provider value={contextValue}>

            {props.children}
                
        </ShopContext.Provider>
        
    )
    
}

export default ShopContextProvider 