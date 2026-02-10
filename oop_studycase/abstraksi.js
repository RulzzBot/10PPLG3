class Siswa{
    constructor(nama){
        this.nama = nama;
    }

    praktik(){
        throw new Error("Method Praktik harus dibuat");
    }
}

class Rpl extends Siswa{
    praktik(){
        console.log(`${this.nama} praktik membuat aplikasi dan coding`)
    }
}

class Animasi extends Siswa{
    praktik(){
        console.log(`${this.nama} praktik membuat animasi 2D / 3D`)
    }
}

class Dkv extends Siswa{
    praktik(){
        console.log(`${this.nama} praktik membuat Design Grafis`)
    }
}

const siswaRpl = new Rpl("Nazrul")
const siswaDkv = new Dkv("Raka")
const siswaAnim = new Animasi("Kevin")

siswaRpl.praktik()
siswaDkv.praktik()
siswaAnim.praktik()