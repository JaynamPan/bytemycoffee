Penulis: Jaynam Penerjemah: AI Dikemas kini pada 27 Ogos 2024

## 2. Melihat Secara Singkat tentang Pengaturcaraan

Selamat datang ke dunia komputer yang menakjubkan! Sebelum kita memulakan kerja pengaturcaraan, adalah penting untuk memahami lebih lanjut tentang komputer. Mari kita terokai beberapa asas tentang komputer berkaitan dengan pengaturcaraan.

### 2.1 Bagaimana komputer memproses maklumat

**(1) Pengenalan kepada kod binari**

Pernahkah anda tertanya-tanya bagaimana komputer, tablet, atau telefon pintar anda tahu bagaimana melakukan pelbagai perkara menarik? Semua ini berkaitan dengan cara ia memproses maklumat. Mari kita menyelami asas proses ini, bermula dengan sesuatu yang dipanggil "kod binari". Pertama, mari kita fikirkan bagaimana kita mewakili maklumat dalam kehidupan seharian kita.

**Cara mewakili maklumat dalam dunia harian kita**

Dalam kehidupan seharian, kita menggunakan pelbagai cara untuk mewakili dan berkongsi maklumat. Contohnya:

- Bahasa: Sama ada ia ditulis atau dituturkan, kita boleh berkomunikasi dan berkongsi maklumat dengan simbol yang berdasarkan huruf, kata dan bunyi. Setiap huruf mempunyai bentuk dan makna tertentu, dan setiap kata atau ayat yang kita ucapkan menyampaikan makna tertentu.
- Simbol grafik dan gambar: Simbol trafik, lukisan, dan gambar boleh mengandungi banyak maklumat.
- Bunyi: Kita juga menggunakan pelbagai bunyi untuk menyampaikan makna. Bunyi loceng pintu boleh memberitahu kita bahawa ada pengunjung. Bunyi siren memberi amaran kepada kita.

Dengan cara yang sama, komputer memerlukan sistem khas untuk memahami dan memproses maklumat. Sistem ini ialah kod binari, yang merupakan bahasa universal yang terdiri daripada hanya dua simbol: 0 dan 1. Simbol-simbol ini bekerja bersama untuk mewakili pelbagai jenis data, dari nombor dan huruf kepada gambar dan bunyi. "Binari" merujuk kepada "sistem binari", yang menggunakan hanya dua simbol (0 dan 1). Dan "kod" melibatkan penggunaan set simbol atau peraturan untuk menyandikan, menyahkod, atau berkomunikasi maklumat dalam cara yang menjadikannya boleh difahami atau digunakan, terutamanya dalam konteks komputer dan pemprosesan maklumat.

**Sistem Binari**

Dalam kehidupan seharian kita, kita biasanya menggunakan nombor berasaskan 10 digit: 0 hingga 9. Mari kita lakukan sedikit matematik sederhana. Jika anda menambah 1 kepada 0, hasilnya adalah 1. Tambah 1 lagi, dan anda akan mendapat 2. Jika kita menambah 1 sembilan kali kepada 0, kita akan menggunakan semua 10 digit dari 0 hingga 9. Tetapi bagaimana jika kita menambah 1 sepuluh kali kepada 0? Hasilnya adalah 10. Mari kita lihat lebih dekat "10". Ia terdiri daripada "1" dan "0", dan "1" terletak di sebelah kiri "0". Namun, jika kita menambah dua digit dalam "10", iaitu 1 ditambah 0, hasilnya adalah 1. Walau bagaimanapun, penambahan ringkas ini tidak menerangkan bagaimana '10' mewakili nombor yang sama dengan 10 dalam sistem desimal kita.

