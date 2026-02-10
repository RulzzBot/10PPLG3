class Hewan{
    #umur // Private
    constructor(nama, umur){
        this.nama = nama;
        this.#umur = umur;
    }

    getUmur(){
        return this.#umur;
    }

    setUmur(jumlah){
        if(jumlah < 0){
            console.log(`Umur tidak boleh negatif.`)
        }else{
            this.#umur = jumlah
        }
    }
}

const kucing = new Hewan("Fatah", 10);
kucing.umur = -20;
kucing.setUmur(5)
console.log(kucing.getUmur())
