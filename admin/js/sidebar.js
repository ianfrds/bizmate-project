document.addEventListener("DOMContentLoaded", () => {
  const sidebarEl = document.getElementById("sidebar");
  if (!sidebarEl) return;

  // 1. Ubah class container utama sidebar agar menjadi light mode/putih bersih
  sidebarEl.className = "fixed inset-y-0 left-0 z-50 w-64 bg-white text-slate-600 flex flex-col transform -translate-x-full lg:translate-x-0 transition-transform duration-300 shadow-xl lg:shadow-none border-r border-slate-100";

  // 2. Suntikkan (Inject) CSS khusus sidebar ke dalam head untuk menimpa gaya dark mode bawaan dari file HTML
  const styleEl = document.createElement("style");
  styleEl.innerHTML = `
    #sidebar {
      background-color: #ffffff !important;
      color: #475569 !important;
      border-right: 1px solid #f1f5f9 !important;
    }
    #sidebar .nav-item {
      color: #475569 !important;
      border-left: 3px solid transparent;
      transition: all 0.2s ease;
    }
    #sidebar .nav-item:hover {
      color: #0c4cb4 !important;
      background-color: rgba(12, 76, 180, 0.05) !important;
    }
    #sidebar .nav-item.active {
      background: linear-gradient(90deg, rgba(12, 76, 180, 0.08) 0%, transparent 100%) !important;
      color: #0c4cb4 !important;
      border-left: 3px solid #fa7315 !important;
      font-weight: 700 !important;
    }
    #sidebar .submenu-item {
      color: #64748b !important;
      transition: all 0.2s ease;
    }
    #sidebar .submenu-item:hover {
      color: #0c4cb4 !important;
    }
    #sidebar .submenu-item.active {
      color: #0c4cb4 !important;
      font-weight: 700 !important;
    }
    #sidebar .custom-scrollbar::-webkit-scrollbar-thumb {
      background: #e2e8f0 !important;
    }
    #sidebar .custom-scrollbar:hover::-webkit-scrollbar-thumb {
      background: #cbd5e1 !important;
    }
  `;
  document.head.appendChild(styleEl);

  // 3. Template HTML Sidebar dengan tema Light Mode yang premium
  sidebarEl.innerHTML = `
    <!-- Logo Area -->
    <div class="h-20 flex items-center justify-between px-6 border-b border-slate-100 shrink-0">
      <a href="index.html" class="flex items-center gap-3 group">
        <div class="w-9 h-9 rounded-xl bg-gradient-to-tr from-brand-blueRoyal to-brand-orange flex items-center justify-center text-white shadow-lg shadow-brand-blueRoyal/20 transform group-hover:scale-105 transition">
          <i class="ti ti-sofa text-xl"></i>
        </div>
        <div class="flex flex-col">
          <span class="font-outfit font-extrabold text-xl text-slate-800 tracking-tight leading-none">
            biz<span class="text-brand-orange">mate</span>
          </span>
          <span class="text-[9px] font-bold text-slate-400 uppercase tracking-widest mt-0.5">Admin Console</span>
        </div>
      </a>
      <button onclick="toggleSidebar()" class="lg:hidden p-1 text-slate-400 hover:text-slate-800 transition">
        <i class="ti ti-x text-xl"></i>
      </button>
    </div>

    <!-- Navigation Menu -->
    <div class="flex-grow overflow-y-auto custom-scrollbar py-6 px-4 space-y-8">
      <!-- Main Menu -->
      <div class="space-y-1">
        <p class="px-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2">Main Menu</p>
        <a href="index.html" id="menu-dashboard" class="flex items-center gap-3 px-4 py-2.5 rounded-lg nav-item text-sm font-semibold text-slate-600 hover:text-brand-blueRoyal hover:bg-brand-blueRoyal/5 transition duration-200">
          <i class="ti ti-layout-dashboard text-lg"></i>
          Dashboard
        </a>
        <a href="keuangan.html" id="menu-keuangan" class="flex items-center gap-3 px-4 py-2.5 rounded-lg nav-item text-sm font-semibold text-slate-600 hover:text-brand-blueRoyal hover:bg-brand-blueRoyal/5 transition duration-200">
          <i class="ti ti-chart-pie text-lg"></i>
          Keuangan
        </a>
      </div>

      <!-- Store Management -->
      <div class="space-y-1">
        <p class="px-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2">Store Management</p>
        
        <!-- Pesanan -->
        <div class="space-y-0.5">
          <button onclick="toggleSubmenu('sub-pesanan', 'arrow-pesanan')" class="w-full flex items-center justify-between px-4 py-2.5 rounded-lg text-sm font-semibold text-slate-600 hover:text-brand-blueRoyal hover:bg-brand-blueRoyal/5 transition duration-200">
            <div class="flex items-center gap-3">
              <i class="ti ti-shopping-cart text-lg"></i>
              Pesanan
            </div>
            <i id="arrow-pesanan" class="ti ti-chevron-down text-sm transition-transform text-slate-400"></i>
          </button>
          <div id="sub-pesanan" class="hidden pl-11 pr-4 py-1 space-y-1">
            <a href="pesanan.html" id="menu-pesanan-list" class="block py-2 text-[13px] font-medium submenu-item pl-3.5">Daftar Pesanan</a>
          </div>
        </div>

        <!-- Produk -->
        <div class="space-y-0.5">
          <button onclick="toggleSubmenu('sub-produk', 'arrow-produk')" class="w-full flex items-center justify-between px-4 py-2.5 rounded-lg text-sm font-semibold text-slate-600 hover:text-brand-blueRoyal hover:bg-brand-blueRoyal/5 transition duration-200">
            <div class="flex items-center gap-3">
              <i class="ti ti-box text-lg"></i>
              Produk
            </div>
            <i id="arrow-produk" class="ti ti-chevron-down text-sm transition-transform text-slate-400"></i>
          </button>
          <div id="sub-produk" class="hidden pl-11 pr-4 py-1 space-y-1">
            <a href="produk.html" id="menu-produk-list" class="block py-2 text-[13px] font-medium submenu-item pl-3.5">Semua Produk</a>
            <a href="kategori.html" id="menu-kategori-list" class="block py-2 text-[13px] font-medium submenu-item pl-3.5">Kategori</a>
          </div>
        </div>

        <!-- Promosi -->
        <div class="space-y-0.5">
          <button onclick="toggleSubmenu('sub-promosi', 'arrow-promosi')" class="w-full flex items-center justify-between px-4 py-2.5 rounded-lg text-sm font-semibold text-slate-600 hover:text-brand-blueRoyal hover:bg-brand-blueRoyal/5 transition duration-200">
            <div class="flex items-center gap-3">
              <i class="ti ti-ticket text-lg"></i>
              Promosi
            </div>
            <i id="arrow-promosi" class="ti ti-chevron-down text-sm transition-transform text-slate-400"></i>
          </button>
          <div id="sub-promosi" class="hidden pl-11 pr-4 py-1 space-y-1">
            <a href="promosi.html" id="menu-promosi-setting" class="block py-2 text-[13px] font-medium submenu-item pl-3.5">Pengaturan Promosi</a>
          </div>
        </div>
      </div>

      <!-- Master Data & System -->
      <div class="space-y-1">
        <p class="px-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2">System & Config</p>
        
        <div class="space-y-0.5">
          <button onclick="toggleSubmenu('sub-master', 'arrow-master')" class="w-full flex items-center justify-between px-4 py-2.5 rounded-lg text-sm font-semibold text-slate-600 hover:text-brand-blueRoyal hover:bg-brand-blueRoyal/5 transition duration-200">
            <div class="flex items-center gap-3">
              <i class="ti ti-database text-lg"></i>
              Master Data
            </div>
            <i id="arrow-master" class="ti ti-chevron-down text-sm transition-transform text-slate-400"></i>
          </button>
          <div id="sub-master" class="hidden pl-11 pr-4 py-1 space-y-1">
            <a href="customer.html" id="menu-customer-list" class="block py-2 text-[13px] font-medium submenu-item pl-3.5">Customer</a>
            <a href="users.html" id="menu-users-list" class="block py-2 text-[13px] font-medium submenu-item pl-3.5">Admin Users</a>
          </div>
        </div>

        <div class="space-y-0.5">
          <button onclick="toggleSubmenu('sub-konten', 'arrow-konten')" class="w-full flex items-center justify-between px-4 py-2.5 rounded-lg text-sm font-semibold text-slate-600 hover:text-brand-blueRoyal hover:bg-brand-blueRoyal/5 transition duration-200">
            <div class="flex items-center gap-3">
              <i class="ti ti-layout-kanban text-lg"></i>
              Konten (CMS)
            </div>
            <i id="arrow-konten" class="ti ti-chevron-down text-sm transition-transform text-slate-400"></i>
          </button>
          <div id="sub-konten" class="hidden pl-11 pr-4 py-1 space-y-1">
            <a href="landing-page.html" id="menu-landing-page" class="block py-2 text-[13px] font-medium submenu-item pl-3.5">Landing Page</a>
          </div>
        </div>

        <a href="pengaturan.html" id="menu-pengaturan" class="flex items-center gap-3 px-4 py-2.5 rounded-lg nav-item text-sm font-semibold text-slate-600 hover:text-brand-blueRoyal hover:bg-brand-blueRoyal/5 transition duration-200">
          <i class="ti ti-settings text-lg"></i>
          Pengaturan
        </a>
      </div>
    </div>

    <!-- User Profile Footer -->
    <div class="p-4 border-t border-slate-100 shrink-0">
      <div class="flex items-center gap-3 px-2 py-2 rounded-xl hover:bg-slate-50 cursor-pointer transition duration-200">
        <div class="w-10 h-10 rounded-full bg-gradient-to-tr from-brand-blueRoyal to-brand-orange p-0.5">
          <img src="https://ui-avatars.com/api/?name=Admin+Utama&background=0D8ABC&color=fff" alt="Avatar" class="w-full h-full rounded-full border-2 border-white object-cover">
        </div>
        <div class="flex-grow overflow-hidden">
          <p class="text-sm font-bold text-slate-800 truncate">Admin Utama</p>
          <p class="text-[11px] text-slate-400 font-medium truncate">superadmin@bizmate.id</p>
        </div>
        <i class="ti ti-selector text-slate-400"></i>
      </div>
    </div>
  `;

  // 4. Deteksi Halaman Aktif & Auto-Highlight + Auto-Expand Dropdown
  const currentPath = window.location.pathname;
  
  if (currentPath.includes("index.html") || currentPath.endsWith("/admin") || currentPath.endsWith("/admin/")) {
    activateMenu("menu-dashboard");
  } else if (currentPath.includes("keuangan.html")) {
    activateMenu("menu-keuangan");
  } else if (currentPath.includes("pesanan.html")) {
    activateSubmenu("menu-pesanan-list");
    expandDropdown("sub-pesanan", "arrow-pesanan");
  } else if (currentPath.includes("detail-pesanan.html")) {
    activateSubmenu("menu-pesanan-list");
    expandDropdown("sub-pesanan", "arrow-pesanan");
  } else if (currentPath.includes("produk.html")) {
    activateSubmenu("menu-produk-list");
    expandDropdown("sub-produk", "arrow-produk");
  } else if (currentPath.includes("tambah-produk.html")) {
    activateSubmenu("menu-produk-list");
    expandDropdown("sub-produk", "arrow-produk");
  } else if (currentPath.includes("kategori.html")) {
    activateSubmenu("menu-kategori-list");
    expandDropdown("sub-produk", "arrow-produk");
  } else if (currentPath.includes("promosi.html") || currentPath.includes("tambah-promosi.html")) {
    activateSubmenu("menu-promosi-setting");
    expandDropdown("sub-promosi", "arrow-promosi");
  } else if (currentPath.includes("customer.html")) {
    activateSubmenu("menu-customer-list");
    expandDropdown("sub-master", "arrow-master");
  } else if (currentPath.includes("users.html")) {
    activateSubmenu("menu-users-list");
    expandDropdown("sub-master", "arrow-master");
  } else if (currentPath.includes("landing-page.html")) {
    activateSubmenu("menu-landing-page");
    expandDropdown("sub-konten", "arrow-konten");
  } else if (currentPath.includes("pengaturan.html")) {
    activateMenu("menu-pengaturan");
  }

  function activateMenu(id) {
    const el = document.getElementById(id);
    if (el) el.classList.add("active");
  }

  function activateSubmenu(id) {
    const el = document.getElementById(id);
    if (el) el.classList.add("active");
  }

  function expandDropdown(menuId, arrowId) {
    const menu = document.getElementById(menuId);
    const arrow = document.getElementById(arrowId);
    if (menu) menu.classList.remove("hidden");
    if (arrow) arrow.classList.add("rotate-180");
  }
});

// 5. Fungsi Event Handler Global untuk Sidebar (Dideklarasikan secara global)
window.toggleSidebar = function() {
  const sidebar = document.getElementById('sidebar');
  if (sidebar) {
    sidebar.classList.toggle('-translate-x-full');
  }
};

window.toggleSubmenu = function(id, arrowId) {
  const submenu = document.getElementById(id);
  const arrow = document.getElementById(arrowId);
  if (submenu) {
    submenu.classList.toggle('hidden');
  }
  if (arrow) {
    arrow.classList.toggle('rotate-180');
  }
};
