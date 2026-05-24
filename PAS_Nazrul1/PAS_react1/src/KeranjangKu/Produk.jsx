import React from "react";
import Delete from "./Delete";

function Produk({nama, harga, urlImg, id, onDelete}) {
    return(
        <div className="produk-container">
            <div className="produk">
                <img src={urlImg} alt={nama} />
                <div className="detail">
                    <h2>{nama}</h2>
                    <p>Rp {harga.toLocaleString('id-ID')}</p>
                    {/* <p>id : {id}</p> */}
                </div>
                <Delete id={id} onDelete={onDelete} />
            </div>
        </div>
    )
}

export default Produk;