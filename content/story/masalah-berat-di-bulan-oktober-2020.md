---
title: Masalah Berat Di Bulan Oktober 2020
description: Saya mengalami hal berat dan penuh tantangan untuk menyelesai masalah di sekolahprogram.com
---

Semua itu terjadi ketika saya akan migrasi ke editor markdown, awalnya kelihatan mudah dan berjalan dengan lancar di lokal server. Setelah menyelesaikan selama kurang dari 3 pekan dan melakukan maintenance, semua itu seakan-akan gagal menuju tujuan yang seharusnya dapat di selesaikan tepat waktu.

Hal ini terjadi berawal dari Laravel 7 yang menggunakan package `laravel-cors` untuk keamanan dari penggunakan Rest API dan sebagainya. Saya melihat itu berjalan dengan lancar di lokal server dan tidak berjalan baik di serve hosting. Saya pikir ini terjadi pada konfirgurasi di berkas `cors.php`, ternyata tidak. Saya sudah membuka issue di `https://github.com/fruitcake/laravel-cors/issues` tetapi belum memiliki respon apapun, kemungkinan tim pengembang sedang sibuk.

Tentu saja hal itu sangat membingungkan dan mulai bosan untuk melakukan pengembangan kedepannya, akan tetapi saya telah menemukan masalah tersebut di karenakan proses input data dengan skrip `<?` tersebut membuat akses cross di blokir di Laravel. Saat ini saya sedang bertanya-tanya kenapa hal itu bisa terjadi dan bagaimana memecahkan masalah tersebut. Tunggu kabar dari saya selanjutnya disini.