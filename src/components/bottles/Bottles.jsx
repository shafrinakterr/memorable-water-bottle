import { useEffect } from "react";
import { useState } from "react";
import Bott from "./Bott";
import "./bottle.css"
import { addToLs, getStoredCart, removeFromLs } from "../utilits/localStorage";
import Cart from "./cart/Cart";
const Bottles = () => {
    const [bottles, setBottles] = useState([]);
    const [cart, setCart] = useState([]);
    useEffect(() => {
            fetch('./bottles.json')
            .then(res => res.json())
            .then(data => setBottles(data))
    }, []);

    // getCart

    useEffect(()=>{
        if(bottles.length > 0){
            const storedCart = getStoredCart();
            const saveCart = []
            for(const id of storedCart){
                const bottle = bottles.find(bottle => bottle.id===id)
                if(bottle){
                    saveCart.push(bottle)
                }
            }
            setCart(saveCart)
            
        }
    },[bottles])

    const handlePurcessBottle = bottle => {
        const newCart = [...cart, bottle];
        setCart(newCart);
        addToLs(bottle.id)
    }

    const handleRemoveCart = id =>{
        const remaining = cart.filter(idx => idx !== id);
        setCart(remaining)
        removeFromLs(id)
    }
    return (
        <div>
            <Cart handleRemoveCart={handleRemoveCart} cart={cart} />
            <div className="bottle-container">

                {
                    bottles.map(bottle => 
                    <Bott 
                    key={bottle.id} 
                    bottle={bottle} 
                    handlePurcessBottle={handlePurcessBottle}
                    handleRemoveCart={handleRemoveCart}></Bott>)
                }
            </div>
        </div>
    );
};

export default Bottles;