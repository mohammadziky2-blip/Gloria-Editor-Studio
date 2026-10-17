/*
 * KONFIGURASI EDITOR GLORIA STUDIO
 * 1. Untuk preview lokal, biarkan DEMO_MODE = true.
 * 2. Setelah Apps Script dideploy, isi API_URL dengan URL Web App berakhiran /exec.
 * 3. Ubah DEMO_MODE menjadi false agar data tersimpan ke Google Sheets.
 */
window.APP_CONFIG = {
  APP_NAME: 'Editor Gloria Studio',
  API_URL: 'https://script.google.com/macros/s/AKfycbw4KFZuQTHlmlUEj0TnTHtRU0B8XVVdao96k_E6_r3xQmONQoRkL7zSRskXKAPFU3qL/exec',
  DEMO_MODE: false,
  REFRESH_INTERVAL_MS: 20000
};
