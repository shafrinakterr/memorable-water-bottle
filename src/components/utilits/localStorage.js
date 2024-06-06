const getStoredCart = () =>{
    const storedCartString = localStorage.getItem('cart');
    if(storedCartString){
        return JSON.parse(storedCartString);
    }
    return []
}

const seveCartToLs = cart =>{
    const cartStringfied = JSON.stringify(cart);
    localStorage.setItem('cart', cartStringfied)
}

const addToLs = id =>{
    const cart = getStoredCart();
    cart.push(id);
    seveCartToLs(cart)

}


const removeFromLs = id =>{
    const cart = getStoredCart();
    const remaining = cart.filter(idx=> idx !== id);
    seveCartToLs(remaining)
}

export {addToLs, getStoredCart, removeFromLs}