Dalam kehidupan seharian, kecuali dinyatakan sebaliknya, nombor yang kita gunakan adalah berdasarkan "sistem desimal". Perkataan "desimal" berasal dari perkataan Latin "decem" yang bermaksud "sepuluh". "Sistem desimal" merujuk kepada sistem nombor yang berasaskan kuasa sepuluh. Dalam sistem desimal, setiap nilai tempat adalah sepuluh kali ganda nilai tempat di sebelah kanannya. Setiap digit dalam nombor mewakili nilai tempat yang berbeza, yang dalam sistem desimal adalah kuasa sepuluh.

Contohnya, ambil nombor 345:

- Digit 5 berada di tempat "unit" (10^0, sepuluh kuasa sifar), mewakili 5.
- Digit 4 berada di tempat "puluh" (10^1, sepuluh kuasa satu), mewakili 4 × 10 = 40.
- Digit 3 berada di tempat "ratus" (10^2, sepuluh kuasa dua), mewakili 3 × 100 = 300.

Menambah nilai-nilai ini (300 + 40 + 5) memberikan kita nilai keseluruhan 345.

Sekarang, mari kita terokai sistem binari. Tidak seperti sistem desimal, yang menggunakan sepuluh digit, sistem binari hanya menggunakan dua digit: 0 dan 1. Setiap digit dalam nombor binari mewakili kuasa 2, bukan 10.

Sebagai contoh, dalam nombor binari 101:

- Digit paling kanan (1) berada di tempat "unit" (2^0, dua kuasa sifar), yang mewakili 1.
- Digit di tengah (0) berada di tempat "dua" (2^1, dua kuasa satu), yang mewakili 0 × 2 = 0.
- Digit paling kiri (1) berada di tempat "empat" (2^2, dua kuasa dua), yang mewakili 1 × 4 = 4.

Untuk mencari nilai desimal nombor binari 101, tambahkan nilai-nilai ini: 4 (dari tempat "empat") + 0 (dari tempat "dua") + 1 (dari tempat "unit") = 5.

Jadi, nombor binari 101 bersamaan dengan nombor desimal 5.

**Mengapa Komputer Menggunakan Sistem Binari**

Sistem desimal adalah sistem nombor yang paling sering digunakan dan digunakan dalam pengiraan harian serta aritmetik. Manusia mempunyai sepuluh jari, yang menjadikan pengiraan dalam sistem desimal mudah dan langsung. Kaedah pengiraan semulajadi ini mungkin mempengaruhi perkembangan sistem desimal. Walaupun sistem desimal mudah dan sesuai untuk manusia, ia bukan pilihan terbaik untuk komputer. Sebaliknya, sistem binari lebih sesuai untuk mesin elektronik seperti komputer. Sebabnya terletak pada "anatomi" komputer.

Komputer menggunakan litar elektrik yang boleh berada dalam keadaan hidup atau mati. Dua keadaan ini secara semula jadi diwakili oleh digit binari 0 dan 1. Binari adalah ideal untuk komputer kerana ia sepadan dengan isyarat elektrik hidup/mati mereka. Dengan menggunakan binari, komputer boleh memproses dan menyimpan data dengan cekap.

CPU, komponen utama komputer, bergantung pada transistor sebagai unit asas. Transistor adalah elemen litar kecil dan sederhana yang boleh bertindak sebagai suis elektronik hidup/mati dan memperkuat isyarat elektrik yang lemah. CPU moden mengandungi berjuta-juta transistor, yang berfungsi sebagai suis hidup/mati untuk memproses dan menyimpan data. Begitu juga RAM, GPU, dan SSD (Solid State Drive) juga menggunakan transistor.

Dalam komputer, hampir semua transistor berfungsi sebagai suis hidup/mati, yang bermaksud mereka beroperasi dalam dua keadaan sahaja: hidup dan mati. Jadi, adalah semula jadi dan mudah untuk menggunakan 1 untuk keadaan "hidup" dan 0 untuk keadaan "mati".

**(2) Bagaimana Kod Binari Mewakili Data**

