# 🛍️ Bizmate Premium E-Commerce UI (HTML & Tailwind CSS)

Tampilan e-commerce mewah, minimalis, dan sangat interaktif yang dikembangkan secara presisi menggunakan **HTML saja (single file)** dengan integrasi penuh **Tailwind CSS v3 CDN** dan didesain berdasarkan panduan warna (Style Guide) biru profesional.

## 🎨 Style Guide & Desain Sistem

Desain ini dibuat mengikuti panduan visual berestetika premium modern (mirip produk kelas atas seperti Apple & Stripe) dengan skema warna spesifik:
*   **Primary Blue (`#1161F5`):** Digunakan untuk aksen utama, tombol CTA primer, badge aktif, dan branding.
*   **Dark Blue (`#033690`):** Gradasi gelap yang memberikan kedalaman visual pada header, banner hero, dan aksen premium.
*   **Light Blue (`#DFE5FF`):** Latar belakang sekunder untuk tombol pendukung, badge, dan highlight.
*   **Dark (`#131415`):** Warna teks utama dan background gelap (Bento-style banner) untuk kontras tinggi yang modern.
*   **Light (`#F2F4F7`):** Background halaman utama dan wadah preview produk studio yang clean.
*   **Gray Light (`#DBE2E8`):** Pembatas (border) tipis yang halus dan rapi.
*   **Gray / Gray Dark (`#787A8C` / `#485666`):** Warna teks deskripsi untuk kemudahan membaca (readability).

---

## 🏗️ Struktur Tampilan Halaman

Aplikasi dikemas rapi dalam layout *responsive single-page* dengan alur menu sebagai berikut:

### 1. Header & Navigation (Aesthetic Minimalist)
*   **Promo Bar:** Banner promo berjalan (gratis ongkir) dengan titik pulsasi interaktif.
*   **Glassmorphism Header:** Efek blur saat di-scroll, logo interaktif `bizmate.`, navigasi horizontal, bar pencarian modern, dan utilitas icon (Wishlist & Cart).
*   **Cart Badge:** Indikator merah dinamis yang otomatis menghitung total barang dalam keranjang belanja.

### 2. Banner Promosi (Hero Slider Carousel)
*   **Carousel Interaktif:** Menampilkan 3 produk unggulan secara bergantian (iPhone 15 Pro, Sony Headphones, dan PS5 Controller) lengkap dengan tombol *Next/Prev* dan titik indikator navigasi yang berubah secara *realtime*.
*   **Bento-style background:** Elemen visual modern dengan bayangan lembut, gradasi warna dari Style Guide, dan layout asimetris yang menakjubkan.

### 3. Kategori Populer (Box Card Grid)
*   **6-Column Grid:** Terdiri dari *Smartphone, Laptop, Audio, Wearables, Gaming, dan Aksesoris*.
*   **Micro-animations:** Transisi melayang (*lifting hover*), pergantian border, serta warna ikon dinamis saat disorot kursor.
*   **Instant Filter:** Mengetuk kategori akan memfilter daftar produk utama di bawah secara instan tanpa memuat ulang halaman.

### 4. Flash Sale Promo (Penawaran Kilat)
*   **Live Countdown Timer:** Timer jam, menit, dan detik yang berdetak mundur secara nyata (*live-ticking*).
*   **Stock Progress Bar:** Indikator persentase keterisian stok barang promo yang tersisa (misal: "Telah Terjual 85%").
*   **Hot Promo Badge:** Tag diskon persentase kontras merah cerah untuk menarik perhatian mata pembeli.

### 5. List Produk & Produk Sedang Promo
*   **Interactive Tabs:** Menu filter tab (*Semua, Promo Spesial, Smartphone, Laptop, Audio*) dengan respon animasi transisi mulus.
*   **Premium Cards:** Desain produk modern tanpa border kaku, dilengkapi detail rating bintang, review kuantitatif, coretan harga asli, dan tombol pintas tambah keranjang instan.

---

## ⚡ Fitur Interaktif Statis (Vanilla JS Engine)

Semua interaksi diolah menggunakan script terpadu di dalam file HTML yang aman, berkinerja tinggi, dan responsif:

1.  **Detail Produk Modal:**
    *   Mengklik gambar atau nama produk akan memicu kemunculan modal popup dengan transisi *fade-in scale*.
    *   **Galeri Thumbnail:** Pengguna dapat menukar fokus gambar utama melalui thumbnail di bawahnya.
    *   **Deskripsi Panjang:** Penjelasan terperinci dan spesifikasi garansi resmi.
    *   **Varian Selector:** Tombol pilihan warna/spesifikasi (misal: *Titanium Natural, Space Gray*) yang menyala biru tebal saat terpilih.
    *   **Quantity Adjuster:** Counter plus/minus dinamis untuk menentukan jumlah unit belanja.
    *   **Double CTA:** "+ Keranjang" untuk menyimpannya, atau "Beli Sekarang" untuk langsung membuka keranjang.

2.  **Add to Cart & Drawer Cart:**
    *   **Dynamic Toast:** Setiap kali menambahkan barang, Toast Notification mewah bersudut melengkung akan meluncur masuk di kanan atas dan hilang otomatis setelah 4 detik.
    *   **Right Side Slide-out Drawer:** Keranjang belanja berupa laci samping yang meluncur masuk secara elegan dengan latar belakang buram (*backdrop blur*).
    *   **Realtime Subtotal Calc:** Menghitung otomatis total harga barang asli, kalkulasi potongan diskon promo, dan hasil akhir bersih yang harus dibayar pembeli.
    *   **Cart Actions:** Tombol modifikasi jumlah langsung di dalam keranjang, penghapusan unit, pembersihan total (*Clear Cart*), dan tombol *Checkout* terintegrasi.

---

## 🚀 Cara Menjalankan Aplikasi

Aplikasi ini sudah di-host secara lokal di komputer Anda:
1.  Buka web browser favorit Anda (Chrome, Safari, Firefox, Edge, dll.).
2.  Ketik alamat URL berikut di address bar:
    ```text
    http://localhost:8000
    ```
3.  Nikmati pengalaman UI minimalis, responsif, dan interaktif Bizmate Store!

*(Server HTTP lokal dijalankan di background menggunakan python pada port 8000).*
