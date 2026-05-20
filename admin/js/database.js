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

// Initialize database
function initDatabase() {
  const DB_VERSION = 'v2';
  let dbVer = localStorage.getItem('bizmate_db_version');
  let products = localStorage.getItem('bizmate_products');
  let orders = localStorage.getItem('bizmate_orders');
  let categories = localStorage.getItem('bizmate_categories');

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

  // Global Statistics API
  getStats() {
    const products = this.getProducts();
    const orders = this.getOrders();
    
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
      customersCount: 8591 + orders.length
    };
  }
};

// Auto run initialization on load
initDatabase();
