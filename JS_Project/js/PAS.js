let harga_awal = 200000;
let diskon_utama = harga_awal * 0.20;
let isMember = true;

let total_diskon_utama = harga_awal - diskon_utama;

let diskon_tambahan = total_diskon_utama * 0.10;

console.log(`Harga Awal : ${harga_awal}`);
console.log(`Diskon Utama : 20%`);
console.log(`Harga Setelah Diskon Utama : ${total_diskon_utama}`);

let total_akhir;
if (isMember == true) {
    total_akhir = total_diskon_utama - diskon_tambahan;
    console.log(`Diskon Tambahan 10% Diberikan. isMember == ${isMember}`);
}else{
    total_akhir = total_diskon_utama;
    console.log(`Diskon Tambahan Tidak Diberikan. isMember == ${isMember}`)
}

console.log(`Harga Akhir : ${total_akhir}`);