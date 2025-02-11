Penulis: Jaynam Penerjemah: AI Diperbarui pada 27 Agustus 2024

## 2. Lihat Sekilas Pemrograman

Selamat datang di dunia komputer yang menakjubkan! Sebelum kita mulai dan melakukan beberapa pekerjaan pemrograman, penting untuk memahami lebih lanjut tentang komputer. Mari kita eksplorasi beberapa hal dasar tentang komputer yang terkait dengan pemrograman.

### 2.1  Bagaimana Komputer Memproses Informasi

**(1) Pengenalan Kode Biner**

Pernahkah Anda bertanya-tanya bagaimana komputer, tablet, atau smartphone Anda tahu bagaimana melakukan begitu banyak hal keren? Semuanya berkaitan dengan bagaimana komputer memproses informasi. Mari kita mulai dengan dasar-dasarnya, dimulai dengan sesuatu yang disebut "kode biner". Pertama, mari kita pikirkan bagaimana kita mewakili informasi dalam kehidupan sehari-hari kita.

**Cara Mewakili Informasi dalam Dunia Sehari-Hari**

Dalam kehidupan sehari-hari, kita menggunakan berbagai cara untuk mewakili dan berbagi informasi. Misalnya:

- Bahasa: Baik itu tertulis atau diucapkan, kita dapat berkomunikasi dan berbagi informasi melalui simbol-simbol yang berbasis huruf, kata, dan suara. Setiap huruf memiliki bentuk dan makna tertentu, dan setiap kata atau kalimat yang kita ucapkan menyampaikan makna tertentu.
- Simbol Grafik dan Gambar: Simbol lalu lintas, gambar, dan foto bisa mengandung banyak informasi.
- Suara: Kita juga menggunakan berbagai suara untuk menyampaikan beberapa makna. Bunyi bel pintu bisa memberi tahu kita bahwa ada pengunjung. Sirine memberikan peringatan.

Dengan cara yang sama, komputer memerlukan sistem khusus untuk memahami dan memproses informasi. Sistem ini adalah kode biner, yang seperti bahasa universal yang terdiri dari hanya dua simbol: 0 dan 1. Simbol-simbol ini bekerja sama untuk mewakili berbagai jenis data, mulai dari angka dan huruf hingga gambar dan suara. "Biner" mengacu pada "sistem biner", yang hanya menggunakan dua simbol (0 dan 1). Dan "kode" melibatkan penggunaan satu set simbol atau aturan untuk mengkodekan, mendekodekan, atau berkomunikasi informasi dengan cara yang dapat dipahami atau digunakan, terutama dalam konteks komputer dan pemrosesan informasi.

**Sistem Biner**

Dalam kehidupan sehari-hari kita, biasanya kita menggunakan angka berbasis 10 digit: 0 hingga 9. Mari kita lakukan sedikit matematika sederhana. Jika Anda menambahkan 1 ke 0, hasilnya adalah 1. Tambahkan 1 lagi, dan Anda mendapatkan 2. Jika kita menambahkan 1 sembilan kali ke 0, kita akan menggunakan semua 10 digit dari 0 hingga 9. Tetapi bagaimana jika kita menambahkan 1 sepuluh kali ke 0? Hasilnya adalah 10. Mari kita lihat lebih dekat "10". Ini terdiri dari "1" dan "0", dan "1" berada di sebelah kiri "0". Nah, jika kita menjumlahkan kedua digit dari "10", yaitu 1 ditambah 0, hasilnya adalah 1. Namun, penjumlahan sederhana ini tidak menjelaskan bagaimana '10' mewakili angka yang sama dengan 10 dalam sistem desimal kita.

