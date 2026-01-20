let nama = ["Muhammad", "Nazrul", "Abidin"];

let nickname = nama[1];
console.log(`Nama Panggilan Saya Adalah ${nickname}`);

nama.splice(3, 0, "Yuta");

let alias = nama[3];
console.log(`Selain dipanggil ${nickname}, Saya juga bisa dipanggil ${alias}`);

// console.log(nama);