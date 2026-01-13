// variable
let a = 17;
a = 28;
a = "DUA PULUH DELAPAN"

console.log(`Nilai a = ${a}`)

const b = 10;
// const nilainya tidak bisa diubah
console.log(`Nilai b = ${b}`)


// Tipe data
// String 
const string = "\nIni adalah tipe data string"
console.log(string)

// boolean
const bool = true;
console.log(`ini adalah tipe data boolean : ${bool}`)

// number
const number = 20;
console.log(`${number} Bertipe data Number`)

// null | undifined
const nope = null
console.log(`${nope} adalah tipe data dari nope`)



// Operator 
// Aritmatics   (+ - * / %)
const num1 = 30;
const num2 = 10;
const aritmatika = num1 / num2

console.log(`Hasil dari ${num1} dibagi ${num2} = ${aritmatika}`)
// Penugasan    (=, +=, -=, etc)
let angka1 = 10;
angka1 += 10;
console.log(`Hasil dari penugasan adalah ${angka1}`)
// Perbandingan (> >= < <= == != === !==)
const nilai1 = 21;
const nilai2 = 63/3;
const perbandingan = nilai1 === nilai2

console.log(`\nhasil dari ${nilai1} Sama dengan ${nilai2} adalah ${perbandingan}`)
// logic        (&& || !)

const logika1 = 23 !== (23)
const logika2 = 60 >= ((10 * 7) - 10)
const logika3 = logika1 || logika2

console.log(`Hasil dari logika tersebut adalah ${logika3}`)