Untuk memahami bagaimana kod binari mewakili data, mari kita pertimbangkan terlebih dahulu bagaimana PC memproses dan menyimpan maklumat. Apabila program sedang berjalan, siri arahan mereka dimuatkan ke dalam RAM. Bersama arahan dari program lain, ini disusun untuk dilaksanakan. CPU secara berterusan mengambil arahan dari susunan ini, satu demi satu. Setiap kali CPU mengambil arahan, ia membaca dari RAM, dan kadangkala arahan tersebut melibatkan membaca dari atau menulis ke cakera keras. CPU moden boleh memproses sehingga 64 bit data pada satu masa, manakala CPU yang lebih lama mungkin hanya memproses sehingga 32 bit.

Ini menimbulkan beberapa soalan: Berapa banyak bit data yang patut dibaca atau ditulis dari RAM pada satu masa? Berapa banyak bit yang patut kita gunakan sebagai unit asas? Jika CPU hanya membaca atau menulis 1 bit pada satu masa, ia akan sangat tidak cekap dan memakan masa kerana frekuensi operasi yang tinggi diperlukan. Oleh itu, CPU 64-bit biasanya membaca atau menulis 64 bit data sekaligus, dan CPU 32-bit memproses 32 bit pada satu masa untuk menyeimbangkan prestasi dan kecekapan. RAM biasanya menggunakan 8 bit sebagai unit asasnya.

Pemilihan unit 8-bit untuk RAM dipengaruhi oleh faktor sejarah, teknologi, dan penstandardan. Komputer awal menggunakan pelbagai saiz unit data, tetapi dengan kemajuan teknologi, unit 8-bit menjadi lebih biasa. Saiz ini mencapai keseimbangan antara kecekapan dan kemampuan, terutamanya untuk mewakili watak dan data.

**Kod ASCII**

Kod ASCII (American Standard Code for Information Interchange) adalah standar pengkodean karakter yang digunakan untuk mewakili teks dalam komputer dan perangkat berbasis teks lainnya. Ini adalah dasar bagi banyak skema pengkodean modern. ASCII menggunakan angka biner 7-bit, memungkinkan untuk 128 karakter unik, dengan kode berkisar dari 0 hingga 127.

Karakter standar ASCII meliputi:

- Karakter Kontrol (0–31):

  Ini adalah karakter non-cetak yang mengontrol pemrosesan teks. Contohnya termasuk:

  - `0` (NUL): Karakter nol
  - `9` (TAB): Tab horizontal
  - `10` (LF): Umpan baris (baris baru)
  - `13` (CR): Pengembalian karpet

- Karakter Cetak (32–127):

  Ini adalah karakter yang terlihat seperti huruf, angka, tanda baca, dan simbol. Contohnya termasuk:

  - `32` (SPACE): Karakter spasi
  - `65` (A): Huruf kapital A
  - `97` (a): Huruf kecil a
  - `48` (0): Digit 0
  - `33` (!): Tanda seru

Kode ASCII menggunakan 7 bit, yang dapat mengkodekan 128 karakter, tetapi komputer modern menggunakan 8 bit sebagai unit data dasar. Unit 8-bit ini, atau byte, memungkinkan pengkodean 256 karakter, yang umumnya cukup untuk bahasa Inggris dan bahasa Barat lainnya. Untuk bahasa yang lebih kompleks, byte tambahan digunakan untuk mewakili karakter, memastikan penggunaan memori dan penyimpanan yang efisien. Meskipun ASCII sendiri memerlukan hanya 7 bit, representasi 8-bit umum di komputer, dengan bit tambahan biasanya diatur ke 0. Sebagai contoh, kode ASCII untuk huruf kapital "A" adalah 65 (desimal) atau 01000001 (biner), dengan bit tambahan yang nol.

**Simbol Pengendali Matematik dalam Komputer**

Pada papan kekunci standard, anda mungkin perasan ketiadaan beberapa simbol matematik, seperti tanda darab (×). Sebaliknya, komputer sering menggunakan simbol alternatif untuk memudahkan. Berikut adalah beberapa contoh yang biasa digunakan:

