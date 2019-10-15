/* tanpa looping */
// function kaliTerusRekursif(angka) {
//     if(angka.toString().length === 1) {
//         return angka
//     } else {
//         var angka1 = Math.floor(angka / 10);
//         var angka2 = angka % 10;
//         var rekursif = kaliTerusRekursif(angka1);
//         return kaliTerusRekursif(angka2 * rekursif);
//     }
// }

/* dengan looping */
function kaliTerusRekursif(angka) {
    var arr = angka.toString()
    if(arr.length === 1) {
        return angka;
    } else {
        var num = 1;
        for(var i = 0; i < arr.length; i ++) {
            num *= Number(arr[i]);
            // console.log(num);
        }
        return kaliTerusRekursif(num)
    }
}


console.log(kaliTerusRekursif(66)); // 8
console.log(kaliTerusRekursif(3)); // 3
console.log(kaliTerusRekursif(24)); // 8
console.log(kaliTerusRekursif(654)); // 0
console.log(kaliTerusRekursif(1231)); // 6