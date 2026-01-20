// Looping
// for
for(let i = 1; i < 20; i++){
    console.log(`Urutan ke-${i} adalah ${i}`);
}

// while
let j = 1;
while(j <= 10){
    console.log(`perulangan ke-${j} adalah ${j}  `);
    j++;
}

// do...while
let k = 15;
do{
    console.log(`Ini adalah perulangan ke-${k}`);
    k--;
}while(k >= 5);

// for...in
let siswa = {
    nama: "Nazrul",
    umur: 15,
    kelas: "10 PPLG 3"
}

for(let key in siswa){
    console.log(`${key}  : ${siswa[key]}`)
}