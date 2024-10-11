//Nama          : Aristy Avrianti
//Kode Peserta  : RCJ02S007
//Program       : ReactJS

function isArithmeticProgression(numbers) {
    // Jika array memiliki kurang dari 2 elemen, langsung return true
    if (numbers.length < 2) {
        return true;
    }
    
    // Hitung selisih pertama antara dua angka pertama
    let diff = numbers[1] - numbers[0];
    
    // Periksa apakah setiap selisih antar elemen sama dengan selisih pertama
    for (let i = 1; i < numbers.length - 1; i++) {
        if (numbers[i + 1] - numbers[i] !== diff) {
            return false; // Jika ada selisih yang berbeda, kembalikan false
        }
    }
    
    // Jika semua selisih konsisten, kembalikan true
    return true;
}

// Contoh test cases dari gambar:
console.log(isArithmeticProgression([1, 2, 3, 4, 5])); // true
console.log(isArithmeticProgression([2, 4, 6, 12, 24])); // false
console.log(isArithmeticProgression([2, 4, 6, 8])); // true
console.log(isArithmeticProgression([2, 4, 6, 9])); // false
console.log(isArithmeticProgression([54, 42, 30, 18, 6])); // true
