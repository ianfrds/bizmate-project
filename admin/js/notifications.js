/**
 * Bizmate Business Notification System (Global Drawer)
 * Dynamically queries operational tasks and provides interactive warnings and deep links.
 */

(function () {
  // Local storage key for marked-read notification IDs
  const READ_NOTIF_KEY = 'bizmate_read_notifications';

  function getReadNotifications() {
    try {
      return JSON.parse(localStorage.getItem(READ_NOTIF_KEY)) || [];
    } catch (e) {
      return [];
    }
  }

  function markAsRead(notifId) {
    const reads = getReadNotifications();
    if (!reads.includes(notifId)) {
      reads.push(notifId);
      localStorage.setItem(READ_NOTIF_KEY, JSON.stringify(reads));
    }
    updateNotificationBadge();
  }

  function markAllAsRead() {
    const notifs = BizmateDB.getNotifications();
    const reads = notifs.map(n => n.id);
    localStorage.setItem(READ_NOTIF_KEY, JSON.stringify(reads));
    updateNotificationBadge();
    renderNotificationList();
  }

  function updateNotificationBadge() {
    const bellBtn = document.getElementById('js-notification-btn');
    if (!bellBtn) return;

    const notifs = BizmateDB.getNotifications();
    const reads = getReadNotifications();
    const unreadCount = notifs.filter(n => !reads.includes(n.id)).length;

    // Remove old badge
    const oldBadge = bellBtn.querySelector('.js-notif-badge');
    if (oldBadge) oldBadge.remove();

    if (unreadCount > 0) {
      const badge = document.createElement('span');
      badge.className = 'js-notif-badge absolute -top-1.5 -right-1.5 min-w-5 h-5 px-1 bg-brand-orange text-white text-[10px] font-black rounded-full flex items-center justify-center border-2 border-white animate-bounce';
      badge.textContent = unreadCount;
      bellBtn.appendChild(badge);
    }
  }

  function renderNotificationList() {
    const listContainer = document.getElementById('js-notification-list');
    if (!listContainer) return;

    const notifs = BizmateDB.getNotifications();
    const reads = getReadNotifications();

    if (notifs.length === 0) {
      listContainer.innerHTML = `
        <div class="flex flex-col items-center justify-center py-16 px-4 text-center space-y-4">
          <div class="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center text-slate-300">
            <i class="ti ti-bell-off text-3xl"></i>
          </div>
          <div>
            <h4 class="font-bold text-slate-700 text-sm">Tidak Ada Notifikasi</h4>
            <p class="text-xs text-slate-400 mt-1 max-w-[200px]">Semua operasional toko Anda terpantau aman dan terkendali.</p>
          </div>
        </div>
      `;
      return;
    }

    const typeConfig = {
      danger: { bg: 'bg-red-50 text-red-600', icon: 'ti-alert-circle' },
      warning: { bg: 'bg-amber-50 text-amber-600', icon: 'ti-alert-triangle' },
      info: { bg: 'bg-indigo-50 text-brand-blueRoyal', icon: 'ti-info-circle' },
      success: { bg: 'bg-emerald-50 text-emerald-600', icon: 'ti-check' }
    };

    listContainer.innerHTML = notifs.map(item => {
      const isRead = reads.includes(item.id);
      const conf = typeConfig[item.type] || typeConfig.info;

      return `
        <div data-id="${item.id}" data-link="${item.link}" class="js-notif-item flex gap-4 p-4 rounded-2xl border border-slate-100 bg-white hover:bg-slate-50 transition cursor-pointer relative group ${isRead ? 'opacity-60' : 'shadow-soft hover:shadow-md'}">
          <div class="shrink-0 w-10 h-10 rounded-xl flex items-center justify-center ${conf.bg}">
            <i class="ti ${conf.icon} text-lg"></i>
          </div>
          <div class="flex-grow min-w-0 pr-4">
            <div class="flex justify-between items-start gap-2">
              <h3 class="font-bold text-slate-800 text-xs sm:text-sm truncate">${item.title}</h3>
            </div>
            <p class="text-xs text-slate-500 mt-1 leading-relaxed line-clamp-2">${item.message}</p>
            <span class="text-[10px] text-slate-400 font-bold block mt-2">${item.time}</span>
          </div>
          ${!isRead ? '<span class="absolute top-5 right-5 w-2 h-2 bg-brand-orange rounded-full"></span>' : ''}
        </div>
      `;
    }).join('');

    // Add click listeners to items
    listContainer.querySelectorAll('.js-notif-item').forEach(item => {
      item.addEventListener('click', () => {
        const notifId = item.dataset.id;
        const link = item.dataset.link;
        markAsRead(notifId);
        closeDrawer();
        setTimeout(() => {
          window.location.href = link;
        }, 150);
      });
    });
  }

  function injectDrawerMarkup() {
    if (document.getElementById('js-notification-drawer')) return;

    const drawer = document.createElement('div');
    drawer.id = 'js-notification-drawer';
    drawer.className = 'fixed inset-0 z-[100] hidden font-sans';
    drawer.innerHTML = `
      <!-- Backdrop -->
      <div id="js-notification-backdrop" class="fixed inset-0 bg-slate-900/50 backdrop-blur-sm transition-opacity duration-300 opacity-0"></div>
      
      <!-- Drawer Panel -->
      <div id="js-notification-panel" class="fixed inset-y-0 right-0 max-w-md w-full bg-white shadow-2xl flex flex-col transform translate-x-full transition-transform duration-300 border-l border-slate-100">
        <!-- Header -->
        <div class="px-6 py-5 border-b border-slate-100 flex items-center justify-between">
          <div class="flex items-center gap-2.5">
            <div class="p-2.5 bg-brand-blueLight text-brand-blueRoyal rounded-xl">
              <i class="ti ti-bell text-lg"></i>
            </div>
            <div>
              <h2 class="font-outfit font-black text-slate-800 text-base sm:text-lg leading-tight">Notifikasi Bisnis</h2>
              <p class="text-xs text-slate-400 font-medium">Aktivitas & peringatan operasional</p>
            </div>
          </div>
          <button id="js-close-notification" class="p-2 text-slate-400 hover:text-slate-600 rounded-lg hover:bg-slate-50 transition" aria-label="Tutup Notifikasi">
            <i class="ti ti-x text-xl"></i>
          </button>
        </div>
        
        <!-- Notification List -->
        <div id="js-notification-list" class="flex-grow overflow-y-auto p-6 space-y-4">
          <!-- Dynamic notification items -->
        </div>
        
        <!-- Footer -->
        <div class="p-6 border-t border-slate-100 bg-slate-50/50">
          <button id="js-mark-all-read" class="w-full py-3 bg-slate-100 hover:bg-slate-200 text-slate-600 hover:text-slate-800 text-xs font-bold rounded-xl transition flex items-center justify-center gap-2">
            <i class="ti ti-checks text-base"></i>
            Tandai Semua Dibaca
          </button>
        </div>
      </div>
    `;

    document.body.appendChild(drawer);

    // Event Listeners for closing
    document.getElementById('js-close-notification').addEventListener('click', closeDrawer);
    document.getElementById('js-notification-backdrop').addEventListener('click', closeDrawer);
    document.getElementById('js-mark-all-read').addEventListener('click', markAllAsRead);
  }

  function openDrawer() {
    const drawer = document.getElementById('js-notification-drawer');
    const backdrop = document.getElementById('js-notification-backdrop');
    const panel = document.getElementById('js-notification-panel');

    if (!drawer || !backdrop || !panel) return;

    renderNotificationList();

    drawer.classList.remove('hidden');
    // Force reflow
    drawer.offsetHeight;

    backdrop.classList.remove('opacity-0');
    backdrop.classList.add('opacity-100');
    panel.classList.remove('translate-x-full');
    panel.classList.add('translate-x-0');
  }

  function closeDrawer() {
    const drawer = document.getElementById('js-notification-drawer');
    const backdrop = document.getElementById('js-notification-backdrop');
    const panel = document.getElementById('js-notification-panel');

    if (!drawer || !backdrop || !panel) return;

    backdrop.classList.remove('opacity-100');
    backdrop.classList.add('opacity-0');
    panel.classList.remove('translate-x-0');
    panel.classList.add('translate-x-full');

    // Wait for animation to finish
    setTimeout(() => {
      drawer.classList.add('hidden');
    }, 300);
  }

  function init() {
    injectDrawerMarkup();
    updateNotificationBadge();

    const bellBtn = document.getElementById('js-notification-btn');
    if (bellBtn) {
      bellBtn.addEventListener('click', (e) => {
        e.preventDefault();
        openDrawer();
      });
    }
  }

  // Run on DOMContentLoaded or immediately if DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  // Expose triggers
  window.BizmateNotifications = {
    open: openDrawer,
    close: closeDrawer,
    refreshBadge: updateNotificationBadge
  };
})();
