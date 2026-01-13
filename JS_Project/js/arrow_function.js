// Function Declaration Biasa

function tambah(angka1, angka2){
    return angka1 + angka2
}

let nilai1 = 10;
let nilai2 = 15;
let hasil = tambah(nilai1, nilai2);
console.log(`Hasil dari penjumlahan ${nilai1} + ${nilai2} adalah ${hasil}`);


// Arrow Function
// EX1
let pertambahan = (num1, num2)=> num1 + num2;

console.log(`Hasil dari penjumlahan 3 dan 5 adalah ${pertambahan(3,5)}`);

// EX2
let pengurangan = (num1, num2)=>{
    return num1 - num2;
}

console.log(`Hasil dari pengurangan 10 dan 4 adalah ${pengurangan(10,4)}`);