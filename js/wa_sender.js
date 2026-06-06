const targetWA = "6281916290686";

// Fungsi Validasi Umum
function validasiForm(data) {
  // 1. Cek Field Kosong
  for (let key in data) {
    if (!data[key] || data[key].trim() === "") {
      alert(
        `Harap isi field [${key.replace("_", " ").toUpperCase()}] terlebih dahulu!`,
      );
      return false;
    }
  }

  // 2. Cek Nomor WA (Hanya boleh angka)
  const waPattern = /^[0-9]+$/;
  if (!waPattern.test(data.nomor_whatsapp)) {
    alert(
      "Nomor WhatsApp harus berupa angka saja (tidak boleh ada huruf atau simbol)!",
    );
    return false;
  }

  // 3. Cek Minimal Porsi (Khusus Nasi/Bubur minimal 20)
  if (data.form_type === "order" && parseInt(data.jumlah_porsi) < 20) {
    alert("Minimal pemesanan untuk Nasi/Bubur adalah 20 porsi!");
    return false;
  }

  return true;
}

// Fungsi Order Nasi/Bubur
function kirimOrderWA() {
  const data = {
    form_type: "order",
    nama: document.getElementById("order_nama").value,
    nomor_whatsapp: document.getElementById("order_wa").value,
    menu: document.getElementById("order_menu").value,
    tanggal: document.getElementById("order_tanggal").value,
    jumlah_porsi: document.getElementById("order_porsi").value,
    alamat: document.getElementById("order_alamat").value,
  };

  if (!validasiForm(data)) return;

  const pesan =
    `PESANAN NASI/BUBUR WSM%0A` +
    `---------------------------%0A` +
    `Nama: ${data.nama}%0A` +
    `WA Pembeli: ${data.nomor_whatsapp}%0A` +
    `Menu: ${data.menu}%0A` +
    `Tanggal Acara: ${data.tanggal}%0A` +
    `Jumlah: ${data.jumlah_porsi} porsi%0A` +
    `Alamat: ${data.alamat}%0A` +
    `---------------------------%0A` +
    `Halo Kak, saya ingin memesan menu di atas, Terimakasih!`;

  window.open(`https://wa.me/${targetWA}?text=${pesan}`, "_blank");
}

// Fungsi Order Prasmanan
function kirimPrasmananWA() {
  const data = {
    form_type: "prasmanan",
    nama: document.getElementById("pras_nama").value,
    nomor_whatsapp: document.getElementById("pras_wa").value,
    tanggal: document.getElementById("pras_tanggal").value,
    jumlah_porsi: document.getElementById("pras_porsi").value,
    alamat: document.getElementById("pras_alamat").value,
  };

  if (!validasiForm(data)) return;

  const pesan =
    `PESANAN PRASMANAN WSM%0A` +
    `Khusus Nasi Kuning%0A` +
    `---------------------------%0A` +
    `Nama: ${data.nama}%0A` +
    `WA Pembeli: ${data.nomor_whatsapp}%0A` +
    `Tanggal Acara: ${data.tanggal}%0A` +
    `Jumlah: ${data.jumlah_porsi} porsi%0A` +
    `Alamat: ${data.alamat}%0A` +
    `---------------------------%0A` +
    `Halo Kak, saya ingin memesan prasmanan di atas, Terimakasih!`;

  window.open(`https://wa.me/${targetWA}?text=${pesan}`, "_blank");
}

// FUNGSI TOMBOL KEMBALI (History Back)
// Ini akan membuat tombol kembali ke halaman sebelumnya secara otomatis
document.addEventListener("DOMContentLoaded", function () {
  const backBtn = document.querySelector(".back-link");
  if (backBtn) {
    backBtn.addEventListener("click", function (e) {
      e.preventDefault(); // Mencegah link href bekerja
      window.history.back(); // Kembali ke halaman sebelumnya dalam history browser
    });
  }
});
