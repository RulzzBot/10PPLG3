// tampil angka genap dari 1 - 100
// menggunakan do...while
let absen = 1;
do {
    if(absen === 22){
        console.log(`${absen} adalah absen saya`);
    }else if(absen % 2 === 0){
        console.log(absen);
    }
    
    absen++;
}while (absen <= 35);

// while(absen <= 35){
//     if(absen === 22){
//         console.log(`${absen} adalah absen saya`)
//     }else if(absen % 2 === 0){
//         console.log(absen);
//     }
//     absen++;
// }

