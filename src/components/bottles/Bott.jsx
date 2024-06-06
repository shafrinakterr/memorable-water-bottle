/* eslint-disable react/prop-types */

import './bottle.css'
const Bott = ({bottle, handlePurcessBottle}) => {
    const {name, price, img} = bottle;
    return (
        <div className="bottle">
            <h2>Name: {name}</h2>
            <img  src={img} alt="" />
            <p>Price: {price}</p>
            <button onClick={()=>handlePurcessBottle(bottle)}>Purcess</button>
        </div>
    );
};

export default Bott;