//Nama          : Aristy Avrianti
//Kode Peserta  : RCJ02S007
//Program       : ReactJS

function arrSum(arr) {
    // Inisialisasi variabel maxSoFar untuk menyimpan nilai maksimum dari subarray yang ditemukan sejauh ini.
    // Inisialisasi maxEndingHere untuk menyimpan jumlah maksimum subarray yang berakhir pada indeks saat ini.
    let maxSoFar = arr[0]; // Jumlah subarray maksimum yang sudah ditemukan
    let maxEndingHere = arr[0]; // Jumlah subarray saat ini yang diakhiri pada indeks tertentu

    // Inisialisasi variabel untuk melacak indeks awal dan akhir subarray terbesar
    let start = 0, end = 0, s = 0; // s adalah indeks sementara untuk memulai subarray baru

    // Loop melalui array mulai dari elemen kedua (indeks 1)
    for (let i = 1; i < arr.length; i++) {
        // Tentukan apakah lebih baik menambahkan elemen saat ini ke subarray yang ada,
        // atau memulai subarray baru dari elemen saat ini.
        if (arr[i] > maxEndingHere + arr[i]) {
            // Jika elemen saat ini lebih besar dari subarray saat ini + elemen saat ini,
            // mulai subarray baru dari indeks i
            maxEndingHere = arr[i];
            s = i; // catat indeks awal subarray baru
        } else {
            // Jika tidak, tambahkan elemen saat ini ke subarray yang ada
            maxEndingHere += arr[i];
        }

        // Jika jumlah subarray yang baru lebih besar daripada maxSoFar,
        // perbarui maxSoFar dan simpan indeks awal dan akhir dari subarray
        if (maxEndingHere > maxSoFar) {
            maxSoFar = maxEndingHere; // Perbarui jumlah terbesar
            start = s; // simpan indeks awal subarray terbesar
            end = i;   // simpan indeks akhir subarray terbesar
        }
    }

    // Kembalikan subarray yang memiliki jumlah terbesar dan juga jumlah tersebut
    return {
        subarray: arr.slice(start, end + 1), // subarray dari indeks 'start' hingga 'end'
        sum: maxSoFar // jumlah terbesar dari subarray tersebut
    };
}

// Contoh input array a = [-2, -3, 4, -1, -2, 1, 5, -3]
const result = arrSum([-2, -3, 4, -1, -2, 1, 5, -3]);

// Output hasil berupa subarray dengan jumlah terbesar dan jumlahnya
console.log("Subarray dengan jumlah terbesar: ", result.subarray);
console.log("Jumlah: ", result.sum);
