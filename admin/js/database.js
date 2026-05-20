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
    stock: 2,
    minStock: 5,
    status: 'Tersedia (In Stock)',
    description: 'Sofa berbalut kain velvet mewah dengan kaki logam elegan untuk ruang tamu modern.',
    image: 'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&w=150&q=80',
    active: true,
    created: '2026-05-19T11:15:00Z'
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
    id: '#ORD-9025',
    customer: 'Farhan Maulana',
    email: 'farhan.m@email.com',
    date: '19 Mei 2026, 16:20',
    itemsCount: 1,
    items: [
      { sku: 'CHR-RED-001', name: 'Kursi Santai Telur', price: 1899000, qty: 1 }
    ],
    amount: 1899000,
    paymentStatus: 'Paid',
    paymentMethod: 'QRIS GOTO',
    shippingStatus: 'Unfulfilled'
  },
  {
    id: '#ORD-9024',
    customer: 'Citra Kirana',
    email: 'citrak@email.com',
    date: '19 Mei 2026, 15:10',
    itemsCount: 2,
    items: [
      { sku: 'TBL-JTI-003', name: 'Meja Kopi Jati', price: 850000, qty: 2 }
    ],
    amount: 1700000,
    paymentStatus: 'Pending',
    paymentMethod: 'Virtual Account BNI',
    shippingStatus: 'Unfulfilled'
  },
  {
    id: '#ORD-9023',
    customer: 'Reza Rahadian',
    email: 'rezar@email.com',
    date: '19 Mei 2026, 14:55',
    itemsCount: 1,
    items: [
      { sku: 'SFA-VLV-002', name: 'Sofa Premium Velvet Modern', price: 4500000, qty: 1 }
    ],
    amount: 4500000,
    paymentStatus: 'Paid',
    paymentMethod: 'ShopeePay',
    shippingStatus: 'Shipped'
  },
  {
    id: '#ORD-9022',
    customer: 'Sarah Wijaya',
    email: 'sarah.w@email.com',
    date: '19 Mei 2026, 14:40',
    itemsCount: 1,
    items: [
      { sku: 'TBL-JTI-003', name: 'Meja Kopi Jati Minimalis', price: 850000, qty: 1 }
    ],
    amount: 850000,
    paymentStatus: 'Failed',
    paymentMethod: 'Credit Card',
    shippingStatus: 'Unfulfilled'
  },
  {
    id: '#ORD-9021',
    customer: 'Ahmad Subagyo',
    email: 'ahmad@email.com',
    date: '19 Mei 2026, 14:30',
    itemsCount: 2,
    items: [
      { sku: 'CHR-RED-001', name: 'Kursi Santai Telur (Single Wheel)', price: 1899000, qty: 1 }
    ],
    amount: 1899000,
    paymentStatus: 'Paid',
    paymentMethod: 'Virtual Account Mandiri',
    shippingStatus: 'Unfulfilled'
  },
  {
    id: '#ORD-9020',
    customer: 'Diana Maharani',
    email: 'diana@email.com',
    date: '18 Mei 2026, 11:15',
    itemsCount: 1,
    items: [
      { sku: 'SFA-VLV-002', name: 'Sofa Premium Velvet Modern', price: 4500000, qty: 1 }
    ],
    amount: 4500000,
    paymentStatus: 'Paid',
    paymentMethod: 'Credit Card (Stripe)',
    shippingStatus: 'Shipped'
  },
  {
    id: '#ORD-9019',
    customer: 'Budi Kurniawan',
    email: 'budi.k@email.com',
    date: '18 Mei 2026, 09:45',
    itemsCount: 1,
    items: [
      { sku: 'TBL-JTI-003', name: 'Meja Kopi Jati Minimalis', price: 850000, qty: 1 }
    ],
    amount: 850000,
    paymentStatus: 'Pending',
    paymentMethod: 'Virtual Account BCA',
    shippingStatus: 'Awaiting'
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
  let products = localStorage.getItem('bizmate_products');
  let orders = localStorage.getItem('bizmate_orders');
  let categories = localStorage.getItem('bizmate_categories');

  if (!products) {
    localStorage.setItem('bizmate_products', JSON.stringify(SEED_PRODUCTS));
  }
  
  if (!orders || JSON.parse(orders).length === 3) {
    // Force refresh if it is empty or has exactly 3 old orders
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
