import React from "react";
import Produk from "./Produk";
import { IoClose } from "react-icons/io5";

function SideBar({products, onDelete, toggleCart}) {
    return(
        <div className="cart-container">
                <div className="nav-mini">
                    <IoClose className="close-icon" onClick={toggleCart} size={30}/>
                    <h2>Keranjang Belanja</h2>
                </div>
                {
                    products.map((item) => (
                        <Produk
                            key={item.id}
                            id={item.id}
                            nama={item.nama}
                            harga={item.harga}
                            urlImg={item.urlImg}
                            onDelete={onDelete}/>
                        ))

                }
                        </div>
    )
}

export default SideBar;