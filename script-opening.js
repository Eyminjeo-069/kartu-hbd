function bukaKado() {
    const kado = document.getElementById('ikon-kado');
    const wadahEmoji = document.getElementById('wadah-emoji');
    const teksPetunjuk = document.getElementById('teks-petunjuk');

    if (teksPetunjuk) {
        teksPetunjuk.style.animation = 'none';
        teksPetunjuk.style.display = 'none';
    }
    
    kado.classList.add('kado-goyang');

    function ledakanEmoji(jumlah) {
        const listEmoji = ['🌸', '✨', '💖', '🎉', '🎈', '🌷', '❤️'];
        
        for (let i = 0; i < jumlah; i++) {
            const emoji = document.createElement('div');
            emoji.classList.add('emoji-ledakan');
            emoji.innerText = listEmoji[Math.floor(Math.random() * listEmoji.length)];
            
            const koordinatX = (Math.random() - 0.5) * 500;
            const koordinatY = (Math.random() - 0.5) * 400 - 250;
            
            emoji.style.setProperty('--x', `${koordinatX}px`);
            emoji.style.setProperty('--y', `${koordinatY}px`);
            
            emoji.style.fontSize = Math.random() * 25 + 20 + 'px';
            
            wadahEmoji.appendChild(emoji);
            
            setTimeout(() => {
                emoji.remove();
            }, 2600);
        }
    }

    ledakanEmoji(30);

    setTimeout(() => {
        ledakanEmoji(30);
    }, 1000);

    setTimeout(() => {
        kado.innerText = '😜'; 
    }, 600);

    setTimeout(() => {
        document.querySelector('.cover-container').style.opacity = '0';
        document.querySelector('.cover-container').style.transition = 'opacity 1s ease'; // diperhalus
        
        setTimeout(() => {
            window.location.href = 'kartu.html'; 
        }, 1000);
        
    }, 2500); 
}
