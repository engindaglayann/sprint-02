document.addEventListener('DOMContentLoaded', () => {
    const ekleForm = document.getElementById('ekleForm');
    
    if(ekleForm) {
        ekleForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Etkinlik başarıyla kaydedildi!');
            window.location.href = 'etkinlikler.html';
        });
    }
});