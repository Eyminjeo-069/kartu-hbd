const container = document.getElementById('flower-container');

function buatKelopak() {
    const kelopak = document.createElement('div');
    kelopak.classList.add('kelopak');
    
    const listBunga = ['🌸', '❤️', '🌸', '🌷']; 
    kelopak.innerText = listBunga[Math.floor(Math.random() * listBunga.length)];
    
    kelopak.style.left = Math.random() * 100 + 'vw';
    
    const ukuran = Math.random() * 15 + 10; 
    kelopak.style.fontSize = ukuran + 'px';
    
    const durasi = Math.random() * 4 + 4; 
    kelopak.style.animationDuration = durasi + 's';
    
    kelopak.style.animationDelay = Math.random() * 5 + 's';
    
    container.appendChild(kelopak);
    
    setTimeout(() => {
        kelopak.remove();
    }, durasi * 1000);
}

setInterval(buatKelopak, 300);