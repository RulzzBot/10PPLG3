class Siswa{
    constructor(nama, umur, kelas){
        this.nama = nama;
        this.umur = umur;
        this.kelas = kelas;
    }

    info(){
        console.log(`${this.nama} berumur ${this.umur} kelas ${this.kelas}`)
    }
}

class Jurusan extends Siswa{
    constructor(nama, umur, kelas, jurusan){
        super(nama, umur, kelas)
        this.jurusan = jurusan
    }

    jurusanSiswa(){
        console.log(`${this.nama} Jurusan ${this.jurusan}`)
    }
} 

const siswa1 = new Jurusan("Nazrul", 15, "10", "PPLG")
siswa1.info()
siswa1.jurusanSiswa();

