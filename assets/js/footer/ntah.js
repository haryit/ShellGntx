const tombol = document.getElementById('radix-:Ram:');
const popup = document.getElementById('cs');

// Menambahkan event listener pada tombol
tombol.addEventListener('click', () => {
  // Mengecek apakah popup sedang terbuka atau tidak
  if (popup.style.display === 'block') {
    // Mengubah style display popup menjadi none
    popup.style.display = 'none';
  } else {
    // Mengubah style display popup menjadi block
    popup.style.display = 'block';
  }
});

// Menambahkan event listener pada document untuk menutup popup ketika diklik di luar area popup
document.addEventListener('click', (e) => {
  // Mengecek apakah klik dilakukan di luar area popup dan tombol
  if (!popup.contains(e.target) && !tombol.contains(e.target)) {
    // Mengubah style display popup menjadi none
    popup.style.display = 'none';
  }
});