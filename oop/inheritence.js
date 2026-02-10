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
    constructor(warna, pemilik, jenis){
        this.warna = warna;
        this.jenis = jenis;
        this.pemilik = pemilik;
    }
    
    species(){
        console.log(`${this.pemilik} memiliki kucing berwarna ${this.warna} yang Berjenis ${this.jenis}.`);
    }
}

class Persia extends Kucing{
    constructor(warna, pemilik,jenis ,bulu){
        super(warna,pemilik,jenis);
        this.bulu = bulu;
    }

    buluPersia(){
        console.log(`Kucing ${this.jenis} memiliki bulu yang ${this.bulu}.`)
    }
}

class Umur extends Persia{
    constructor(warna, pemilik,jenis ,bulu, umur){
        super(warna, pemilik,jenis ,bulu);
        this.umur = umur;
    }

    umurKucing(){
        console.log(`Kucing nya berumur ${this.umur} Tahun.`)
    }
}

// const kucing = new Kucing("Merah", "Nazrul" )
const persia = new Umur("Putih", "Nazrul","Persia", "Lebat", "15");
persia.species();
persia.buluPersia()
persia.umurKucing()
