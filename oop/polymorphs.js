class Hewan{
    constructor(nama){
        this.nama = nama;
    }

    keahlian(){
        console.log(`${this.nama} mempunyai keahlian`)
    }
}

class Ikan extends Hewan{
    keahlian(){
        console.log(`${this.nama} ahli berenang di air`)
    }
}

class Harimau extends Hewan{
    keahlian(){
        console.log(`${this.nama} ahli berburu di hutan`)
    }
}

const ikan = new Ikan("Nemo");
const harimau = new Harimau("Harimau Jawa")
ikan.keahlian()
harimau.keahlian()