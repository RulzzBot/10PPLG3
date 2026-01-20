// Data Array

let dataDiri = ["Nazrul", 15, "Kudus"];
let kotaAsal = dataDiri[2];

dataDiri[1] = 16; // Mengubah nilai array

dataDiri.push("Main Bola"); // Menambah nilai array

console.log(`Saya berasal dari ${dataDiri[2]}, Umur saya sekarang ${dataDiri[1]} tahun, Hobi saya adalah ${dataDiri[3]}`);

// Menghapus nilai array
// dataDiri.splice(0,1);  // (index, jumlah data yang dihapus)

// splice manipulasi array
dataDiri.splice(1,0,"10 PPLG 3"); // (index, jumlah data yang dihapus, data baru)
// output : 10 PPLG 3 terletak pada index 1, dan tidak ada data yang dihapus

console.log(dataDiri);

// data array adalah tipe data yang dapat menyimpan lebih dari satu nilai dalam satu variabel
// setiap nilai pada array memiliki index yang dimulai dari 0


// data object adalah tipe data yang dapat menyimpan lebih dari satu nilai dalam satu variabel
// setiap nilai pada object memiliki key dan value