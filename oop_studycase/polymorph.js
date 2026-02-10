class Siswa{
    constructor(nama){
        this.nama = nama;
    }

    mapelUnggul(){
        console.log(`${this.nama} mempunyai mapel unggul`)
    }
}

class WebDev extends Siswa{
    mapelUnggul(){
        console.log(`${this.nama} ahli di bidang Web Development`)
    }
}

class MobileDev extends Siswa{
    mapelUnggul(){
        console.log(`${this.nama} ahli di bidang Mobile Development`)
    }
}

const siswa1 = new WebDev("Jonathan")
const siswa2 = new MobileDev("Adji")
siswa1.mapelUnggul()
siswa2.mapelUnggul()