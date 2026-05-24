import React from "react";
import { SlBasket } from "react-icons/sl";

function Navigasi({toggleCart}) {
    return (
        <div className="navbar">
            <div className="nav">
                <h2>KeranjangKu</h2>
                <div className="nav-right">
                    <SlBasket className="basket-icon" onClick={toggleCart} />
                </div>
            </div>
        </div>
    )
}

export default Navigasi;