Dalam kehidupan sehari-hari, kecuali disebutkan lain, angka yang kita gunakan didasarkan pada "sistem desimal". Kata "desimal" berasal dari kata Latin "decem" yang berarti "sepuluh". "Sistem desimal" mengacu pada sistem angka yang berbasis kekuatan sepuluh. Dalam sistem desimal, setiap nilai tempat adalah sepuluh kali nilai tempat di sebelah kanannya. Setiap digit dalam angka mewakili nilai tempat yang berbeda, yang dalam sistem desimal adalah kekuatan sepuluh.

Misalnya, ambil angka 345:

- Digit 5 berada di tempat "satuan" (10^0, sepuluh pangkat nol), mewakili 5.
- Digit 4 berada di tempat "puluhan" (10^1, sepuluh pangkat satu), mewakili 4 × 10 = 40.
- Digit 3 berada di tempat "ratusan" (10^2, sepuluh pangkat dua), mewakili 3 × 100 = 300.

Menambahkan nilai-nilai ini bersama-sama (300 + 40 + 5) memberi kita nilai total 345.

Sekarang, mari kita jelajahi sistem biner. Berbeda dengan sistem desimal, yang menggunakan sepuluh digit, sistem biner hanya menggunakan dua digit: 0 dan 1. Setiap digit dalam angka biner mewakili kekuatan 2, bukan 10.

Misalnya, dalam angka biner 101:

- Digit paling kanan (1) berada di tempat "satuan" (2^0, dua pangkat nol), yang mewakili 1.
- Digit tengah (0) berada di tempat "dua" (2^1, dua pangkat satu), yang mewakili 0 × 2 = 0.
- Digit paling kiri (1) berada di tempat "empat" (2^2, dua pangkat dua), yang mewakili 1 × 4 = 4.

Untuk menemukan nilai desimal dari angka biner 101, tambahkan nilai-nilai ini bersama-sama: 4 (dari tempat "empat") + 0 (dari tempat "dua") + 1 (dari tempat "satuan") = 5.

Jadi, angka biner 101 sama dengan angka desimal 5.

**Mengapa Komputer Menggunakan Sistem Biner**

Sistem desimal adalah sistem angka yang paling umum digunakan dan dipakai dalam perhitungan sehari-hari serta aritmetika. Manusia memiliki sepuluh jari, sehingga menghitung dengan sistem desimal terasa intuitif dan mudah. Metode penghitung alami ini kemungkinan mempengaruhi perkembangan sistem desimal. Meskipun sistem desimal sederhana dan nyaman bagi manusia, itu bukan pilihan terbaik untuk komputer. Sebaliknya, sistem biner lebih sesuai untuk mesin elektronik tersebut. Alasannya terletak pada "anatomi" komputer.

Komputer menggunakan sirkuit elektronik yang bisa berada dalam dua keadaan: menyala atau mati. Keadaan-keadaan ini secara alami diwakili oleh digit biner 0 dan 1. Sistem biner sangat ideal untuk komputer karena cocok dengan sinyal listrik yang menyala/mati. Dengan menggunakan sistem biner, komputer dapat memproses dan menyimpan data dengan efisien.

CPU, komponen kunci dari sebuah komputer, bergantung pada transistor sebagai unit dasar. Transistor adalah elemen sirkuit kecil dan sederhana yang dapat berfungsi sebagai saklar elektronik menyala/mati dan memperkuat sinyal listrik yang lemah. CPU modern mengandung miliaran transistor, yang berfungsi sebagai saklar menyala/mati untuk memproses dan menyimpan data. Begitu juga RAM, GPU, dan SSD (Solid State Drive) juga menggunakan transistor.

Dalam sebuah komputer, hampir semua transistor berfungsi sebagai saklar menyala/mati, yang berarti mereka beroperasi dalam dua keadaan saja: menyala dan mati. Jadi, adalah hal yang alami dan sederhana untuk menggunakan 1 untuk keadaan "menyala" dan 0 untuk keadaan "mati."

**(2) Bagaimana Kode Biner Mewakili Data**

