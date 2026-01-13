let nama = "Muhammad Nazrul Abidin";
let tahunSekarang = 2025;
let tahunLahir = 2010;

let umur = tahunSekarang - tahunLahir;

let bisaBuatKTP = umur >= 17;
let sisaTahun = 17 - umur;

console.log(`Nama Saya ${nama}, Umur Saya ${umur} Tahun.`)

if(bisaBuatKTP){
    console.log(`Saya sudah bisa membuat KTP`)
}else{
    console.log(`Saya akan bisa membuat KTP ${sisaTahun} Tahun lagi.`)
}