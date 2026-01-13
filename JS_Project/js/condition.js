const tahunSekarang = 2025;
const tahunLahir = 2010;
const umur = tahunSekarang - tahunLahir;
const sisaUmurBuatKtp = 17 - umur;

if(umur >= 17){
    console.log(`Boleh membuat ktp`)
}else if(umur > 10 && umur <= 17){
    console.log(`Anda akan membuat KTP ${sisaUmurBuatKtp} tahun lagi,
        karena umur anda baru ${umur} tahun`)
}else{
    console.log(`Untuk membuat KTP masih lama, 
        karena umur anda baru ${umur} tahun`)
}