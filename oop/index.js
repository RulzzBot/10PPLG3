// OOP
// OOP adalah singkatan dari Object Oriented Programming
// OOP adalah sebuah paradigma pemrograman yang menggunakan "objek" untuk merepresentasikan data dan metode yang beroperasi pada data tersebut
// OOP memungkinkan kita untuk membuat kode yang lebih terstruktur, modular, dan mudah untuk dipelihara
// Konsep utama dalam OOP meliputi:
// 1. Class: Blueprint atau cetak biru untuk membuat objek
// 2. Object: Instance dari sebuah class
// 3. Inheritance: Mekanisme untuk mewarisi properti dan metode dari class lain // pewarisan
// 4. Encapsulation: Menyembunyikan detail implementasi dan hanya menampilkan antarmuka yang diperlukan
// 5. Polymorphism: Kemampuan untuk menggunakan metode yang sama dengan cara yang berbeda
// 6. Abstraction: Menyederhanakan kompleksitas dengan menyembunyikan detail yang tidak perlu


// Contoh implementasi OOP dalam JavaScript
//  class car{
//     name;

//     constructor(name){
//         this.name = name;
//     }
    
//     brake(){
//         console.log(`${this.name} is braking`);
//     }
//  }

// const car1 = new car({
//     name: "Toyota"
// })

// console.log(car1.name); // Output: Toyota
// car1.brake(); // Output: Toyota is braking
class Kucing{
    constructor(warna, jenis, pemilik){
        this.warna = warna;
        this.jenis = jenis;
        this.pemilik = pemilik;
    }
    
    species(){
        console.log(`${this.pemilik} memiliki kucing berwarna ${this.warna} dan jenisnya adalah ${this.jenis}.`);
    }
}

const kucing1 = new Kucing("Putih", "Anggora", "Yusup");
const kucing2 = new Kucing("Hitam", "Persia", "Anai");

kucing1.species(); // Output: Yusup memiliki kucing berwarna Putih dan jenisnya adalah Anggora.
kucing2.species(); // Output: Anai memiliki kucing berwarna Hitam dan jenisnya adalah Persia.
