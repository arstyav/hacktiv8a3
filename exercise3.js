//Nama          : Aristy Avrianti
//Kode Peserta  : RCJ02S007
//Program       : ReactJS

function sumArray(arr, int) {
    let result = [];
    
    // Looping melalui array untuk mencari semua pasangan angka
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            // Jika dua angka dijumlahkan sama dengan integer target, tambahkan ke hasil
            if (arr[i] + arr[j] === int) {
                result.push([arr[i], arr[j]]);
            }
        }
    }
    
    return result;
}

// Contoh test cases dari gambar:
console.log(sumArray([2, 1, 4, 3], 5)); // output: [[2, 3], [1, 4]]
console.log(sumArray([1, 8, 10, 3, 11], 11)); // output: [[1, 10], [8, 3]]