- Darab: `*`
- Bahagi: `/`
- Modulo (sisa pembahagian): `%`
- Eksponen: `**` (sering digunakan dalam bahasa pengaturcaraan seperti Python), dan dalam beberapa kes, `^` (biasanya digunakan dalam kalkulator).

Simbol-simbol ini digunakan untuk melakukan operasi aritmetik dalam pelbagai persekitaran pengaturcaraan dan kalkulator.

**Unit Saiz Data**

Komputer moden menggunakan 8 bit sebagai unit data asas, yang dikenali sebagai bait (B). Berikut adalah unit saiz data yang lain dan penukaran mereka:

- Bit (b, dalam huruf kecil): Unit data terkecil dalam pengkomputeran. Ia mewakili digit binari, yang boleh menjadi `0` atau `1`.
- Bait (B, dalam huruf besar): Unit saiz data asas, terdiri daripada 8 bit.

Untuk ukuran yang lebih besar, dua penukaran yang berbeza digunakan: binari dan desimal. Unit binari berdasarkan kuasa 2, manakala unit desimal menggunakan kuasa 10. Dalam pengkomputeran, unit binari adalah standard, manakala unit desimal sering digunakan dalam pemasaran. Bermula dari bait, unit binari yang lebih besar adalah 2^10 (1024) kali unit yang lebih kecil, manakala unit desimal yang lebih besar adalah 10^3 (1000) kali unit yang lebih kecil.

Unit Berdasarkan Binari:

- Kilobyte (KB): 1 KB = 1,024 bait (2^10 bait).
- Megabyte (MB): 1 MB = 1,024 KB = 1,048,576 bait (2^20 bait).
- Gigabyte (GB): 1 GB = 1,024 MB = 1,073,741,824 bait (2^30 bait).
- Terabyte (TB): 1 TB = 1,024 GB = 1,099,511,627,776 bait (2^40 bait).

Unit Berdasarkan Desimal:

- Kilobyte (KB): 1 KB = 1,000 bait (10^3 bait).
- Megabyte (MB): 1 MB = 1,000 KB = 1,000,000 bait (10^6 bait).
- Gigabyte (GB): 1 GB = 1,000 MB = 1,000,000,000 bait (10^9 bait).
- Terabyte (TB): 1 TB = 1,000 GB = 1,000,000,000,000 bait (10^12 bait).

Untuk membezakan dengan jelas pengukuran berdasarkan binari daripada yang berdasarkan desimal, IEC (International Electrotechnical Commission) memperkenalkan awalan "bi" untuk unit-unit ini, yang bermaksud "binari". Unit-unit ini mempunyai nilai yang sama dengan penukaran binari tetapi dengan nama yang lebih mudah dikenali.

- Kibibyte (KiB): 1 KiB = 1,024 bait (2^10 bait).
- Mebibyte (MiB): 1 MiB = 1,024 KiB = 1,048,576 bait (2^20 bait).
- Gibibyte (GiB): 1 GiB = 1,024 MiB = 1,073,741,824 bait (2^30 bait).
- Tebibyte (TiB): 1 TiB = 1,024 GiB = 1,099,511,627,776 bait (2^40 bait).

Penukaran desimal sering digunakan dalam pemasaran kerana ia menghasilkan nombor yang lebih besar untuk kapasiti storan yang sama. Sebagai contoh, pemacu keras yang dilabelkan mempunyai 500 GB (desimal) sebenarnya adalah 500,000,000,000 bait, yang lebih kurang 465 GiB (binari).

**Representasi Biner untuk Jenis Data yang Berbeda**

