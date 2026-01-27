// Trapesium
// Rumus = 0.5 * ( a + b ) * t

import { sisi1, sisi2, tinggi, rumus } from "./data1.js";

export function hitungLuasTrapesium() {
    let luas = rumus * (sisi1 + sisi2) * tinggi;
    console.log(`Luas Trapesium: ${luas} cm`);
}

// console.log(`Sisi a: ${sisi1}`);

