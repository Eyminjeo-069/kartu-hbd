function bukaKado() {
    const kado = document.getElementById('ikon-kado');
    const wadahEmoji = document.getElementById('wadah-emoji');
    const teksPetunjuk = document.getElementById('teks-petunjuk');

    // 1. Hilangkan teks petunjuk secara instan
    if (teksPetunjuk) {
        teksPetunjuk.style.animation = 'none';
        teksPetunjuk.style.display = 'none';
    }
    
    // 2. Kado mulai bergoyang hebat
    kado.classList.add('kado-goyang');

    // Fungsi internal untuk membuat ledakan emoji (biar bisa kita panggil berulang)
    function ledakanEmoji(jumlah) {
        const listEmoji = ['🌸', '✨', '💖', '🎉', '🎈', '🌷', '❤️'];
        
        for (let i = 0; i < jumlah; i++) {
            const emoji = document.createElement('div');
            emoji.classList.add('emoji-ledakan');
            emoji.innerText = listEmoji[Math.floor(Math.random() * listEmoji.length)];
            
            // Mengatur arah lemparan acak
            const koordinatX = (Math.random() - 0.5) * 500; // Jangkauan diperluas biar lebih megah
            const koordinatY = (Math.random() - 0.5) * 400 - 250; // Ditembakkan ke atas
            
            emoji.style.setProperty('--x', `${koordinatX}px`);
            emoji.style.setProperty('--y', `${koordinatY}px`);
            
            // Ukuran acak kelopak/emoji
            emoji.style.fontSize = Math.random() * 25 + 20 + 'px';
            
            wadahEmoji.appendChild(emoji);
            
            // Hapus emoji dari HTML setelah animasinya selesai agar tidak berat
            setTimeout(() => {
                emoji.remove();
            }, 2600);
        }
    }

    // 3. JALANKAN LEDAKAN PERTAMA (30 Emoji langsung muncrat!)
    ledakanEmoji(30);

    // 4. JALANKAN LEDAKAN KEDUA (30 Emoji tambahan, 0.5 detik kemudian)
    setTimeout(() => {
        ledakanEmoji(30);
    }, 1000);

    setTimeout(() => {
        kado.innerText = '😜'; 
    }, 600);

    // 6. Kita perlama waktu tunggu pindah halaman menjadi 2.5 detik (biar semua emoji puas berterbangan)
    setTimeout(() => {
        document.querySelector('.cover-container').style.opacity = '0';
        document.querySelector('.cover-container').style.transition = 'opacity 1s ease'; // diperhalus
        
        setTimeout(() => {
            window.location.href = 'kartu.html'; 
        }, 1000);
        
    }, 2500); 
}