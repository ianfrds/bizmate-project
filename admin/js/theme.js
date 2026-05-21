/**
 * Bizmate Dynamic Brand Theme Engine
 * Automatically reads selected brand colors and injects CSS overrides to propagate themes globally.
 */

(function () {
  const THEMES = {
    'royal-blue': {
      name: 'Royal Blue',
      primary: '#0c4cb4',
      primaryRgb: '12, 76, 180',
      accent: '#fa7315',
      light: '#eef2ff'
    },
    'emerald-mint': {
      name: 'Emerald Mint',
      primary: '#059669',
      primaryRgb: '5, 150, 105',
      accent: '#10b981',
      light: '#ecfdf5'
    },
    'indigo-lavender': {
      name: 'Indigo Lavender',
      primary: '#6366f1',
      primaryRgb: '99, 102, 241',
      accent: '#8b5cf6',
      light: '#e0e7ff'
    },
    'stealth-gold': {
      name: 'Stealth Gold',
      primary: '#d97706',
      primaryRgb: '217, 119, 6',
      accent: '#f59e0b',
      light: '#fef3c7'
    },
    'rose-quartz': {
      name: 'Rose Quartz',
      primary: '#db2777',
      primaryRgb: '219, 39, 119',
      accent: '#ec4899',
      light: '#fdf2f8'
    }
  };

  // Synchronously fetch theme to avoid color flashing
  function getActiveThemeId() {
    try {
      const settingsRaw = localStorage.getItem('bizmate_settings');
      if (settingsRaw) {
        const s = JSON.parse(settingsRaw);
        if (s && s.activeTheme && THEMES[s.activeTheme]) {
          return s.activeTheme;
        }
      }
    } catch (e) {
      console.error("Theme engine failed to parse settings:", e);
    }
    return 'royal-blue';
  }

  function applyTheme(themeId) {
    const theme = THEMES[themeId] || THEMES['royal-blue'];
    let styleEl = document.getElementById('bizmate-theme-styles');
    if (!styleEl) {
      styleEl = document.createElement('style');
      styleEl.id = 'bizmate-theme-styles';
      document.head.appendChild(styleEl);
    }

    styleEl.textContent = `
      :root {
        --color-brand-blueRoyal: ${theme.primary};
        --color-brand-blueRoyal-rgb: ${theme.primaryRgb};
        --color-brand-orange: ${theme.accent};
        --color-brand-blueLight: ${theme.light};
      }

      /* Dynamic Tailwind Class Overrides */
      .bg-brand-blueRoyal { background-color: ${theme.primary} !important; }
      .text-brand-blueRoyal { color: ${theme.primary} !important; }
      .border-brand-blueRoyal { border-color: ${theme.primary} !important; }

      .bg-brand-blueRoyal\\/10 { background-color: rgba(${theme.primaryRgb}, 0.1) !important; }
      .bg-brand-blueRoyal\\/20 { background-color: rgba(${theme.primaryRgb}, 0.2) !important; }
      .bg-brand-blueRoyal\\/5 { background-color: rgba(${theme.primaryRgb}, 0.05) !important; }

      .hover\\:bg-brand-blueRoyal:hover { background-color: ${theme.primary} !important; }
      .hover\\:text-brand-blueRoyal:hover { color: ${theme.primary} !important; }
      .hover\\:border-brand-blueRoyal:hover { border-color: ${theme.primary} !important; }
      .hover\\:bg-brand-blueRoyal\\/10:hover { background-color: rgba(${theme.primaryRgb}, 0.1) !important; }
      .hover\\:bg-brand-blueRoyal\\/20:hover { background-color: rgba(${theme.primaryRgb}, 0.2) !important; }

      .selection\\:bg-brand-blueRoyal::selection { background-color: ${theme.primary} !important; }

      .from-brand-blueRoyal {
        --tw-gradient-from: ${theme.primary} !important;
        --tw-gradient-to: ${theme.light} !important;
        --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to) !important;
      }
      .to-brand-blueRoyal {
        --tw-gradient-to: ${theme.primary} !important;
      }

      .bg-brand-blueLight { background-color: ${theme.light} !important; }
      .text-brand-blueLight { color: ${theme.light} !important; }
      .border-brand-blueLight { border-color: ${theme.light} !important; }

      .bg-brand-orange { background-color: ${theme.accent} !important; }
      .text-brand-orange { color: ${theme.accent} !important; }
      .border-brand-orange { border-color: ${theme.accent} !important; }

      .hover\\:bg-brand-orange:hover { background-color: ${theme.accent} !important; }
      .hover\\:text-brand-orange:hover { color: ${theme.accent} !important; }
    `;
  }

  // Run immediately
  const activeThemeId = getActiveThemeId();
  applyTheme(activeThemeId);

  // Expose to global window in case settings page needs to trigger live updates
  window.BizmateThemeEngine = {
    themes: THEMES,
    getActiveThemeId: getActiveThemeId,
    applyTheme: applyTheme
  };
})();
