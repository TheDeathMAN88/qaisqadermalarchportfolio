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
    img.style.cursor = 'pointer';

    img.addEventListener('click', () => {
        // Check if image is already zoomed
        if (img.classList.contains('zoomed')) {
            document.body.style.overflow = 'auto'; // Enable scrolling
            img.classList.remove('zoomed');
            img.style.position = '';
            img.style.top = '';
            img.style.left = '';
            img.style.width = '';
            img.style.height = '';
            img.style.transform = 'scale(1)';
            img.style.zIndex = '';
            img.style.boxShadow = 'none';
            img.style.borderRadius = '10px'; // Reset curved edges
        } else {
            // Remove zoomed state from any other image
            document.querySelectorAll('.gallery-grid img.zoomed').forEach(zoomedImg => {
                zoomedImg.classList.remove('zoomed');
                zoomedImg.style.position = '';
                zoomedImg.style.top = '';
                zoomedImg.style.left = '';
                zoomedImg.style.width = '';
                zoomedImg.style.height = '';
                zoomedImg.style.transform = 'scale(1)';
                zoomedImg.style.zIndex = '';
                zoomedImg.style.boxShadow = 'none';
                zoomedImg.style.borderRadius = '10px';
            });

            // Set current image to zoomed state
            document.body.style.overflow = 'hidden'; // Disable scrolling
            img.classList.add('zoomed');
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
                img.style.borderRadius = '20px'; // Apply curved edges for horizontal images
            } else {
                img.style.width = 'auto';
                img.style.height = '90vh';
                img.style.borderRadius = '50px'; // Apply more pronounced curved edges for vertical images
            }
        }
    });
});
