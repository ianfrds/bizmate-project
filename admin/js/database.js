/**
 * Bizmate Enterprise Database Utility (LocalStorage-based)
 * Designed for offline-first, static-dynamic preview with seamless state synchronization.
 */

const SEED_PRODUCTS = [
  {
    sku: 'CHR-RED-001',
    name: 'Kursi Santai Telur (Single Wheel)',
    category: 'Mebel Outdoor',
    price: 1899000,
    cost: 1100000,
    stock: 45,
    minStock: 5,
    status: 'Tersedia (In Stock)',
    description: 'Kursi telur berkualitas tinggi dengan roda tunggal untuk kenyamanan luar ruangan yang premium.',
    image: 'https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?auto=format&fit=crop&w=150&q=80',
    active: true,
    created: '2026-05-19T14:30:00Z'
  },
  {
    sku: 'SFA-VLV-002',
    name: 'Sofa Premium Velvet Modern',
    category: 'Kursi & Sofa',
    price: 4500000,
    cost: 2800000,
    stock: 14,
    minStock: 5,
    status: 'Tersedia (In Stock)',
    description: 'Sofa berbalut kain velvet mewah dengan kaki logam elegan untuk ruang tamu modern.',
    image: 'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&w=150&q=80',
    active: true,
    created: '2026-05-19T11:15:00Z',
    hasVariants: true,
    useVariantImages: true,
    variations: [
      {
        id: 'var_1',
        name: 'Warna',
        options: [
          { id: 'opt_red', name: 'Merah Velvet', description: 'Velvet merah cabai mewah', image: 'https://images.unsplash.com/photo-1592078615290-033ee584e267?auto=format&fit=crop&w=150&q=80' },
          { id: 'opt_blue', name: 'Biru Navy', description: 'Velvet biru malam elegan', image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=150&q=80' }
        ]
      },
      {
        id: 'var_2',
        name: 'Ukuran',
        options: [
          { id: 'opt_2s', name: '2 Seater', description: 'Lebar 160cm', image: '' },
          { id: 'opt_3s', name: '3 Seater', description: 'Lebar 210cm', image: '' }
        ]
      }
    ],
    variantList: [
      { id: 'opt_red_opt_2s', name: 'Merah Velvet - 2 Seater', sku: 'SFA-VLV-RED-2S', price: 4500000, stock: 5, image: 'https://images.unsplash.com/photo-1592078615290-033ee584e267?auto=format&fit=crop&w=150&q=80' },
      { id: 'opt_red_opt_3s', name: 'Merah Velvet - 3 Seater', sku: 'SFA-VLV-RED-3S', price: 5200000, stock: 3, image: 'https://images.unsplash.com/photo-1592078615290-033ee584e267?auto=format&fit=crop&w=150&q=80' },
      { id: 'opt_blue_opt_2s', name: 'Biru Navy - 2 Seater', sku: 'SFA-VLV-BLU-2S', price: 4500000, stock: 4, image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=150&q=80' },
      { id: 'opt_blue_opt_3s', name: 'Biru Navy - 3 Seater', sku: 'SFA-VLV-BLU-3S', price: 5200000, stock: 2, image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=150&q=80' }
    ]
  },
  {
    sku: 'TBL-JTI-003',
    name: 'Meja Kopi Jati Minimalis',
    category: 'Meja & Rak',
    price: 850000,
    cost: 500000,
    stock: 0,
    minStock: 3,
    status: 'Habis (Out of Stock)',
    description: 'Meja kopi kayu jati asli yang tahan lama dengan sentuhan akhir natural wood polish.',
    image: 'https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&w=150&q=80',
    active: false,
    created: '2026-05-18T09:45:00Z'
  }
];

function buildSeedProducts() {
  const categories = ['Kursi & Sofa', 'Meja & Rak', 'Lampu & Dekorasi', 'Mebel Outdoor'];
  const names = ['Sofa Minimalis', 'Kursi Makan', 'Meja Kopi', 'Rak Buku', 'Lampu Meja', 'Kursi Teras', 'Lemari Kabinet', 'Meja Kerja', 'Bangku Ottoman', 'Set Patio'];
  const images = [
    'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&w=150&q=80',
    'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=150&q=80',
    'https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&w=150&q=80',
    'https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?auto=format&fit=crop&w=150&q=80'
  ];
  const products = [...SEED_PRODUCTS];
  for (let i = products.length + 1; i <= 100; i++) {
    const category = categories[i % categories.length];
    const baseName = names[i % names.length];
    const price = 250000 + (i * 37500);
    const stock = i % 9 === 0 ? 0 : 5 + (i % 45);
    products.push({
      sku: `PRD-${String(i).padStart(3, '0')}`,
      name: `${baseName} Series ${String(i).padStart(3, '0')}`,
      category,
      price,
      cost: Math.round(price * 0.62),
      stock,
      minStock: 5,
      status: stock > 0 ? 'Tersedia (In Stock)' : 'Habis (Out of Stock)',
      description: `Produk furniture ${category.toLowerCase()} berkualitas untuk kebutuhan rumah dan toko.`,
      image: images[i % images.length],
      active: stock > 0,
      created: `2026-05-${String((i % 28) + 1).padStart(2, '0')}T09:00:00Z`
    });
  }
  return products;
}

const SEED_ORDERS = [
  {
    id: 'FE-00014',
    invoice: 'BILL-20260518-IST4NI',
    customer: 'T*******o N******o',
    phone: '6285656629097',
    address: 'Jl Bratang 1H No 23, Surabaya, Ngagel Rejo, Wonokromo, Kota Surabaya, Jawa Timur',
    email: 'to***@***.com',
    date: '18 Mei 2026, 14:47',
    itemsCount: 2,
    items: [
      { sku: 'CHR-RED-001', name: 'Kursi Santai Telur (Single Wheel)', price: 1899000, cost: 1100000, qty: 2, image: 'https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?auto=format&fit=crop&w=150&q=80' }
    ],
    amount: 3798000,
    shippingCost: 75000,
    paymentStatus: 'Pending',
    paymentMethod: 'Transfer Bank',
    shippingStatus: 'Unfulfilled',
    courier: 'Atur kurir...',
    customerNote: 'Tolong packing yang aman ya gan. Makasih!',
    adminNote: 'Customer sempat tanya ketersediaan stok via WA.',
    returnStatus: '',
    refundAmount: 0,
    statusHistory: [
      { status: 'Pesanan Dibuat', time: '18 Mei 2026, 14:47', note: 'Pesanan berhasil dibuat oleh sistem.' }
    ]
  },
  {
    id: 'FE-00013',
    invoice: '01-15-20260511-W2SKMX',
    trackingNumber: '928309203920909302',
    customer: 'S**h R**a',
    phone: '6285179720622',
    address: ',, Nambak, Bungkal, Kab. Ponorogo, Jawa Timur',
    email: 'sy***@***.com',
    date: '11 Mei 2026, 10:15',
    itemsCount: 1,
    items: [
      { sku: 'SFA-VLV-002', name: 'Sofa Premium Velvet Modern - Merah', price: 4500000, cost: 2800000, qty: 1, image: 'https://images.unsplash.com/photo-1592078615290-033ee584e267?auto=format&fit=crop&w=150&q=80' }
    ],
    amount: 4500000,
    shippingCost: 150000,
    paymentStatus: 'Paid',
    paymentMethod: 'Virtual Account BCA',
    shippingStatus: 'Shipped',
    courier: 'J&T Express',
    customerNote: 'Kirim di jam kerja ya.',
    adminNote: '',
    returnStatus: 'Requested',
    refundAmount: 0,
    statusHistory: [
      { status: 'Pesanan Dibuat', time: '11 Mei 2026, 10:15', note: 'Pesanan berhasil dibuat.' },
      { status: 'Pembayaran Lunas', time: '11 Mei 2026, 10:30', note: 'Pembayaran sukses via BCA Virtual Account.' },
      { status: 'Pesanan Diproses', time: '11 Mei 2026, 14:20', note: 'Pesanan sedang dipersiapkan di gudang.' },
      { status: 'Pesanan Dikirim', time: '12 Mei 2026, 09:00', note: 'Pesanan diserahkan ke kurir J&T Express dengan resi 928309203920909302.' },
      { status: 'Pengajuan Retur', time: '13 Mei 2026, 15:45', note: 'Customer mengajukan retur barang karena warna tidak cocok.' }
    ]
  },
  {
    id: 'FE-00012',
    invoice: '01-17-20260417-MMDTNH',
    trackingNumber: '9840293029',
    customer: 'B**i A**o',
    phone: '628123456789',
    address: 'Jl. Raya Darmo No. 12, Surabaya, Jawa Timur',
    email: 'bu***@***.com',
    date: '17 April 2026, 11:30',
    itemsCount: 1,
    items: [
      { sku: 'TBL-JTI-003', name: 'Meja Kopi Jati Minimalis', price: 850000, cost: 500000, qty: 1, image: 'https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&w=150&q=80' }
    ],
    amount: 850000,
    shippingCost: 35000,
    paymentStatus: 'Paid',
    paymentMethod: 'ShopeePay',
    shippingStatus: 'Delivered',
    courier: 'SiCepat',
    customerNote: '',
    adminNote: '',
    returnStatus: '',
    refundAmount: 0,
    statusHistory: [
      { status: 'Pesanan Dibuat', time: '17 April 2026, 11:30', note: 'Pesanan dibuat oleh sistem.' },
      { status: 'Pembayaran Lunas', time: '17 April 2026, 11:35', note: 'Pembayaran lunas via ShopeePay.' },
      { status: 'Pesanan Dikirim', time: '17 April 2026, 16:00', note: 'Pesanan dikirim via SiCepat.' },
      { status: 'Selesai', time: '19 April 2026, 14:00', note: 'Paket telah diterima oleh B**i A**o.' }
    ]
  },
  {
    id: 'FE-00011',
    invoice: 'BILL-20260510-AB12CD',
    customer: 'C***a K****a',
    phone: '628571234567',
    address: 'Komp. BSD Sektor 1.2, Tangerang Selatan, Banten',
    email: 'ci***@***.com',
    date: '10 Mei 2026, 15:10',
    itemsCount: 1,
    items: [
      { sku: 'TBL-JTI-003', name: 'Meja Kopi Jati Minimalis', price: 850000, cost: 500000, qty: 1, image: 'https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&w=150&q=80' }
    ],
    amount: 850000,
    shippingCost: 45000,
    paymentStatus: 'Pending',
    paymentMethod: 'QRIS',
    shippingStatus: 'Unfulfilled',
    courier: 'Atur kurir...',
    customerNote: 'Tolong kirim sebelum jam 5 sore.',
    adminNote: '',
    returnStatus: '',
    refundAmount: 0,
    statusHistory: [
      { status: 'Pesanan Dibuat', time: '10 Mei 2026, 15:10', note: 'Pesanan berhasil dibuat.' }
    ]
  },
  {
    id: 'FE-00010',
    invoice: 'BILL-20260509-XY98ZT',
    customer: 'S***h W****a',
    phone: '628998877665',
    address: 'Jl. Kemang Raya No. 45, Jakarta Selatan, DKI Jakarta',
    email: 'sa***@***.com',
    date: '09 Mei 2026, 14:40',
    itemsCount: 1,
    items: [
      { sku: 'SFA-VLV-002', name: 'Sofa Premium Velvet Modern', price: 4500000, cost: 2800000, qty: 1, image: 'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&w=150&q=80' }
    ],
    amount: 4500000,
    shippingCost: 200000,
    paymentStatus: 'Failed',
    paymentMethod: 'Credit Card',
    shippingStatus: 'Unfulfilled',
    courier: 'Atur kurir...',
    customerNote: 'Mohon dibantu instalasi di lantai 2.',
    adminNote: 'Gagal transaksi kartu kredit 3x.',
    returnStatus: '',
    refundAmount: 0,
    statusHistory: [
      { status: 'Pesanan Dibuat', time: '09 Mei 2026, 14:40', note: 'Pesanan berhasil dibuat.' },
      { status: 'Gagal', time: '09 Mei 2026, 14:45', note: 'Transaksi dibatalkan karena kegagalan pembayaran bank.' }
    ]
  }
];

const SEED_CATEGORIES = [
  {
    name: 'Kursi & Sofa',
    slug: 'kursi-sofa',
    icon: 'ti-sofa',
    count: 112,
    subcategories: ['Sofa Velvet Premium', 'Kursi Santai']
  },
  {
    name: 'Meja & Rak',
    slug: 'meja-rak',
    icon: 'ti-table',
    count: 89,
    subcategories: []
  },
  {
    name: 'Lampu & Dekorasi',
    slug: 'lampu-dekorasi',
    icon: 'ti-lamp',
    count: 54,
    subcategories: []
  }
];

const SEED_CUSTOMERS = [
  { id: 'CUST-001', name: 'T*******o N******o', email: 'to***@***.com', phone: '6285656629097', address: 'Jl Bratang 1H No 23, Surabaya, Jawa Timur', joinedDate: '2026-01-15', status: 'Aktif' },
  { id: 'CUST-002', name: 'S**h R**a', email: 'sy***@***.com', phone: '6285179720622', address: 'Komp. Bungkal, Ponorogo, Jawa Timur', joinedDate: '2026-02-10', status: 'Aktif' },
  { id: 'CUST-003', name: 'B**i A**o', email: 'bu***@***.com', phone: '628123456789', address: 'Jl. Raya Darmo No. 12, Surabaya, Jawa Timur', joinedDate: '2026-02-18', status: 'Aktif' },
  { id: 'CUST-004', name: 'C***a K****a', email: 'ci***@***.com', phone: '628571234567', address: 'Komp. BSD Sektor 1.2, Tangerang Selatan, Banten', joinedDate: '2026-03-01', status: 'Aktif' },
  { id: 'CUST-005', name: 'S***h W****a', email: 'sa***@***.com', phone: '628998877665', address: 'Jl. Kemang Raya No. 45, Jakarta Selatan, DKI Jakarta', joinedDate: '2026-03-12', status: 'Suspend' }
];

const SEED_ADMINS = [
  { username: 'su***@***.id', name: 'S********n', role: 'Super Admin', status: 'Aktif', lastActive: 'Sekarang' },
  { username: 'pe***@***.id', name: 'Admin Penjualan 1', role: 'Admin Penjualan', status: 'Aktif', lastActive: '2 menit yang lalu' },
  { username: 'pe***2@***.id', name: 'Admin Penjualan 2', role: 'Admin Penjualan', status: 'Aktif', lastActive: '12 menit yang lalu' },
  { username: 'to***@***.id', name: 'Admin Toko 1', role: 'Admin Toko', status: 'Aktif', lastActive: '8 menit yang lalu' },
  { username: 'to***2@***.id', name: 'Admin Toko 2', role: 'Admin Toko', status: 'Nonaktif', lastActive: 'Kemarin' }
];

const ALLOWED_ADMIN_ROLES = ['Super Admin', 'Admin Penjualan', 'Admin Toko'];

const SEED_CMS_LANDING = {
  announcement: '✨ Promo Kejutan! Gratis Ongkir Seluruh Indonesia Khusus Transaksi Bulan Ini!',
  heroTitle: 'Temukan Furniture Premium untuk Rumah Impian Anda',
  heroSub: 'Mulai dari sofa velvet mewah hingga meja jati pilihan dengan kualitas terbaik langsung dari pengrajin terpercaya.',
  heroCta: 'Belanja Sekarang',
  heroImage: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1200&q=80',
  aboutDesc: 'Bizmate adalah penyedia mebel dan furniture berkualitas tinggi yang berfokus pada desain modern, kenyamanan premium, dan ketahanan jangka panjang untuk setiap sudut ruangan Anda.',
  yearsOfService: 12,
  customerCount: '8.5K+',
  whatsapp: '6285179720622',
  instagram: 'bizmate.premium',
  tiktok: 'bizmate.official',
  address: 'Jl. Raya Darmo No. 12-14, Tegalsari, Kota Surabaya, Jawa Timur 60264'
};

const SEED_PROMOS = [
  { id: 'PRM-001', code: 'GRATISONGKIR', name: 'Gratis Ongkir Seluruh Jawa', type: 'Gratis Ongkir', value: 20000, minPurchase: 150000, active: true, usageCount: 42, maxUsage: 100, startDate: '2026-05-01', expiry: '2026-06-30', scope: 'all', appliedProducts: [] },
  { id: 'PRM-002', code: 'BIZMATE10', name: 'Diskon Spesial 10% Velvet', type: 'Diskon Persen', value: 10, minPurchase: 500000, active: true, usageCount: 15, maxUsage: 50, startDate: '2026-05-10', expiry: '2026-06-15', scope: 'specific', appliedProducts: ['SFA-VLV-002', 'CHR-RED-001', 'TBL-JTI-003', 'CHR-OUT-004', 'SFA-MIN-005'] },
  { id: 'PRM-003', code: 'MEBELHEMAT', name: 'Potongan Harga Khusus Kursi Telur', type: 'Potongan Harga', value: 100000, minPurchase: 2000000, active: false, usageCount: 8, maxUsage: 10, startDate: '2026-05-01', expiry: '2026-05-18', scope: 'specific', appliedProducts: ['CHR-RED-001'] },
  { id: 'PRM-004', code: 'FLASHSALE50', name: 'Flash Sale Kilat Kursi & Sofa', type: 'Flash Sale', value: 50, minPurchase: 0, active: true, usageCount: 5, maxUsage: 30, startDate: '2026-05-20', expiry: '2026-06-25', scope: 'specific', appliedProducts: ['SFA-VLV-002'], isFlashSale: true, startTime: '15:00', endTime: '18:00', tagline: 'Diskon Kilat Sofa Velvet 50%!' }
];

const SEED_SETTINGS = {
  shopName: 'Bizmate Premium Store',
  shopWhatsApp: '6285179720622',
  shopInstagram: 'bizmate.premium',
  shopTikTok: 'bizmate.official',
  shopEmail: 'support@bizmate.id',
  shopPhone: '6285179720622',
  shopAddress: 'Jl. Raya Darmo No. 12-14, Tegalsari, Kota Surabaya, Jawa Timur 60264',
  shopDescription: 'Toko mebel dan furniture premium berkualitas tinggi langsung dari pengrajin terpercaya.',
  bankName: 'Bank Central Asia (BCA)',
  bankAccount: '8291048590',
  bankHolder: 'PT Bizmate Solusi Retail',
  activeTheme: 'royal-blue',
  shippingFlatRate: 50000,
  taxEnabled: false,
  taxRate: 11,
  enableCod: true,
  enableQris: true,
  enableBankTransfer: true
};

// Initialize database
function initDatabase() {
  const DB_VERSION = 'v5';
  let dbVer = localStorage.getItem('bizmate_db_version');
  let products = localStorage.getItem('bizmate_products');
  let orders = localStorage.getItem('bizmate_orders');
  let categories = localStorage.getItem('bizmate_categories');
  let customers = localStorage.getItem('bizmate_customers');
  let admins = localStorage.getItem('bizmate_admins');
  let cmsLanding = localStorage.getItem('bizmate_cms_landing');
  let promos = localStorage.getItem('bizmate_promos');
  let settings = localStorage.getItem('bizmate_settings');

  if (!products || dbVer !== DB_VERSION) {
    localStorage.setItem('bizmate_products', JSON.stringify(buildSeedProducts()));
    localStorage.setItem('bizmate_db_version', DB_VERSION);
  }
  
  if (!orders || !orders.includes('FE-00014') || !orders.includes('returnStatus')) {
    // Force refresh if it is empty or does not have the new orders or returnStatus
    localStorage.setItem('bizmate_orders', JSON.stringify(SEED_ORDERS));
  }
  
  if (!categories) {
    localStorage.setItem('bizmate_categories', JSON.stringify(SEED_CATEGORIES));
  }

  if (!customers) {
    localStorage.setItem('bizmate_customers', JSON.stringify(SEED_CUSTOMERS));
  }

  if (!admins || dbVer !== DB_VERSION) {
    localStorage.setItem('bizmate_admins', JSON.stringify(SEED_ADMINS));
  } else {
    const parsedAdmins = JSON.parse(admins);
    const normalizedAdmins = parsedAdmins
      .map(admin => ({
        ...admin,
        role: admin.role === 'S********n' ? 'Super Admin' : admin.role,
        name: admin.username === 'su***@***.id' ? 'S********n' : admin.name,
        username: maskEmail(admin.username)
      }))
      .filter(admin => ALLOWED_ADMIN_ROLES.includes(admin.role));

    if (normalizedAdmins.length !== parsedAdmins.length || JSON.stringify(normalizedAdmins) !== admins) {
      localStorage.setItem('bizmate_admins', JSON.stringify(normalizedAdmins.length ? normalizedAdmins : SEED_ADMINS));
    }
  }

  localStorage.setItem('bizmate_customers', JSON.stringify(maskPeople(JSON.parse(localStorage.getItem('bizmate_customers') || '[]'))));
  localStorage.setItem('bizmate_orders', JSON.stringify(maskOrders(JSON.parse(localStorage.getItem('bizmate_orders') || '[]'))));

  if (!cmsLanding) {
    localStorage.setItem('bizmate_cms_landing', JSON.stringify(SEED_CMS_LANDING));
  }

  if (!promos || !promos.includes('startDate') || !promos.includes('CHR-OUT-004')) {
    localStorage.setItem('bizmate_promos', JSON.stringify(SEED_PROMOS));
  }

  if (!settings || dbVer !== DB_VERSION) {
    localStorage.setItem('bizmate_settings', JSON.stringify(SEED_SETTINGS));
  }
}

// API for Products
const BizmateDB = {
  // Products API
  getProducts() {
    initDatabase();
    return JSON.parse(localStorage.getItem('bizmate_products'));
  },
  
  saveProduct(product) {
    const products = this.getProducts();
    // Check if sku exists, overwrite or append
    const idx = products.findIndex(p => p.sku === product.sku);
    if (idx !== -1) {
      products[idx] = { ...products[idx], ...product };
    } else {
      products.push({
        active: true,
        created: new Date().toISOString(),
        ...product
      });
    }
    localStorage.setItem('bizmate_products', JSON.stringify(products));
    return products;
  },

  deleteProduct(sku) {
    let products = this.getProducts();
    products = products.filter(p => p.sku !== sku);
    localStorage.setItem('bizmate_products', JSON.stringify(products));
    return products;
  },

  toggleProductStatus(sku) {
    const products = this.getProducts();
    const idx = products.findIndex(p => p.sku === sku);
    if (idx !== -1) {
      products[idx].active = !products[idx].active;
      localStorage.setItem('bizmate_products', JSON.stringify(products));
    }
    return products;
  },

  // Orders API
  getOrders() {
    initDatabase();
    return JSON.parse(localStorage.getItem('bizmate_orders'));
  },

  saveOrder(order) {
    const orders = this.getOrders();
    const newOrder = {
      id: `FE-${Math.floor(10000 + Math.random() * 90000)}`,
      invoice: `BILL-${new Date().toISOString().slice(0,10).replace(/-/g,'')}-${Math.random().toString(36).substring(2,8).toUpperCase()}`,
      date: new Date().toLocaleString('id-ID', { day: 'numeric', month: 'long', year: 'numeric', hour: '2-digit', minute: '2-digit' }) + ' WIB',
      shippingCost: order.shippingCost || 15000,
      customerNote: order.customerNote || '',
      adminNote: order.adminNote || '',
      returnStatus: '',
      refundAmount: 0,
      statusHistory: [
        { status: 'Pesanan Dibuat', time: new Date().toLocaleString('id-ID', { day: 'numeric', month: 'long', year: 'numeric', hour: '2-digit', minute: '2-digit' }), note: 'Pesanan berhasil dibuat oleh sistem.' }
      ],
      ...order
    };
    orders.unshift(newOrder);
    localStorage.setItem('bizmate_orders', JSON.stringify(orders));
    return orders;
  },

  updateOrderPayment(id, status) {
    const orders = this.getOrders();
    const idx = orders.findIndex(o => o.id === id);
    if (idx !== -1) {
      orders[idx].paymentStatus = status;
      if (!orders[idx].statusHistory) orders[idx].statusHistory = [];
      orders[idx].statusHistory.push({
        status: status === 'Paid' ? 'Pembayaran Lunas' : (status === 'Failed' ? 'Pembayaran Gagal' : 'Menunggu Pembayaran'),
        time: new Date().toLocaleString('id-ID', { day: 'numeric', month: 'long', year: 'numeric', hour: '2-digit', minute: '2-digit' }),
        note: status === 'Paid' ? 'Pembayaran sukses diverifikasi.' : 'Status pembayaran diperbarui.'
      });
      localStorage.setItem('bizmate_orders', JSON.stringify(orders));
    }
    return orders;
  },

  updateOrderShipping(id, status) {
    const orders = this.getOrders();
    const idx = orders.findIndex(o => o.id === id);
    if (idx !== -1) {
      orders[idx].shippingStatus = status;
      if (!orders[idx].statusHistory) orders[idx].statusHistory = [];
      let historyStatus = 'Status Pengiriman Diperbarui';
      let historyNote = `Status pengiriman diubah menjadi ${status}.`;
      if (status === 'Shipped') {
        historyStatus = 'Pesanan Dikirim';
        historyNote = 'Pesanan diserahkan ke kurir.';
      } else if (status === 'Delivered') {
        historyStatus = 'Selesai';
        historyNote = 'Paket telah berhasil diterima oleh customer. Transaksi selesai.';
      }
      orders[idx].statusHistory.push({
        status: historyStatus,
        time: new Date().toLocaleString('id-ID', { day: 'numeric', month: 'long', year: 'numeric', hour: '2-digit', minute: '2-digit' }),
        note: historyNote
      });
      localStorage.setItem('bizmate_orders', JSON.stringify(orders));
    }
    return orders;
  },

  updateOrderCourier(id, courier) {
    const orders = this.getOrders();
    const idx = orders.findIndex(o => o.id === id);
    if (idx !== -1) {
      orders[idx].courier = courier;
      localStorage.setItem('bizmate_orders', JSON.stringify(orders));
    }
    return orders;
  },

  updateOrderAdminNote(id, note) {
    const orders = this.getOrders();
    const idx = orders.findIndex(o => o.id === id);
    if (idx !== -1) {
      orders[idx].adminNote = note;
      localStorage.setItem('bizmate_orders', JSON.stringify(orders));
    }
    return orders;
  },

  updateOrderReturnStatus(id, returnStatus, refundAmount = 0, note = '') {
    const orders = this.getOrders();
    const idx = orders.findIndex(o => o.id === id);
    if (idx !== -1) {
      orders[idx].returnStatus = returnStatus;
      if (refundAmount > 0) {
        orders[idx].refundAmount = refundAmount;
      }
      
      if (returnStatus === 'Refunded') {
        orders[idx].paymentStatus = 'Refunded';
        orders[idx].shippingStatus = 'Returned';
      }
      
      if (!orders[idx].statusHistory) orders[idx].statusHistory = [];
      
      let statusLabel = 'Retur Diperbarui';
      if (returnStatus === 'Requested') statusLabel = 'Pengajuan Retur';
      else if (returnStatus === 'Approved') statusLabel = 'Retur Disetujui';
      else if (returnStatus === 'Refunded') statusLabel = 'Returned & Refunded';
      else if (returnStatus === 'Rejected') statusLabel = 'Retur Ditolak';
      
      orders[idx].statusHistory.push({
        status: statusLabel,
        time: new Date().toLocaleString('id-ID', { day: 'numeric', month: 'long', year: 'numeric', hour: '2-digit', minute: '2-digit' }),
        note: note || `Status retur diperbarui menjadi ${returnStatus}.`
      });
      
      localStorage.setItem('bizmate_orders', JSON.stringify(orders));
    }
    return orders;
  },

  addOrderStatusHistory(id, status, note) {
    const orders = this.getOrders();
    const idx = orders.findIndex(o => o.id === id);
    if (idx !== -1) {
      if (!orders[idx].statusHistory) orders[idx].statusHistory = [];
      orders[idx].statusHistory.push({
        status: status,
        time: new Date().toLocaleString('id-ID', { day: 'numeric', month: 'long', year: 'numeric', hour: '2-digit', minute: '2-digit' }),
        note: note
      });
      localStorage.setItem('bizmate_orders', JSON.stringify(orders));
    }
    return orders;
  },

  generateTrackingNumber(id, courier) {
    const orders = this.getOrders();
    const idx = orders.findIndex(o => o.id === id);
    if (idx !== -1) {
      const tracking = 'REG' + Math.floor(100000000000 + Math.random() * 900000000000);
      orders[idx].trackingNumber = tracking;
      orders[idx].shippingStatus = 'Shipped';
      if (courier) orders[idx].courier = courier;
      
      if (!orders[idx].statusHistory) orders[idx].statusHistory = [];
      orders[idx].statusHistory.push({
        status: 'Pesanan Dikirim',
        time: new Date().toLocaleString('id-ID', { day: 'numeric', month: 'long', year: 'numeric', hour: '2-digit', minute: '2-digit' }),
        note: `Resi pengiriman otomatis dibuat: ${tracking} (${orders[idx].courier})`
      });
      
      localStorage.setItem('bizmate_orders', JSON.stringify(orders));
      return tracking;
    }
    return '';
  },

  bulkUpdateCourier(ids, courier) {
    const orders = this.getOrders();
    ids.forEach(id => {
      const idx = orders.findIndex(o => o.id === id);
      if (idx !== -1) {
        orders[idx].courier = courier;
      }
    });
    localStorage.setItem('bizmate_orders', JSON.stringify(orders));
    return orders;
  },

  bulkUpdateShippingStatus(ids, status) {
    const orders = this.getOrders();
    ids.forEach(id => {
      const idx = orders.findIndex(o => o.id === id);
      if (idx !== -1) {
        orders[idx].shippingStatus = status;
        if (!orders[idx].statusHistory) orders[idx].statusHistory = [];
        orders[idx].statusHistory.push({
          status: status === 'Shipped' ? 'Pesanan Dikirim' : (status === 'Delivered' ? 'Selesai' : 'Status Pengiriman Diperbarui'),
          time: new Date().toLocaleString('id-ID', { day: 'numeric', month: 'long', year: 'numeric', hour: '2-digit', minute: '2-digit' }),
          note: `Pembaruan massal: status pengiriman diubah menjadi ${status}.`
        });
      }
    });
    localStorage.setItem('bizmate_orders', JSON.stringify(orders));
    return orders;
  },

  // Categories API
  getCategories() {
    initDatabase();
    return JSON.parse(localStorage.getItem('bizmate_categories'));
  },

  saveCategory(category) {
    const categories = this.getCategories();
    categories.push({
      count: 0,
      subcategories: [],
      image: '',
      ...category
    });
    localStorage.setItem('bizmate_categories', JSON.stringify(categories));
    return categories;
  },

  deleteCategory(slug) {
    let categories = this.getCategories();
    categories = categories.filter(c => c.slug !== slug);
    localStorage.setItem('bizmate_categories', JSON.stringify(categories));
    return categories;
  },

  // Customers API
  getCustomers() {
    initDatabase();
    return JSON.parse(localStorage.getItem('bizmate_customers'));
  },

  saveCustomer(customer) {
    const customers = this.getCustomers();
    const idx = customers.findIndex(c => c.id === customer.id);
    if (idx !== -1) {
      customers[idx] = { ...customers[idx], ...customer };
    } else {
      customers.push({
        id: `CUST-${Math.floor(100 + Math.random() * 900)}`,
        joinedDate: new Date().toISOString().split('T')[0],
        status: 'Aktif',
        ...customer
      });
    }
    localStorage.setItem('bizmate_customers', JSON.stringify(customers));
    return customers;
  },

  deleteCustomer(id) {
    let customers = this.getCustomers();
    customers = customers.filter(c => c.id !== id);
    localStorage.setItem('bizmate_customers', JSON.stringify(customers));
    return customers;
  },

  toggleCustomerStatus(id) {
    const customers = this.getCustomers();
    const idx = customers.findIndex(c => c.id === id);
    if (idx !== -1) {
      customers[idx].status = customers[idx].status === 'Aktif' ? 'Suspend' : 'Aktif';
      localStorage.setItem('bizmate_customers', JSON.stringify(customers));
    }
    return customers;
  },

  // Admins API
  getAdmins() {
    initDatabase();
    return JSON.parse(localStorage.getItem('bizmate_admins'));
  },

  saveAdmin(admin) {
    const admins = this.getAdmins();
    const idx = admins.findIndex(a => a.username === admin.username);
    if (idx !== -1) {
      admins[idx] = { ...admins[idx], ...admin };
    } else {
      admins.push({
        status: 'Aktif',
        lastActive: 'Baru saja ditambahkan',
        ...admin
      });
    }
    localStorage.setItem('bizmate_admins', JSON.stringify(admins));
    return admins;
  },

  deleteAdmin(username) {
    let admins = this.getAdmins();
    admins = admins.filter(a => a.username !== username);
    localStorage.setItem('bizmate_admins', JSON.stringify(admins));
    return admins;
  },

  toggleAdminStatus(username) {
    const admins = this.getAdmins();
    const idx = admins.findIndex(a => a.username === username);
    if (idx !== -1) {
      admins[idx].status = admins[idx].status === 'Aktif' ? 'Nonaktif' : 'Aktif';
      localStorage.setItem('bizmate_admins', JSON.stringify(admins));
    }
    return admins;
  },

  // CMS API
  getCMSLanding() {
    initDatabase();
    return JSON.parse(localStorage.getItem('bizmate_cms_landing'));
  },

  saveCMSLanding(config) {
    const current = this.getCMSLanding();
    const updated = { ...current, ...config };
    localStorage.setItem('bizmate_cms_landing', JSON.stringify(updated));
    return updated;
  },

  // Global Statistics API
  getStats() {
    const products = this.getProducts();
    const orders = this.getOrders();
    const customers = this.getCustomers();
    
    // Revenue from PAID orders
    const paidOrders = orders.filter(o => o.paymentStatus === 'Paid');
    const ordersAmount = paidOrders.reduce((sum, o) => sum + o.amount, 0);
    
    // Static base + dynamic addition to keep enterprise feel
    const baseRevenue = 45200000000; // Rp 45.2M base
    const displayRevenue = baseRevenue + ordersAmount;
 
    const baseOrders = 1204;
    const displayOrdersCount = baseOrders + orders.length;
 
    const activeProducts = products.filter(p => p.active).length;
    const outOfStockProducts = products.filter(p => p.stock === 0).length;
    const draftProducts = products.filter(p => !p.active && p.stock > 0).length;
 
    return {
      revenueRaw: displayRevenue,
      revenueFormatted: `Rp ${(displayRevenue / 1000000000).toFixed(1)}M`,
      ordersCount: displayOrdersCount,
      productsCount: products.length + 339, // base 342
      activeProductsCount: activeProducts + 308,
      draftProductsCount: draftProducts + 22,
      outOfStockProductsCount: outOfStockProducts + 8,
      customersCount: customers.length + 8586 // Keep enterprise scale
    };
  },

  // Promos API
  getPromos() {
    initDatabase();
    return JSON.parse(localStorage.getItem('bizmate_promos')) || [];
  },

  savePromo(promo) {
    const promos = this.getPromos();
    const idx = promos.findIndex(p => p.id === promo.id);
    if (idx !== -1) {
      promos[idx] = { ...promos[idx], ...promo };
    } else {
      promos.push({
        id: `PRM-${Math.floor(100 + Math.random() * 900)}`,
        usageCount: 0,
        active: true,
        ...promo
      });
    }
    localStorage.setItem('bizmate_promos', JSON.stringify(promos));
    return promos;
  },

  deletePromo(id) {
    let promos = this.getPromos();
    promos = promos.filter(p => p.id !== id);
    localStorage.setItem('bizmate_promos', JSON.stringify(promos));
    return promos;
  },

  togglePromoStatus(id) {
    const promos = this.getPromos();
    const idx = promos.findIndex(p => p.id === id);
    if (idx !== -1) {
      promos[idx].active = !promos[idx].active;
      localStorage.setItem('bizmate_promos', JSON.stringify(promos));
    }
    return promos;
  },

  // Settings API
  getSettings() {
    initDatabase();
    try {
      return JSON.parse(localStorage.getItem('bizmate_settings')) || SEED_SETTINGS;
    } catch(e) {
      return SEED_SETTINGS;
    }
  },

  saveSettings(config) {
    const current = this.getSettings();
    const updated = { ...current, ...config };
    localStorage.setItem('bizmate_settings', JSON.stringify(updated));
    return updated;
  },

  // Dynamic Notifications API
  getNotifications() {
    const products = this.getProducts();
    const orders = this.getOrders();
    const notifications = [];

    // Scan for low stock products
    products.forEach(p => {
      if (p.stock === 0) {
        notifications.push({
          id: `NOTIF-PROD-EMPTY-${p.sku}`,
          type: 'danger',
          title: 'Stok Produk Habis!',
          message: `Stok untuk produk "${p.name}" (${p.sku}) telah habis. Segera restock!`,
          time: 'Baru saja',
          link: 'produk.html'
        });
      } else if (p.stock <= p.minStock) {
        notifications.push({
          id: `NOTIF-PROD-LOW-${p.sku}`,
          type: 'warning',
          title: 'Stok Produk Menipis',
          message: `Stok produk "${p.name}" tersisa ${p.stock} unit (Batas min: ${p.minStock}).`,
          time: '1 jam yang lalu',
          link: 'produk.html'
        });
      }
    });

    // Scan for pending orders & returns
    orders.forEach(o => {
      if (o.paymentStatus === 'Pending') {
        notifications.push({
          id: `NOTIF-ORD-PEND-${o.id}`,
          type: 'info',
          title: 'Menunggu Pembayaran',
          message: `Pesanan ${o.id} dari ${o.customer} menunggu verifikasi pembayaran sebesar Rp ${o.amount.toLocaleString('id-ID')}.`,
          time: o.date.split(',')[1] || 'Hari ini',
          link: `detail-pesanan.html?id=${o.id}`
        });
      }
      if (o.returnStatus === 'Requested') {
        notifications.push({
          id: `NOTIF-ORD-RET-${o.id}`,
          type: 'warning',
          title: 'Pengajuan Retur Barang',
          message: `Customer ${o.customer} mengajukan retur & refund untuk pesanan ${o.id}.`,
          time: 'Kemarin',
          link: `detail-pesanan.html?id=${o.id}`
        });
      }
    });

    return notifications;
  }
};

function maskName(name) {
  if (!name) return 'Pelanggan';
  return name.split(' ').map(part => part.length <= 2 ? `${part[0] || ''}*` : `${part[0]}${'*'.repeat(Math.max(2, part.length - 2))}${part[part.length - 1]}`).join(' ');
}

function maskEmail(email) {
  if (!email || !email.includes('@')) return email || '';
  const [user, domain] = email.split('@');
  return `${user.slice(0, 2)}***@${domain.replace(/^[^.]*/, '***')}`;
}

function maskPeople(rows) {
  return rows.map(row => ({ ...row, name: maskName(row.name), email: maskEmail(row.email) }));
}

function maskOrders(rows) {
  return rows.map(row => ({ ...row, customer: maskName(row.customer), email: maskEmail(row.email), statusHistory: (row.statusHistory || []).map(h => ({ ...h, note: h.note ? h.note.replace(/oleh [A-Za-z ]+/g, 'oleh pelanggan').replace(/diterima oleh [A-Za-z ]+/g, 'diterima oleh pelanggan') : h.note })) }));
}

// Auto run initialization on load
initDatabase();