Untuk memahami bagaimana kode biner mewakili data, mari kita pertimbangkan bagaimana PC memproses dan menyimpan informasi. Ketika sebuah program sedang berjalan, serangkaian instruksi dimuat ke dalam RAM. Bersama dengan instruksi dari program lainnya, instruksi tersebut disusun untuk dieksekusi. CPU terus-menerus mengambil instruksi dari antrean ini, satu per satu. Setiap kali CPU mengambil instruksi, ia membaca dari RAM, dan terkadang instruksi tersebut melibatkan membaca dari atau menulis ke hard drive. CPU modern dapat memproses hingga 64 bit data sekaligus, sementara CPU yang lebih lama mungkin hanya memproses hingga 32 bit.

Ini menimbulkan beberapa pertanyaan: Berapa banyak bit data yang harus dibaca atau ditulis komputer dari RAM sekaligus? Berapa banyak bit yang harus kita gunakan sebagai unit dasar? Jika CPU hanya membaca atau menulis 1 bit sekaligus, itu akan sangat tidak efisien dan memakan waktu karena frekuensi operasi yang tinggi. Oleh karena itu, CPU 64-bit biasanya membaca atau menulis 64 bit data sekaligus, dan CPU 32-bit memproses 32 bit sekaligus untuk menyeimbangkan kinerja dan efisiensi. RAM umumnya menggunakan 8 bit sebagai unit dasarnya.

Pilihan unit 8 bit untuk RAM dipengaruhi oleh faktor historis, teknologi, dan standar. Komputer awal menggunakan berbagai ukuran unit data, tetapi seiring kemajuan teknologi, unit 8 bit menjadi lebih umum. Ukuran ini mencapai keseimbangan antara efisiensi dan kapabilitas, terutama untuk mewakili karakter dan data.

**Kode ASCII**

ASCII (American Standard Code for Information Interchange) adalah standar pengkodean karakter yang digunakan untuk merepresentasikan teks dalam komputer dan perangkat berbasis teks lainnya. ASCII adalah dasar untuk banyak skema pengkodean modern. ASCII menggunakan angka biner 7-bit, memungkinkan untuk 128 karakter unik, dengan kode yang berkisar dari 0 hingga 127.

Karakter standar ASCII mencakup:

- Karakter Kontrol (0–31):

  Ini adalah karakter non-cetak yang mengontrol pemrosesan teks. Contohnya termasuk:

  - `0` (NUL): Karakter null
  - `9` (TAB): Tab horizontal
  - `10` (LF): Pemberhentian baris (newline)
  - `13` (CR): Kembali ke awal baris (carriage return)

- Karakter Cetak (32–127):

  Ini adalah karakter yang terlihat seperti huruf, angka, tanda baca, dan simbol. Contohnya termasuk:

  - `32` (SPACE): Karakter spasi
  - `65` (A): Huruf kapital A
  - `97` (a): Huruf kecil a
  - `48` (0): Digit 0
  - `33` (!): Tanda seru

Kode ASCII menggunakan 7 bit, yang dapat menyandikan 128 karakter, tetapi komputer modern menggunakan 8 bit sebagai unit data dasar. Unit 8-bit ini, atau byte, memungkinkan untuk menyandikan 256 karakter, yang umumnya cukup untuk bahasa Inggris dan bahasa-bahasa Barat lainnya. Untuk bahasa yang lebih kompleks, byte tambahan digunakan untuk merepresentasikan karakter, memastikan penggunaan memori dan penyimpanan yang efisien. Meskipun ASCII itu sendiri hanya memerlukan 7 bit, representasi 8-bit umum dalam komputer, dengan bit tambahan biasanya diatur ke 0. Misalnya, kode ASCII untuk huruf kapital "A" adalah 65 (desimal) atau 01000001 (biner), dengan bit tambahan yang diatur ke nol.

**Beberapa Simbol Operator Matematika di Komputer**

