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

// Professional animation for Website Development section
function addProfessionalAnimation(container, url, title) {
    const linkContainer = document.createElement('div');
    linkContainer.className = 'website-container';
    linkContainer.style.position = 'relative';
    linkContainer.style.margin = '20px';
    linkContainer.style.padding = '20px';
    linkContainer.style.borderRadius = '15px';
    linkContainer.style.background = 'rgba(20, 20, 20, 0.9)';
    linkContainer.style.color = '#f8f9fa';
    linkContainer.style.textAlign = 'center';
    linkContainer.style.transition = 'transform 0.3s ease, box-shadow 0.3s ease';
    linkContainer.style.boxShadow = '0 8px 20px rgba(0, 212, 255, 0.3)';

    const titleElement = document.createElement('h3');
    titleElement.textContent = title;
    titleElement.style.marginBottom = '15px';
    titleElement.style.fontSize = '1.5rem';
    titleElement.style.fontWeight = 'bold';
    titleElement.style.color = '#f72585';
    titleElement.style.textShadow = '0 2px 6px rgba(247, 37, 133, 0.6)';

    const animatedLink = document.createElement('a');
    animatedLink.href = '#'; // Initially prevent navigation
    animatedLink.textContent = 'Visit Website';
    animatedLink.style.display = 'inline-block';
    animatedLink.style.padding = '10px 20px';
    animatedLink.style.borderRadius = '30px';
    animatedLink.style.background = 'linear-gradient(90deg, #f72585, #00d4ff)';
    animatedLink.style.color = '#fff';
    animatedLink.style.textDecoration = 'none';
    animatedLink.style.fontSize = '1rem';
    animatedLink.style.transition = 'background 0.3s ease, transform 0.3s ease';
    animatedLink.style.boxShadow = '0 6px 15px rgba(0, 212, 255, 0.5)';

    animatedLink.addEventListener('mouseover', () => {
        animatedLink.style.transform = 'scale(1.1)';
    });
    animatedLink.addEventListener('mouseout', () => {
        animatedLink.style.transform = 'scale(1)';
    });

    animatedLink.addEventListener('click', (e) => {
        e.preventDefault(); // Prevent immediate navigation

        const overlay = document.createElement('div');
        overlay.style.position = 'fixed';
        overlay.style.top = '0';
        overlay.style.left = '0';
        overlay.style.width = '100vw';
        overlay.style.height = '100vh';
        overlay.style.background = 'rgba(0, 0, 0, 0.95)';
        overlay.style.zIndex = '999';
        overlay.style.display = 'flex';
        overlay.style.justifyContent = 'center';
        overlay.style.alignItems = 'center';

        const progressBar = document.createElement('div');
        progressBar.style.width = '50%';
        progressBar.style.height = '10px';
        progressBar.style.background = '#f72585';
        progressBar.style.position = 'absolute';
        progressBar.style.top = '50%';
        progressBar.style.left = '25%';
        progressBar.style.borderRadius = '5px';
        progressBar.style.overflow = 'hidden';

        const progressFill = document.createElement('div');
        progressFill.style.width = '0';
        progressFill.style.height = '100%';
        progressFill.style.background = '#00d4ff';
        progressFill.style.transition = 'width 3s linear';

        progressBar.appendChild(progressFill);

        const loadingMessage = document.createElement('div');
        loadingMessage.textContent = `Taking you to ${title}...`;
        loadingMessage.style.position = 'absolute';
        loadingMessage.style.top = '55%';
        loadingMessage.style.color = '#fff';
        loadingMessage.style.fontSize = '1.5rem';
        loadingMessage.style.fontFamily = 'Montserrat, sans-serif';
        loadingMessage.style.textShadow = '0 2px 5px rgba(0, 0, 0, 0.5)';

        overlay.appendChild(progressBar);
        overlay.appendChild(loadingMessage);
        document.body.appendChild(overlay);

        setTimeout(() => {
            progressFill.style.width = '100%';
        }, 100);

        setTimeout(() => {
            document.body.removeChild(overlay);
            window.open(url, '_blank'); // Navigate after animation
        }, 3100); // Delay navigation for 3 seconds
    });

    linkContainer.appendChild(titleElement);
    linkContainer.appendChild(animatedLink);

    container.appendChild(linkContainer);
}

// Initialize professional animation for Website Development section
document.querySelectorAll('#web-development .gallery-grid').forEach(container => {
    container.innerHTML = ''; // Clear existing images

    // Array of website data (URL and titles)
    const websites = [
        { url: 'https://example1.com', title: 'Project 1' },
        { url: 'https://example2.com', title: 'Project 2' },
        { url: 'https://example3.com', title: 'Project 3' }
    ];

    websites.forEach(({ url, title }) => {
        addProfessionalAnimation(container, url, title);
    });
});




// Standardize container size and fit images in all sections
document.querySelectorAll('.gallery-grid img').forEach((img) => {
    img.style.transition = 'transform 0.4s ease, box-shadow 0.4s ease';
    img.style.cursor = 'pointer';
    img.style.objectFit = 'cover'; // Ensure image fits within its container
    img.style.width = '100%'; // Fit the container width
    img.style.height = '100%'; // Fit the container height
    img.style.borderRadius = '10px'; // Apply default curved edges

    img.addEventListener('click', () => {
        // Check if image is already zoomed
        if (img.classList.contains('zoomed')) {
            document.body.style.overflow = 'auto'; // Enable scrolling
            img.classList.remove('zoomed');
            img.style.position = '';
            img.style.top = '';
            img.style.left = '';
            img.style.width = '100%'; // Reset width to container
            img.style.height = '100%'; // Reset height to container
            img.style.transform = 'scale(1)';
            img.style.zIndex = '';
            img.style.boxShadow = 'none';
            img.style.objectFit = 'cover'; // Reapply container fitting
            img.style.borderRadius = '10px'; // Reset curved edges
        } else {
            // Remove zoomed state from any other image
            document.querySelectorAll('.gallery-grid img.zoomed').forEach(zoomedImg => {
                zoomedImg.classList.remove('zoomed');
                zoomedImg.style.position = '';
                zoomedImg.style.top = '';
                zoomedImg.style.left = '';
                zoomedImg.style.width = '100%';
                zoomedImg.style.height = '100%';
                zoomedImg.style.transform = 'scale(1)';
                zoomedImg.style.zIndex = '';
                zoomedImg.style.boxShadow = 'none';
                zoomedImg.style.objectFit = 'cover';
                zoomedImg.style.borderRadius = '10px';
            });

            // Set current image to zoomed state
            document.body.style.overflow = 'hidden'; // Disable scrolling
            img.classList.add('zoomed');
            img.style.position = 'fixed';
            img.style.top = '50%';
            img.style.left = '50%';
            img.style.transform = 'translate(-50%, -50%)';
            img.style.zIndex = '1000';
            img.style.boxShadow = '0 20px 50px rgba(0, 0, 0, 0.7)';
            img.style.objectFit = 'contain'; // Ensure the image is fully visible without distortion

            // Assign standard zoom properties
            img.style.width = 'auto';
            img.style.height = 'auto';
            img.style.maxWidth = '90vw';
            img.style.maxHeight = '90vh';
            img.style.borderRadius = '20px';
        }
    });
});
