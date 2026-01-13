// Object
// let data = [
//     {
//         nama: "Muhammad Nazrul Abidin",
//         umur: 14,
//         kelas: "10 PPLG 3"
//     },
//     {
//         nama: "Ahmad Rizky",
//         umur: 15,
//         kelas: "10 PPLG 2"
//     }
// ]

// Destructuring Array
// const [{nama : nama1},{nama: nama2}] = data;

// console.log(`Nama : ${nama1}, Umur : ${data[1].umur}, Kelas : ${data[1].kelas}`);

// data.forEach((item)=>{
//     console.log(`Nama : ${item.nama}, Umur : ${item.umur}, Kelas : ${item.kelas}`);
// });

// let data2 = { 
// //  key   value
//     nama: "Muhammad Nazrul Abidin",
//     umur: 14,
//     kelas: "10 PPLG 3",
//     "nama panggilan" : "Nazrul"
// }

// Destructuring Object
// const {nama, umur, "nama panggilan" : nick, alamat = "Kudus"} = data2; 

// console.log(`Nama : ${nama}, Nama Panggilan ${nick}, Umur : ${umur}, Kelas : ${data2.kelas}, Alamat : ${alamat}`);


// Studi Kasus
let hobi = {
    olahraga: "Sepak Bola",
    pemainFav : "Lionel Messi",
    klubFav : "Bayern Munchen"
}

const {umur = 15} = hobi; // Default Value
console.log(`Hobi Saya adalah ${hobi.olahraga}, Pemain Favorit Saya ${hobi.pemainFav}, Klub Favorit Saya ${hobi.klubFav}, Dan Umur saya adalah ${umur}`);