Pada keyboard standar, Anda mungkin menyadari bahwa beberapa simbol matematika, seperti tanda perkalian (×), tidak tersedia. Sebagai gantinya, komputer sering menggunakan simbol alternatif untuk kesederhanaan. Berikut adalah beberapa contoh umum:

- Perkalian: `*`
- Pembagian: `/`
- Modulo (sisa bagi): `%`
- Eksponensiasi: `**` (sering digunakan dalam bahasa pemrograman seperti Python), dan dalam beberapa kasus, `^` (umumnya digunakan di kalkulator).

Simbol-simbol ini digunakan untuk melakukan operasi aritmatika di berbagai lingkungan pemrograman dan kalkulator.

**Satuan Ukuran Data**

Komputer modern menggunakan 8 bit sebagai unit data dasar, yang dikenal sebagai byte (B). Berikut adalah beberapa satuan ukuran data umum dan konversinya:

- Bit (b, huruf kecil): Unit data terkecil dalam komputasi. Ini mewakili digit biner, yang bisa berupa `0` atau `1`.
- Byte (B, huruf besar): Unit ukuran data dasar, terdiri dari 8 bit.

Untuk ukuran yang lebih besar, dua konversi yang berbeda digunakan: biner dan desimal. Unit berbasis biner didasarkan pada pangkat 2, sedangkan unit desimal menggunakan pangkat 10. Dalam komputasi, unit berbasis biner adalah standar, sedangkan unit desimal sering digunakan dalam pemasaran. Mulai dari byte, unit berbasis biner yang lebih besar adalah 2^10 (1024) kali dari unit yang lebih kecil, sementara unit berbasis desimal yang lebih besar adalah 10^3 (1000) kali dari unit yang lebih kecil.

Unit Berbasis Biner:

- Kilobyte (KB): 1 KB = 1.024 byte (2^10 byte).
- Megabyte (MB): 1 MB = 1.024 KB = 1.048.576 byte (2^20 byte).
- Gigabyte (GB): 1 GB = 1.024 MB = 1.073.741.824 byte (2^30 byte).
- Terabyte (TB): 1 TB = 1.024 GB = 1.099.511.627.776 byte (2^40 byte).

Unit Berbasis Desimal:

- Kilobyte (KB): 1 KB = 1.000 byte (10^3 byte).
- Megabyte (MB): 1 MB = 1.000 KB = 1.000.000 byte (10^6 byte).
- Gigabyte (GB): 1 GB = 1.000 MB = 1.000.000.000 byte (10^9 byte).
- Terabyte (TB): 1 TB = 1.000 GB = 1.000.000.000.000 byte (10^12 byte).

Untuk membedakan dengan jelas antara pengukuran berbasis biner dan desimal, IEC (Komisi Elektroteknik Internasional) memperkenalkan awalan "bi" untuk unit-unit tersebut, yang berarti "biner". Unit-unit ini memiliki nilai yang sama dengan konversi biner, tetapi dengan nama yang lebih mudah dibedakan.

- Kibibyte (KiB): 1 KiB = 1.024 byte (2^10 byte).
- Mebibyte (MiB): 1 MiB = 1.024 KiB = 1.048.576 byte (2^20 byte).
- Gibibyte (GiB): 1 GiB = 1.024 MiB = 1.073.741.824 byte (2^30 byte).
- Tebibyte (TiB): 1 TiB = 1.024 GiB = 1.099.511.627.776 byte (2^40 byte).

Konversi desimal sering digunakan dalam pemasaran karena menghasilkan angka yang lebih besar untuk kapasitas penyimpanan yang sama. Misalnya, hard drive yang diberi label 500 GB (desimal) sebenarnya adalah 500.000.000.000 byte, yang kira-kira setara dengan 465 GiB (biner).

**Representasi Biner untuk Berbagai Tipe Data**

