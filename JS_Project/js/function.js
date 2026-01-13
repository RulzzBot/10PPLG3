function salam(nama, kelas){
    console.log(`Selamat Pagi ${nama}, berada di kelas ${kelas}`)
}

salam("Nazrul", "10 PPLG 3");

function kelilingLingkaran(jari){
    return 2 * 3.14 * jari;
}

let jari = 6
hasil = kelilingLingkaran(jari)
console.log(`Hasil dari keliling lingkaran jari-jari ${jari} adalah ${hasil}`)

const nama = ()=>{
    return "Muhammad Nazrul Abidin"
}

console.log(nama());