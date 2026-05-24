import React from "react";
import getData from "../utils/Data";
import Navigasi from "./Navigasi";
import ProdukInput from "./InputProduk";
import Produk from "./Produk";
import { IoClose } from "react-icons/io5";

class Keranjang extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            products : getData(),
            showCart : false,
        }
        this.onAddProdukHandler = this.onAddProdukHandler.bind(this);
        this.toggleCart = this.toggleCart.bind(this);
        this.onDeleteProdukHandler = this.onDeleteProdukHandler.bind(this); 
    }

    onAddProdukHandler({nama, harga, urlImg}){
        this.setState((prevState) => {
            return{
                products : [
                    ...prevState.products,
                    {
                        id: Date.now(),
                        nama,
                        harga: parseInt(harga),
                        urlImg,
                    }
                ]
            }
        })
    }  

    onDeleteProdukHandler(id){
        const products = this.state.products.filter((produks) => produks.id !== id);
        this.setState({products});
    }

    toggleCart(){
        this.setState((prevState) => ({
            showCart : !prevState.showCart,
        }))
    }
    render() {
        return (
            <div className="product">
                <Navigasi toggleCart={this.toggleCart} />
                <ProdukInput addProduk={this.onAddProdukHandler} />
                {
                    this.state.showCart && (
                        <div className="cart-container">
                            <div className="nav-mini">
                                <IoClose className="close-icon" onClick={this.toggleCart} size={30}/>
                                <h2>Keranjang Belanja</h2>
                            </div>
                            {
                            this.state.products.map((item) => (
                            <Produk
                                key={item.id}
                                id={item.id}
                                nama={item.nama}
                                harga={item.harga}
                                urlImg={item.urlImg}
                                onDelete={this.onDeleteProdukHandler}/>
                            ))
                }
                        </div>
                    )
                }
                
            </div>
        )
    }
}

export default Keranjang;