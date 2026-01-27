//  Output 

import { sisi1, sisi2, tinggi, rumus } from "./data1.js";
import { hitungLuasTrapesium } from "./function.js";

console.log("Menghitung Luas Trapesium");
console.log(`Sisi a  : ${sisi1}`);
console.log(`Sisi b  : ${sisi2}`);
console.log(`Tinggi  : ${tinggi}`);

console.log(`Rumus   : Luas = ${rumus} * (a + b) * t`);
console.log("------------- Hasil -----------------");
hitungLuasTrapesium();
