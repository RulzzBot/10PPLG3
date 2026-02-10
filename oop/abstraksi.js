class Hewan{
    constructor(nama){
        this.nama = nama;
    }

    suara(){
        throw new Error("Method suara harus dibuat");
    }
}

class Kucing extends Hewan{
    suara(){
        console.log(`${this.nama} bersuara meong`);
    }
}

class Anjing extends Hewan{
    suara(){
        console.log(`${this.nama} bersuara guk guk`);
    }
}

class Ayam extends Hewan{
    suara(){
        console.log(`${this.nama} Berusara kukuruyuk`)
    }
}

const kucing = new Kucing("Kucing");
const anjing = new Anjing("Anjing");
const ayam = new Ayam("Ayam");
kucing.suara();
anjing.suara();
ayam.suara();