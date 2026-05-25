import React from "react";
import { IoAdd } from "react-icons/io5";
import Bg from "./Bg"; 

class ProdukInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            nama : "",
            harga : "",
            urlImg : "",
        }

        this.onNamaChangeEventHandler = this.onNamaChangeEventHandler.bind(this);
        this.onHargaChangeEventHandler = this.onHargaChangeEventHandler.bind(this);
        this.onUrlImgChangeEventHandler = this.onUrlImgChangeEventHandler.bind(this);
        this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
    }

    onNamaChangeEventHandler(event){
        this.setState(() => {
            return {
                nama : event.target.value,
            }
        })
    }

    onHargaChangeEventHandler(event){
        this.setState(() => {
            return {
                harga : event.target.value,
            }
        })
    }

    onUrlImgChangeEventHandler(event){
        this.setState(() => {
            return {
                urlImg : event.target.value,
            }
        })
    }

    onSubmitEventHandler(event){
        event.preventDefault();
        // this.props.addProduk(this.state);
        if(
            this.state.nama.trim() === "" ||
            this.state.harga.trim() === "" ||
            this.state.urlImg.trim() === ""
        ){
            alert("Semua field harus diisi!");
            return;
        }
        this.props.addProduk(this.state);
        this.setState({
            nama : "",
            harga : "",
            urlImg : "",
        })
    }

    render() {
        return(
            <div className="container">
                <Bg/>
                <div className="overlay"></div>
                <div className="hero-se">
                    <h1>Belanja Mudah,</h1>
                    <h2>Semua Dalam Keranjang.</h2>
                    <p>Temukan produk yang Anda inginkan dan tambahkan ke keranjang belanja Anda.</p>

                        <form className="produk-input" onSubmit={this.onSubmitEventHandler}>
                        <div className="input-container">
                            <div className="input-section">
                                <div className="input-group">
                                    Nama Produk
                                    <input type="text" placeholder="Nama Produk" value={this.state.nama} onChange={this.onNamaChangeEventHandler} />
                                </div>
                                <div className="input-group">
                                    Harga Produk
                                    <input type="text" placeholder="Harga Produk" value={this.state.harga} onChange={this.onHargaChangeEventHandler} />
                                </div>
                                <div className="input-group">
                                    Url Gambar Produk
                                    <input type="text" placeholder="URL Gambar Produk" value={this.state.urlImg} onChange={this.onUrlImgChangeEventHandler} />
                                </div>
                            </div>
                            
                            <button type="submit"><IoAdd size={30}/> Tambah Ke Keranjang</button>
                        </div>
                        </form>
                </div>
                
            </div>
        )
    }

}


export default ProdukInput;