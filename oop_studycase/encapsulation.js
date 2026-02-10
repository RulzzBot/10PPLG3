class Siswa{
    #nilai
    constructor(nama, kelas, nilai){
        this.nama = nama;
        this.kelas = kelas;
        this.#nilai = nilai;
    }

    tampil(){
        console.log(`${this.nama}`)
    }

    getNilai(){
        return this.#nilai
    }

    setNilai(jml){
        if(jml > 100){
            console.log("Nilai tidak boleh lebih 100")
        }else{
            this.#nilai = jml
        }
    }
}

const siswa1 = new Siswa("Nazrul", "10", 90);
siswa1.nilai = 80
siswa1.setNilai(78)
console.log(siswa1.getNilai())