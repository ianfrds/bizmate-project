document.addEventListener("DOMContentLoaded", () => {
  const sidebarEl = document.getElementById("sidebar");
  if (!sidebarEl) return;

  // 1. Template HTML Sidebar dengan tema warna premium #0c4cb4 dan #fa7315
  sidebarEl.innerHTML = `
    <!-- Logo Area -->
    <div class="h-20 flex items-center justify-between px-6 border-b border-white/10 shrink-0">
      <a href="index.html" class="flex items-center gap-3 group">
        <div class="w-9 h-9 rounded-xl bg-gradient-to-tr from-brand-blueRoyal to-brand-orange flex items-center justify-center text-white shadow-lg shadow-brand-blueRoyal/30 transform group-hover:scale-105 transition">
          <i class="ti ti-sofa text-xl"></i>
        </div>
        <div class="flex flex-col">
          <span class="font-outfit font-extrabold text-xl text-white tracking-tight leading-none">
            biz<span class="text-brand-orange">mate</span>
          </span>
          <span class="text-[9px] font-bold text-slate-500 uppercase tracking-widest mt-0.5">Admin Console</span>
        </div>
      </a>
      <button onclick="toggleSidebar()" class="lg:hidden p-1 hover:text-white transition">
        <i class="ti ti-x text-xl"></i>
      </button>
    </div>

    <!-- Navigation Menu -->
    <div class="flex-grow overflow-y-auto custom-scrollbar py-6 px-4 space-y-8">
      <!-- Main Menu -->
      <div class="space-y-1">
        <p class="px-4 text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-2">Main Menu</p>
        <a href="index.html" id="menu-dashboard" class="flex items-center gap-3 px-4 py-2.5 rounded-lg nav-item text-sm font-semibold hover:text-white hover:bg-white/5">
          <i class="ti ti-layout-dashboard text-lg"></i>
          Dashboard
        </a>
        <a href="keuangan.html" id="menu-keuangan" class="flex items-center gap-3 px-4 py-2.5 rounded-lg nav-item text-sm font-semibold hover:text-white hover:bg-white/5">
          <i class="ti ti-chart-pie text-lg"></i>
          Keuangan
        </a>
      </div>

      <!-- Store Management -->
      <div class="space-y-1">
        <p class="px-4 text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-2">Store Management</p>
        
        <!-- Pesanan -->
        <div class="space-y-0.5">
          <button onclick="toggleSubmenu('sub-pesanan', 'arrow-pesanan')" class="w-full flex items-center justify-between px-4 py-2.5 rounded-lg text-sm font-semibold hover:text-white hover:bg-white/5 transition">
            <div class="flex items-center gap-3">
              <i class="ti ti-shopping-cart text-lg"></i>
              Pesanan
            </div>
            <i id="arrow-pesanan" class="ti ti-chevron-down text-sm transition-transform"></i>
          </button>
          <div id="sub-pesanan" class="hidden pl-11 pr-4 py-1 space-y-1">
            <a href="pesanan.html" id="menu-pesanan-list" class="block py-2 text-[13px] font-medium text-slate-400 hover:text-white transition pl-3.5">Daftar Pesanan</a>
          </div>
        </div>

        <!-- Produk -->
        <div class="space-y-0.5">
          <button onclick="toggleSubmenu('sub-produk', 'arrow-produk')" class="w-full flex items-center justify-between px-4 py-2.5 rounded-lg text-sm font-semibold hover:text-white hover:bg-white/5 transition">
            <div class="flex items-center gap-3">
              <i class="ti ti-box text-lg"></i>
              Produk
            </div>
            <i id="arrow-produk" class="ti ti-chevron-down text-sm transition-transform"></i>
          </button>
          <div id="sub-produk" class="hidden pl-11 pr-4 py-1 space-y-1">
            <a href="produk.html" id="menu-produk-list" class="block py-2 text-[13px] font-medium text-slate-400 hover:text-white transition pl-3.5">Semua Produk</a>
            <a href="kategori.html" id="menu-kategori-list" class="block py-2 text-[13px] font-medium text-slate-400 hover:text-white transition pl-3.5">Kategori</a>
          </div>
        </div>
      </div>

      <!-- Master Data & System -->
      <div class="space-y-1">
        <p class="px-4 text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-2">System & Config</p>
        
        <div class="space-y-0.5">
          <button onclick="toggleSubmenu('sub-master', 'arrow-master')" class="w-full flex items-center justify-between px-4 py-2.5 rounded-lg text-sm font-semibold hover:text-white hover:bg-white/5 transition">
            <div class="flex items-center gap-3">
              <i class="ti ti-database text-lg"></i>
              Master Data
            </div>
            <i id="arrow-master" class="ti ti-chevron-down text-sm transition-transform"></i>
          </button>
          <div id="sub-master" class="hidden pl-11 pr-4 py-1 space-y-1">
            <a href="#" class="block py-2 text-[13px] font-medium text-slate-400 hover:text-white/60 transition pl-3.5 pointer-events-none opacity-55">Customer</a>
            <a href="#" class="block py-2 text-[13px] font-medium text-slate-400 hover:text-white/60 transition pl-3.5 pointer-events-none opacity-55">Admin Users</a>
          </div>
        </div>

        <div class="space-y-0.5">
          <button onclick="toggleSubmenu('sub-konten', 'arrow-konten')" class="w-full flex items-center justify-between px-4 py-2.5 rounded-lg text-sm font-semibold hover:text-white hover:bg-white/5 transition">
            <div class="flex items-center gap-3">
              <i class="ti ti-layout-kanban text-lg"></i>
              Konten (CMS)
            </div>
            <i id="arrow-konten" class="ti ti-chevron-down text-sm transition-transform"></i>
          </button>
          <div id="sub-konten" class="hidden pl-11 pr-4 py-1 space-y-1">
            <a href="#" class="block py-2 text-[13px] font-medium text-slate-400 hover:text-white/60 transition pl-3.5 pointer-events-none opacity-55">Landing Page</a>
          </div>
        </div>

        <a href="#" class="flex items-center gap-3 px-4 py-2.5 rounded-lg nav-item text-sm font-semibold hover:text-white/60 pointer-events-none opacity-55">
          <i class="ti ti-settings text-lg"></i>
          Pengaturan
        </a>
      </div>
    </div>

    <!-- User Profile Footer -->
    <div class="p-4 border-t border-white/10 shrink-0">
      <div class="flex items-center gap-3 px-2 py-2 rounded-xl hover:bg-white/5 cursor-pointer transition">
        <div class="w-10 h-10 rounded-full bg-gradient-to-tr from-brand-blueRoyal to-brand-orange p-0.5">
          <img src="https://ui-avatars.com/api/?name=Admin+Utama&background=0D8ABC&color=fff" alt="Avatar" class="w-full h-full rounded-full border-2 border-brand-sidebar object-cover">
        </div>
        <div class="flex-grow overflow-hidden">
          <p class="text-sm font-bold text-white truncate">Admin Utama</p>
          <p class="text-[11px] text-slate-500 font-medium truncate">superadmin@bizmate.id</p>
        </div>
        <i class="ti ti-selector text-slate-500"></i>
      </div>
    </div>
  `;

  // 2. Deteksi Halaman Aktif & Auto-Highlight + Auto-Expand Dropdown
  const currentPath = window.location.pathname;
  
  if (currentPath.includes("index.html") || currentPath.endsWith("/admin") || currentPath.endsWith("/admin/")) {
    activateMenu("menu-dashboard");
  } else if (currentPath.includes("keuangan.html")) {
    activateMenu("menu-keuangan");
  } else if (currentPath.includes("pesanan.html")) {
    activateMenu("menu-pesanan-list");
    expandDropdown("sub-pesanan", "arrow-pesanan");
  } else if (currentPath.includes("produk.html")) {
    activateMenu("menu-produk-list");
    expandDropdown("sub-produk", "arrow-produk");
  } else if (currentPath.includes("tambah-produk.html")) {
    activateMenu("menu-produk-list");
    expandDropdown("sub-produk", "arrow-produk");
  } else if (currentPath.includes("kategori.html")) {
    activateMenu("menu-kategori-list");
    expandDropdown("sub-produk", "arrow-produk");
  }

  function activateMenu(id) {
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

// 3. Fungsi Event Handler Global untuk Sidebar (Dideklarasikan secara global)
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
