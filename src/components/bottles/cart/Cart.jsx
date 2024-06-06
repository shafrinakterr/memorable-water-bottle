/* eslint-disable react/prop-types */

import '../bottle.css'
const Cart = ({cart , handleRemoveCart}) => {
    return (
        <div>
            <h4>Cart: {cart.length}</h4>
            <div>
                {
                    cart.map(bottle=> <div key={bottle.id}>
                        <img className='cart-img' src={bottle.img} alt="" />
                        <button style={{width:'100px', padding:'2px', font: '14px', marginBottom:'10px', marginTop:'10px'}} onClick={()=>handleRemoveCart(bottle.id)}>Remove</button>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Cart;