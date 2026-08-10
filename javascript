// js/data.js
const cars = [
  {
    id: 1,
    nama: "Model S",
    merek: "Tesla",
    harga: 1250000000,
    jarak: 650,
    gambar: "https://placecats.com/400/250?random=1",
    spesifikasi: "Dual Motor AWD, 670 hp, 0-100 3.1s"
  },
  {
    id: 2,
    nama: "Atto 3",
    merek: "BYD",
    harga: 720000000,
    jarak: 480,
    gambar: "https://placecats.com/400/251?random=2",
    spesifikasi: "Blade Battery, 204 hp, 0-100 7.3s"
  },
  {
    id: 3,
    nama: "Ioniq 5",
    merek: "Hyundai",
    harga: 960000000,
    jarak: 510,
    gambar: "https://placecats.com/400/252?random=3",
    spesifikasi: "800V fast charge, 325 hp, AWD"
  },
  {
    id: 4,
    nama: "Leaf",
    merek: "Nissan",
    harga: 590000000,
    jarak: 380,
    gambar: "https://placecats.com/400/253?random=4",
    spesifikasi: "e-Pedal, 150 hp, kota ideal"
  },
  {
    id: 5,
    nama: "i4",
    merek: "BMW",
    harga: 1400000000,
    jarak: 590,
    gambar: "https://placecats.com/400/254?random=5",
    spesifikasi: "M Sport, 340 hp, 0-100 5.1s"
  },
  {
    id: 6,
    nama: "Air EV",
    merek: "Wuling",
    harga: 450000000,
    jarak: 300,
    gambar: "https://placecats.com/400/255?random=6",
    spesifikasi: "Ringan, 68 hp, biaya operasional rendah"
  }
];

// fungsi bantu format harga
function formatHarga(num) {
  return 'Rp ' + (num / 1000000).toFixed(0) + ' jt';
}

        
