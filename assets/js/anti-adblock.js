document.addEventListener('DOMContentLoaded', function () {
    function checkAdblock() {
        if (typeof adblock === 'detected') {
            document.body.innerHTML = '<div style="text-align: center; margin-top: 50px;"><h1>waluh.</h1></div>';
        }
    }
    
    checkAdblock();
    
    // Cek lagi setelah beberapa detik, untuk melihat apakah adblocker sudah dinonaktifkan
    setInterval(checkAdblock, 3000);
});
