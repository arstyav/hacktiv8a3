//Nama          : Aristy Avrianti
//Kode Peserta  : RCJ02S007
//Program       : ReactJS

function threeStepsAB(text) {
    // Looping pada string untuk memeriksa pola 'a...b' atau 'b...a'
    for (let i = 0; i < text.length - 4; i++) {
        // Periksa jika ada 'a' diikuti oleh tiga karakter lain dan kemudian 'b'
        if (text[i] === 'a' && text[i + 4] === 'b') {
            return true;
        }
        // Periksa jika ada 'b' diikuti oleh tiga karakter lain dan kemudian 'a'
        if (text[i] === 'b' && text[i + 4] === 'a') {
            return true;
        }
    }
    // Jika tidak ada pola yang ditemukan, kembalikan false
    return false;
}

// Contoh test cases dari gambar:
console.log(threeStepsAB('lane borrowed')); // true
console.log(threeStepsAB('i am sick')); // false
console.log(threeStepsAB('you are boring')); // true
console.log(threeStepsAB('barbarian')); // true
console.log(threeStepsAB('bacon and meat')); // false
