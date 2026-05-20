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

const SEED_ORDERS = [
  {
    id: 'FE-00014',
    invoice: 'BILL-20260518-IST4NI',
    customer: 'Totiyono Nugroho',
    phone: '6285656629097',
    address: 'Jl Bratang 1H No 23, Surabaya, Ngagel Rejo, Wonokromo, Kota Surabaya, Jawa Timur',
    email: 'totiyono.n@email.com',
    date: '18 Mei 2026, 14:47',
    itemsCount: 2,
    items: [
      { sku: 'VGD-BPK-001', name: 'Vanguard Training Backpack', price: 850999, qty: 2 }
    ],
    amount: 2381998,
    paymentStatus: 'Pending', // Belum Bayar
    paymentMethod: 'Transfer Bank',
    shippingStatus: 'Unfulfilled', // Belum Dikirim / Diproses
    courier: 'Atur kurir...'
  },
  {
    id: 'FE-00013',
    invoice: '01-15-20260511-W2SKMX',
    trackingNumber: '928309203920909302',
    customer: 'Syah Reza',
    phone: '6285179720622',
    address: ',, Nambak, Bungkal, Kab. Ponorogo, Jawa Timur',
    email: 'syah.reza@email.com',
    date: '11 Mei 2026, 10:15',
    itemsCount: 1,
    items: [
      { sku: 'VLC-SHR-002', name: 'Velocity Split Running Shorts', price: 179900, qty: 1, variant: 'S' }
    ],
    amount: 979900,
    paymentStatus: 'Paid',
    paymentMethod: 'Virtual Account BCA',
    shippingStatus: 'Shipped', // Dikirim
    courier: 'Atur kurir...'
  },
  {
    id: 'FE-00012',
    invoice: '01-17-20260417-MMDTNH',
    trackingNumber: '9840293029',
    customer: 'Budi Anto',
    phone: '628123456789',
    address: 'Jl. Raya Darmo No. 12, Surabaya, Jawa Timur',
    email: 'budi.anto@email.com',
    date: '17 April 2026, 11:30',
    itemsCount: 1,
    items: [
      { sku: 'VGD-BPK-001', name: 'Vanguard Training Backpack', price: 850999, qty: 1 }
    ],
    amount: 850999,
    paymentStatus: 'Paid',
    paymentMethod: 'ShopeePay',
    shippingStatus: 'Delivered', // Selesai
    courier: 'SiCepat'
  },
  {
    id: 'FE-00011',
    invoice: 'BILL-20260510-AB12CD',
    customer: 'Citra Kirana',
    phone: '628571234567',
    address: 'Komp. BSD Sektor 1.2, Tangerang Selatan, Banten',
    email: 'citrak@email.com',
    date: '10 Mei 2026, 15:10',
    itemsCount: 1,
    items: [
      { sku: 'TBL-JTI-003', name: 'Meja Kopi Jati', price: 850000, qty: 1 }
    ],
    amount: 850000,
    paymentStatus: 'Pending',
    paymentMethod: 'QRIS',
    shippingStatus: 'Unfulfilled',
    courier: 'Atur kurir...'
  },
  {
    id: 'FE-00010',
    invoice: 'BILL-20260509-XY98ZT',
    customer: 'Sarah Wijaya',
    phone: '628998877665',
    address: 'Jl. Kemang Raya No. 45, Jakarta Selatan, DKI Jakarta',
    email: 'sarah.w@email.com',
    date: '09 Mei 2026, 14:40',
    itemsCount: 1,
    items: [
      { sku: 'SFA-VLV-002', name: 'Sofa Premium Velvet Modern', price: 4500000, qty: 1 }
    ],
    amount: 4500000,
    paymentStatus: 'Failed',
    paymentMethod: 'Credit Card',
    shippingStatus: 'Unfulfilled',
    courier: 'Atur kurir...'
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
  { id: 'CUST-001', name: 'Totiyono Nugroho', email: 'totiyono.n@email.com', phone: '6285656629097', address: 'Jl Bratang 1H No 23, Surabaya, Jawa Timur', joinedDate: '2026-01-15', status: 'Aktif' },
  { id: 'CUST-002', name: 'Syah Reza', email: 'syah.reza@email.com', phone: '6285179720622', address: 'Komp. Bungkal, Ponorogo, Jawa Timur', joinedDate: '2026-02-10', status: 'Aktif' },
  { id: 'CUST-003', name: 'Budi Anto', email: 'budi.anto@email.com', phone: '628123456789', address: 'Jl. Raya Darmo No. 12, Surabaya, Jawa Timur', joinedDate: '2026-02-18', status: 'Aktif' },
  { id: 'CUST-004', name: 'Citra Kirana', email: 'citrak@email.com', phone: '628571234567', address: 'Komp. BSD Sektor 1.2, Tangerang Selatan, Banten', joinedDate: '2026-03-01', status: 'Aktif' },
  { id: 'CUST-005', name: 'Sarah Wijaya', email: 'sarah.w@email.com', phone: '628998877665', address: 'Jl. Kemang Raya No. 45, Jakarta Selatan, DKI Jakarta', joinedDate: '2026-03-12', status: 'Suspend' }
];

const SEED_ADMINS = [
  { username: 'superadmin@bizmate.id', name: 'Admin Utama', role: 'Super Admin', status: 'Aktif', lastActive: 'Sekarang' },
  { username: 'keuangan@bizmate.id', name: 'Dewi Lestari', role: 'Admin Keuangan', status: 'Aktif', lastActive: '2 menit yang lalu' },
  { username: 'gudang@bizmate.id', name: 'Joko Susilo', role: 'Admin Gudang', status: 'Aktif', lastActive: '1 jam yang lalu' },
  { username: 'sales@bizmate.id', name: 'Rian Hidayat', role: 'CS / Sales', status: 'Nonaktif', lastActive: '3 hari yang lalu' }
];

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

// Initialize database
function initDatabase() {
  const DB_VERSION = 'v2';
  let dbVer = localStorage.getItem('bizmate_db_version');
  let products = localStorage.getItem('bizmate_products');
  let orders = localStorage.getItem('bizmate_orders');
  let categories = localStorage.getItem('bizmate_categories');
  let customers = localStorage.getItem('bizmate_customers');
  let admins = localStorage.getItem('bizmate_admins');
  let cmsLanding = localStorage.getItem('bizmate_cms_landing');
  let promos = localStorage.getItem('bizmate_promos');

  if (!products || dbVer !== DB_VERSION) {
    localStorage.setItem('bizmate_products', JSON.stringify(SEED_PRODUCTS));
    localStorage.setItem('bizmate_db_version', DB_VERSION);
  }
  
  if (!orders || !orders.includes('FE-00014')) {
    // Force refresh if it is empty or does not have the new orders
    localStorage.setItem('bizmate_orders', JSON.stringify(SEED_ORDERS));
  }
  
  if (!categories) {
    localStorage.setItem('bizmate_categories', JSON.stringify(SEED_CATEGORIES));
  }

  if (!customers) {
    localStorage.setItem('bizmate_customers', JSON.stringify(SEED_CUSTOMERS));
  }

  if (!admins) {
    localStorage.setItem('bizmate_admins', JSON.stringify(SEED_ADMINS));
  }

  if (!cmsLanding) {
    localStorage.setItem('bizmate_cms_landing', JSON.stringify(SEED_CMS_LANDING));
  }

  if (!promos || !promos.includes('startDate') || !promos.includes('CHR-OUT-004')) {
    localStorage.setItem('bizmate_promos', JSON.stringify(SEED_PROMOS));
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
    orders.unshift({
      id: `#ORD-${Math.floor(1000 + Math.random() * 9000)}`,
      date: new Date().toLocaleString('id-ID', { day: 'numeric', month: 'long', year: 'numeric', hour: '2-digit', minute: '2-digit' }) + ' WIB',
      ...order
    });
    localStorage.setItem('bizmate_orders', JSON.stringify(orders));
    return orders;
  },

  updateOrderPayment(id, status) {
    const orders = this.getOrders();
    const idx = orders.findIndex(o => o.id === id);
    if (idx !== -1) {
      orders[idx].paymentStatus = status;
      localStorage.setItem('bizmate_orders', JSON.stringify(orders));
    }
    return orders;
  },

  updateOrderShipping(id, status) {
    const orders = this.getOrders();
    const idx = orders.findIndex(o => o.id === id);
    if (idx !== -1) {
      orders[idx].shippingStatus = status;
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
  }
};

// Auto run initialization on load
initDatabase();
