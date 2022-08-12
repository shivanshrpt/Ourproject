import React,{createContext,useReducer} from "react";
import { WishlistReducer } from "./WishlistReducer";

export const WishlistContext = createContext()

const WishlistContextProvider  = (props)=>{
    const [wish,wishdispatch] = useReducer(WishlistReducer,{wishlist:[]})
    return(
        <WishlistContext.Provider value={{...wish,wishdispatch}}>
            {props.children}
        </WishlistContext.Provider>
    )
}
export default WishlistContextProvider