Semua data, terlepas dari jenisnya, pada akhirnya diwakili dalam bentuk biner. Data diproses dan disimpan sebagai urutan 0 dan 1 di komputer. Untuk menyimpan teks, gambar, audio, atau jenis data lainnya, kita perlu "menerjemahkannya" menjadi kode biner, yang disebut "pengkodean". Ketika kita perlu menggunakan data ini dalam cara yang ramah manusia, perangkat lunak mengartikan kode biner untuk mengubahnya menjadi teks, gambar, dan format lain yang dapat kita pahami, yang disebut "dekode".

Berikut adalah beberapa contoh pengkodean berbagai tipe data:

- **Teks**: Karakter diwakili menggunakan standar pengkodean seperti ASCII atau Unicode (Kode Universal). Setiap karakter diberikan kode biner yang unik. Misalnya, kode ASCII untuk 'A' adalah 01000001 dalam representasi biner.
- **Angka**: Angka diwakili menggunakan berbagai format biner, seperti bilangan bulat (angka tanpa bagian pecahan, seperti `-3`, `0`) dan angka titik apung (angka dengan bagian pecahan, seperti `3.14`, `-0.01`). Misalnya, bilangan bulat 5 diwakili sebagai 00000101 dalam representasi biner 8-bit.
- **Audio**: Data audio biasanya diwakili sebagai serangkaian sampel. Sampel-sampel ini diambil pada interval yang teratur dan dikodekan dalam biner. Misalnya, sampel audio 16-bit mungkin diwakili sebagai angka biner 16-bit.
- **Gambar**: Gambar terdiri dari piksel, masing-masing dengan nilai warna. Dalam gambar grayscale, setiap piksel mungkin diwakili oleh angka biner 8-bit yang menunjukkan intensitasnya. Dalam gambar berwarna, setiap piksel biasanya diwakili oleh kombinasi angka biner yang sesuai dengan komponen warna merah, hijau, dan biru.
- **Video**: Video adalah urutan gambar (frame) dan sering kali mencakup audio. Setiap frame adalah gambar yang diwakili dalam biner, dan frame-frame tersebut ditampilkan dalam urutan yang cepat untuk menciptakan ilusi gerakan.
- **File dan Format**: Format file yang berbeda (seperti JPEG untuk gambar, MP3 untuk audio, MP4 untuk video) menentukan cara tertentu untuk mengkodekan data. Format-format ini menggunakan kode biner untuk menyusun dan mengompresi data dengan efisien.

**Kompresi Data**

Bayangkan kamu memiliki tumpukan mainan yang sangat banyak dan perlu memasukkannya ke dalam kotak kecil. Kompresi data seperti mencari cara untuk mengatur dan mengecilkan mainan tersebut sehingga semuanya muat di dalam kotak tanpa kehilangan satu pun. Dalam komputer, ini tentang membuat file menjadi lebih kecil sehingga memerlukan ruang yang lebih sedikit dan lebih cepat untuk dikirim atau disimpan.

Berikut adalah contoh sederhana dari algoritma Run-Length Encoding (RLE): jika kamu memiliki urutan huruf Inggris "AAAAAAADDDDCCVSSSSSSSSS", yang terdiri dari 23 karakter dan memakan ruang 23 byte. Kita bisa menghitung berapa kali setiap huruf muncul dan menggantikan huruf-huruf tersebut dengan jumlah dan huruf itu sendiri: "7A4D2C1V9S". Urutan baru ini terdiri dari 5 angka dan 5 huruf. Kita bisa menggunakan satu byte untuk mewakili setiap angka dan menggunakan kode ASCII untuk huruf-hurufnya, yang totalnya menjadi 10 byte. Ketika kita perlu mendekompresi urutan tersebut, kita membaca angka dan huruf, kemudian mengulang huruf sesuai dengan angka tersebut. Dengan cara ini, kita mengurangi ukuran data dan menggunakan ruang yang lebih sedikit.

Untuk berbagai jenis data, biasanya kita memilih algoritma kompresi yang berbeda karena masing-masing memiliki keuntungan dan keterbatasannya sendiri.