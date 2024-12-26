// Smooth scrolling for navigation links
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        targetSection.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});

// Zoom-in effect for images
document.querySelectorAll('.gallery-grid img').forEach(img => {
    img.style.transition = 'transform 0.4s ease, box-shadow 0.4s ease';

    img.addEventListener('click', () => {
        if (img.classList.contains('zoomed')) {
            img.classList.remove('zoomed');
            img.style.transform = 'scale(1)';
            img.style.boxShadow = 'none';
        } else {
            document.querySelectorAll('.gallery-grid img.zoomed').forEach(zoomedImg => {
                zoomedImg.classList.remove('zoomed');
                zoomedImg.style.transform = 'scale(1)';
                zoomedImg.style.boxShadow = 'none';
            });
            img.classList.add('zoomed');
            img.style.transform = 'scale(1.5)';
            img.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.5)';
        }
    });
});