Semua data, tanpa mengira jenisnya, akhirnya diwakili dalam bentuk biner. Data diproses dan disimpan sebagai urutan 0 dan 1 dalam komputer. Untuk menyimpan teks, imej, audio, atau jenis data lain, kita perlu "menerjemahkannya" ke dalam kod biner, yang disebut "pengekodan". Apabila kita perlu menggunakan data ini dalam cara yang mesra manusia, perisian mentafsir kod biner untuk menukarkannya menjadi teks, imej, dan format lain yang kita fahami, yang disebut "penyahkodan".

Berikut adalah beberapa contoh pengekodan untuk pelbagai jenis data:

- **Teks**: Watak-watak diwakili menggunakan piawaian pengekodan seperti ASCII atau Unicode (Kod Sejagat). Setiap watak diberikan kod biner yang unik. Sebagai contoh, kod ASCII untuk 'A' adalah 01000001 dalam bentuk biner.
- **Nombor**: Nombor diwakili menggunakan pelbagai format biner, seperti integer (nombor tanpa bahagian pecahan, seperti `-3`, `0`) dan nombor titik terapung (nombor dengan bahagian pecahan, seperti `3.14`, `-0.01`). Sebagai contoh, integer 5 adalah 00000101 dalam representasi biner 8-bit.
- **Audio**: Data audio biasanya diwakili sebagai siri sampel. Sampel-sampel ini diambil pada selang masa yang tetap dan dikodkan dalam bentuk biner. Sebagai contoh, sampel audio 16-bit mungkin diwakili sebagai nombor biner 16-bit.
- **Imej**: Imej terdiri daripada piksel, masing-masing dengan nilai warna. Dalam imej grayscale, setiap piksel mungkin diwakili oleh nombor biner 8-bit yang menunjukkan intensitinya. Dalam imej warna, setiap piksel biasanya diwakili oleh gabungan nombor biner yang sepadan dengan komponen warna merah, hijau, dan biru.
- **Video**: Video adalah urutan imej (frame) dan sering termasuk audio. Setiap frame adalah imej yang diwakili dalam bentuk biner, dan frame-frame tersebut dipaparkan dalam susunan yang cepat untuk mencipta ilusi gerakan.
- **Fail dan Format**: Format fail yang berbeza (seperti JPEG untuk imej, MP3 untuk audio, MP4 untuk video) menentukan cara tertentu untuk mengodkan data. Format-format ini menggunakan kod biner untuk menyusun dan memampatkan data dengan cekap.

**Penghampiran Data**

Bayangkan anda mempunyai timbunan mainan yang sangat besar dan perlu memasukannya ke dalam kotak kecil. Penghampiran data adalah seperti mencari cara untuk menyusun dan mengecilkan mainan agar semuanya muat dalam kotak tanpa ada yang tertinggal. Dalam komputer, ia bermaksud membuat fail menjadi lebih kecil supaya memerlukan ruang yang kurang dan lebih cepat untuk dihantar atau disimpan.

Berikut adalah contoh ringkas algoritma Run-Length Encoding (RLE): jika anda mempunyai satu urutan huruf Inggeris "AAAAAAADDDDCCVSSSSSSSSS", yang terdiri daripada 23 aksara yang memerlukan 23 bait ruang. Kita boleh mengira berapa kali setiap huruf berulang dan menggantikan huruf tersebut dengan kiraan dan huruf itu sendiri: "7A4D2C1V9S". Urutan baru ini terdiri daripada 5 kiraan dan 5 huruf. Kita boleh menggunakan satu bait untuk mewakili setiap kiraan dan kod ASCII untuk huruf, yang menjadikannya jumlah 10 bait secara keseluruhan. Apabila kita perlu menyahhampirkan urutan tersebut, kita membaca kiraan dan huruf, kemudian ulang huruf mengikut kiraan. Dengan cara ini, kita mengurangkan saiz data dan menggunakan ruang yang lebih sedikit.

Untuk jenis data yang berbeza, biasanya kita memilih algoritma penghampiran yang berbeza kerana setiap satu mempunyai kelebihan dan kekurangan tersendiri.