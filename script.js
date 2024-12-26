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

// Fullscreen and adaptive zoom effect for images
document.querySelectorAll('.gallery-grid img').forEach(img => {
    img.style.transition = 'transform 0.4s ease, box-shadow 0.4s ease';

    img.addEventListener('click', () => {
        // Check if image is already fullscreen
        if (img.classList.contains('fullscreen')) {
            document.body.style.overflow = 'auto'; // Enable scrolling
            img.classList.remove('fullscreen');
            img.style.position = '';
            img.style.top = '';
            img.style.left = '';
            img.style.width = '';
            img.style.height = '';
            img.style.transform = 'scale(1)';
            img.style.zIndex = '';
            img.style.boxShadow = 'none';
        } else {
            // Remove fullscreen from any other image
            document.querySelectorAll('.gallery-grid img.fullscreen').forEach(fullscreenImg => {
                fullscreenImg.classList.remove('fullscreen');
                fullscreenImg.style.position = '';
                fullscreenImg.style.top = '';
                fullscreenImg.style.left = '';
                fullscreenImg.style.width = '';
                fullscreenImg.style.height = '';
                fullscreenImg.style.transform = 'scale(1)';
                fullscreenImg.style.zIndex = '';
                fullscreenImg.style.boxShadow = 'none';
            });

            // Set current image to fullscreen
            document.body.style.overflow = 'hidden'; // Disable scrolling
            img.classList.add('fullscreen');
            img.style.position = 'fixed';
            img.style.top = '50%';
            img.style.left = '50%';
            img.style.transform = 'translate(-50%, -50%) scale(1)';
            img.style.zIndex = '1000';
            img.style.boxShadow = '0 20px 50px rgba(0, 0, 0, 0.7)';

            // Adjust dimensions to maintain aspect ratio
            if (img.naturalWidth > img.naturalHeight) {
                img.style.width = '90vw';
                img.style.height = 'auto';
            } else {
                img.style.width = 'auto';
                img.style.height = '90vh';
            }
        }
    });
});
