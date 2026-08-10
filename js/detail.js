// Halaman Detail
document.addEventListener('DOMContentLoaded', function() {
    // Ambil ID dari URL
    const urlParams = new URLSearchParams(window.location.search);
    const id = parseInt(urlParams.get('id')) || 1;
    
    // Cari mobil berdasarkan ID
    const car = cars.find(c => c.id === id) || cars[0];

    // Tampilkan detail mobil
    const container = document.getElementById('detail-container');
    container.innerHTML = `
        <div class="detail-wrapper">
            <div class="detail-galeri">
                <img src="${car.gambar}" alt="${car.nama}" loading="lazy">
                <img src="${car.gambar}" alt="${car.nama} - view 2" loading="lazy">
            </div>
            <div class="detail-info">
                <div class="merek">${car.merek}</div>
                <h2>${car.nama}</h2>
                <div class="harga">${formatHarga(car.harga)}</div>
                <ul>
                    <li><strong>Jarak Tempuh:</strong> ${car.jarak} km</li>
                    <li><strong>Spesifikasi:</strong> ${car.spesifikasi}</li>
                </ul>
                <a href="#booking-section" class="btn btn-primary">Booking Test Drive</a>
            </div>
        </div>
    `;

    // Isi dropdown model di form booking
    const modelSelect = document.getElementById('model');
    if (modelSelect) {
        modelSelect.innerHTML = `
            <option value="">-- Pilih Model --</option>
            ${cars.map(c => `<option value="${c.merek} ${c.nama}" ${c.id === car.id ? 'selected' : ''}>${c.merek} ${c.nama}</option>`).join('')}
        `;
    }

    // Form submission
    const form = document.getElementById('booking-form');
    const msg = document.getElementById('form-message');

    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Validasi
            const nama = document.getElementById('nama').value.trim();
            const email = document.getElementById('email').value.trim();
            const model = document.getElementById('model').value;
            const tanggal = document.getElementById('tanggal').value;

            if (!nama || !email || !model || !tanggal) {
                msg.innerHTML = `
                    <div style="background: #ffebee; color: #c62828; padding: 1rem; border-radius: 10px; border-left: 4px solid #c62828;">
                        ⚠️ Semua field harus diisi!
                    </div>
                `;
                return;
            }

            if (!email.includes('@') || !email.includes('.')) {
                msg.innerHTML = `
                    <div style="background: #ffebee; color: #c62828; padding: 1rem; border-radius: 10px; border-left: 4px solid #c62828;">
                        ⚠️ Email tidak valid!
                    </div>
                `;
                return;
            }

            // Jika sukses
            msg.innerHTML = `
                <div style="background: #e8f5e9; color: #1b5e20; padding: 1rem; border-radius: 10px; border-left: 4px solid #4CAF50;">
                    ✅ Booking test drive untuk <strong>${model}</strong> pada tanggal <strong>${tanggal}</strong> berhasil!<br>
                    Kami akan menghubungi Anda di <strong>${email}</strong>.
                </div>
            `;

            // Reset form
            form.reset();
            
            // Scroll ke pesan
            msg.scrollIntoView({ behavior: 'smooth', block: 'center' });
        });
    }
});
