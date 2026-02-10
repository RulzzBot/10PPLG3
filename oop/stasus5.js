class Siswa{
    constructor(nama, umur, kelas){
        this.nama = nama,
        this.umur = umur,
        this.kelas = kelas
    }

    tampilkanInfo(){
        console.log(`Nama : ${this.nama}, Berumur : ${this.umur} Tahun, Kelas : ${this.kelas}`);
    }
}


const siswa1 = new Siswa("Jojo", 14, "10RPL3");
const siswa2 = new Siswa("Patah", 15, "10RPL3");
const siswa3 = new Siswa("Pego", 15, "10RPL3");

siswa1.tampilkanInfo();
siswa2.tampilkanInfo();
siswa3.tampilkanInfo();