export const CartReducer = (state,action)=>{
    var {shoppingCart,totalPrice,qty} =state
    var product,updatedPrice,updateQty
    switch(action.type){
        case "Add_To_Cart":
            const check = shoppingCart.find((item=>item.id==action.id))
            if(check)
                return state
            else{
                product = action.product
                product['qty']=1
                updateQty=qty+1
                updatedPrice=totalPrice+product.finalprice
                return{
                    shoppingCart:[product,...shoppingCart],
                    totalPrice:updatedPrice,
                    qty:updateQty
                }
            }
            break
        case "Inc":
                product = action.product
                product['qty']+=1
                updateQty=qty+1
                updatedPrice=totalPrice+product.finalprice
                return{
                    shoppingCart:[...shoppingCart],
                    totalPrice:updatedPrice,
                    qty:updateQty
                }
                break
        case "Dec":
                product = action.product
                if(product["qty"]>1)
                {
                    product['qty']-=1
                    updateQty=qty-1
                    updatedPrice=totalPrice-product.finalprice
                    return{
                        shoppingCart:[...shoppingCart],
                        totalPrice:updatedPrice,
                        qty:updateQty
                    }
                }
                else
                    return state
                break
        case "Delete":
            const RemainingProducts = shoppingCart.filter((item=>item.id!==action.id))
            product = action.product
            updatedPrice=totalPrice-(product['qty']*product.finalprice)
            updateQty = qty-product['qty']
            product['qty']=0
            return{
                shoppingCart:[...RemainingProducts],
                totalPrice:updatedPrice,
                qty:updateQty
            }
    }
}