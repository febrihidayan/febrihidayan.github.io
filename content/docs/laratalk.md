---
title: Laratalk
description: Laratalk adalah package Laravel untuk kebutuhan obrolan waktu nyata di aplikasi Anda
tags: 
    - Laravel
    - Realtime
    - Chatting
    - Pusher
    - Laravel Package
    - PHP
---

## Peryaratan

- PHP >= 7.2
- Laravel >= 6.2
- Pusher API

## Fitur

- Obrolan pribadi dan group
- Fungsi pencarian
- Mode gelap
- Pengaturan profil pengguna

## Installasi

Install package Laratalk
```
composer require febrihidayan/laratalk
```

Kemudian jalankan artisan berikut untuk publish asset
```
php artisan laratalk:install
```

## Konfigurasi

Jangan lupa atur pusher Anda di `.env`
```
BROADCAST_DRIVER=pusher
PUSHER_APP_ID=
PUSHER_APP_KEY=
PUSHER_APP_SECRET=
PUSHER_APP_CLUSTER=ap1
```

Selanjutnya Anda bisa konfigurasi di file `laratalk.php` di folder config aplikasi Anda.