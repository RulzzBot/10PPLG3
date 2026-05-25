import React from "react";
import getData from "../utils/Data";
import Navigasi from "./Navigasi";
import ProdukInput from "./InputProduk";
import Produk from "./Produk";
import { IoClose } from "react-icons/io5";
import SideBar from "./SideBar";

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
                        <SideBar products={this.state.products} onDelete={this.onDeleteProdukHandler} toggleCart={this.toggleCart} />
                    )
                }
                
            </div>
        )
    }
}

export default Keranjang;