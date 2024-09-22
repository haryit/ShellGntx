
 // Set zona waktu Asia/Jakarta
var zonaWaktu = 'Asia/Jakarta';
var urlParams = new URLSearchParams(window.location.search);
var jamku = urlParams.get('expiredDate');
// Set tanggal dan waktu target
var tanggalTarget = new Date(jamku.replace(' ', 'T') + '.000+07:00');

// Set jam sekarang
var now = new Date();
now.setHours(now.getHours() + (now.getTimezoneOffset() / 60) + 7); // Konversi ke zona waktu Asia/Jakarta

// Hitung perbedaan antara tanggal dan waktu target dengan jam sekarang
var diff = tanggalTarget.getTime() - now.getTime();

// Hitung countdown
var seconds = Math.floor(diff / 1000);
var minutes = Math.floor(seconds / 60);
var hours = Math.floor(minutes / 60);
var days = Math.floor(hours / 24);

hours = hours % 24;
minutes = minutes % 60;
seconds = seconds % 60;

// Tampilkan countdown
function updateCountdown() {
  var daysLeft = days;
  var hoursLeft = hours;
  var minutesLeft = minutes;
  var secondsLeft = seconds;

  $('#days').text(daysLeft.toString().padStart(2, '0'));
  $('#hours').text(hoursLeft.toString().padStart(2, '0'));
  $('#minutes').text(minutesLeft.toString().padStart(2, '0'));
  $('#seconds').text(secondsLeft.toString().padStart(2, '0'));

  // Kurangi diff dengan 1 detik
  diff -= 1000;

  // Hitung ulang countdown
  seconds = Math.floor(diff / 1000);
  minutes = Math.floor(seconds / 60);
  hours = Math.floor(minutes / 60);
  days = Math.floor(hours / 24);

  hours = hours % 24;
  minutes = minutes % 60;
  seconds = seconds % 60;

  // Jika diff masih positif, jalankan fungsi updateCountdown lagi
  if (diff > 0) {
    setTimeout(updateCountdown, 1000);
  }
}

updateCountdown();