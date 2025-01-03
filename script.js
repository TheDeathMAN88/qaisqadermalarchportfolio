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

// Full-page loader with progress bar
document.addEventListener('DOMContentLoaded', () => {
    // Create overlay
    const overlay = document.createElement('div');
    overlay.style.position = 'fixed';
    overlay.style.top = '0';
    overlay.style.left = '0';
    overlay.style.width = '100vw';
    overlay.style.height = '100vh';
    overlay.style.background = 'rgba(0, 0, 0, 0.95)';
    overlay.style.zIndex = '9999';
    overlay.style.display = 'flex';
    overlay.style.justifyContent = 'center';
    overlay.style.alignItems = 'center';
    overlay.style.flexDirection = 'column';
    overlay.style.color = '#fff';
    overlay.style.fontFamily = 'Montserrat, sans-serif';

    // Create progress bar container
    const progressBarContainer = document.createElement('div');
    progressBarContainer.style.width = '50%';
    progressBarContainer.style.height = '10px';
    progressBarContainer.style.background = '#f72585';
    progressBarContainer.style.borderRadius = '5px';
    progressBarContainer.style.overflow = 'hidden';

    // Create progress fill
    const progressFill = document.createElement('div');
    progressFill.style.width = '0';
    progressFill.style.height = '100%';
    progressFill.style.background = '#00d4ff';
    progressFill.style.transition = 'width 1s linear';

    // Add loading message
    const loadingMessage = document.createElement('div');
    loadingMessage.textContent = 'Loading the website, please wait...';
    loadingMessage.style.marginBottom = '20px';
    loadingMessage.style.fontSize = '1.5rem';
    loadingMessage.style.textShadow = '0 2px 5px rgba(0, 0, 0, 0.5)';

    progressBarContainer.appendChild(progressFill);
    overlay.appendChild(loadingMessage);
    overlay.appendChild(progressBarContainer);
    document.body.appendChild(overlay);

    // Simulate loading
    let progress = 0;
    const interval = setInterval(() => {
        progress += 10;
        progressFill.style.width = `${progress}%`;

        if (progress >= 100) {
            clearInterval(interval);
            document.body.removeChild(overlay);
        }
    }, 300); // Adjust speed as needed
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




// Final Fix: Centered Images with Full Viewability
document.querySelectorAll(".gallery-grid img").forEach((img) => {
    img.addEventListener("click", () => {
        // Create overlay
        const overlay = document.createElement("div");
        overlay.style.position = "fixed";
        overlay.style.top = "0";
        overlay.style.left = "0";
        overlay.style.width = "100vw";
        overlay.style.height = "100vh";
        overlay.style.background = "rgba(0, 0, 0, 0.7)";
        overlay.style.backdropFilter = "blur(15px)";
        overlay.style.display = "flex";
        overlay.style.justifyContent = "center";
        overlay.style.alignItems = "center";
        overlay.style.zIndex = "10000";

        // Clone the image and style it for responsiveness
        const clonedImg = img.cloneNode();
        clonedImg.style.maxWidth = "90vw";
        clonedImg.style.maxHeight = "90vh";
        clonedImg.style.borderRadius = "15px";
        clonedImg.style.boxShadow = "0 10px 30px rgba(0, 0, 0, 0.5)";
        clonedImg.style.objectFit = "contain"; // Ensures full viewability without distortion

        // Close overlay button
        const closeOverlay = document.createElement("div");
        closeOverlay.textContent = "✖";
        closeOverlay.style.position = "absolute";
        closeOverlay.style.top = "20px";
        closeOverlay.style.right = "20px";
        closeOverlay.style.color = "#fff";
        closeOverlay.style.fontSize = "2rem";
        closeOverlay.style.cursor = "pointer";
        closeOverlay.style.background = "rgba(0, 0, 0, 0.6)";
        closeOverlay.style.padding = "10px";
        closeOverlay.style.borderRadius = "50%";
        closeOverlay.style.textAlign = "center";

        // Close overlay event
        closeOverlay.addEventListener("click", () => {
            document.body.style.overflow = ""; // Re-enable scrolling
            document.body.removeChild(overlay);
        });

        // Append cloned image and close button to overlay
        overlay.appendChild(clonedImg);
        overlay.appendChild(closeOverlay);

        // Disable body scrolling
        document.body.style.overflow = "hidden";

        // Append overlay to the body
        document.body.appendChild(overlay);
    });
});


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

// Full-page loader with progress bar
document.addEventListener('DOMContentLoaded', () => {
    const overlay = document.createElement('div');
    overlay.style.position = 'fixed';
    overlay.style.top = '0';
    overlay.style.left = '0';
    overlay.style.width = '100vw';
    overlay.style.height = '100vh';
    overlay.style.background = 'rgba(0, 0, 0, 0.95)';
    overlay.style.zIndex = '9999';
    overlay.style.display = 'flex';
    overlay.style.justifyContent = 'center';
    overlay.style.alignItems = 'center';
    overlay.style.flexDirection = 'column';
    overlay.style.color = '#fff';
    overlay.style.fontFamily = 'Montserrat, sans-serif';

    const progressBarContainer = document.createElement('div');
    progressBarContainer.style.width = '50%';
    progressBarContainer.style.height = '10px';
    progressBarContainer.style.background = '#f72585';
    progressBarContainer.style.borderRadius = '5px';
    progressBarContainer.style.overflow = 'hidden';

    const progressFill = document.createElement('div');
    progressFill.style.width = '0';
    progressFill.style.height = '100%';
    progressFill.style.background = '#00d4ff';
    progressFill.style.transition = 'width 1s linear';

    const loadingMessage = document.createElement('div');
    loadingMessage.textContent = 'Loading the website, please wait...';
    loadingMessage.style.marginBottom = '20px';
    loadingMessage.style.fontSize = '1.5rem';
    loadingMessage.style.textShadow = '0 2px 5px rgba(0, 0, 0, 0.5)';

    progressBarContainer.appendChild(progressFill);
    overlay.appendChild(loadingMessage);
    overlay.appendChild(progressBarContainer);
    document.body.appendChild(overlay);

    let progress = 0;
    const interval = setInterval(() => {
        progress += 10;
        progressFill.style.width = `${progress}%`;

        if (progress >= 100) {
            clearInterval(interval);
            document.body.removeChild(overlay);
        }
    }, 300);
});

// Add video/animation showcase for Media section
document.querySelectorAll('#media-section .gallery-grid').forEach(container => {
    const videos = [
        { embedUrl: 'https://www.youtube.com/watch?v=ULlARaAQLRo', title: 'Animation 1' },
        { embedUrl: 'https://www.youtube.com/embed/your-video-id2', title: 'Animation 2' },
        { embedUrl: 'https://www.youtube.com/embed/your-video-id3', title: 'Animation 3' }
    ];

    videos.forEach(({ embedUrl, title }) => {
        const videoContainer = document.createElement('div');
        videoContainer.className = 'video-container';
        videoContainer.style.margin = '20px';
        videoContainer.style.padding = '10px';
        videoContainer.style.borderRadius = '15px';
        videoContainer.style.background = 'rgba(20, 20, 20, 0.9)';
        videoContainer.style.color = '#f8f9fa';
        videoContainer.style.textAlign = 'center';
        videoContainer.style.boxShadow = '0 8px 20px rgba(0, 212, 255, 0.3)';
        videoContainer.style.cursor = 'pointer';

        const videoTitle = document.createElement('h3');
        videoTitle.textContent = title;
        videoTitle.style.marginBottom = '10px';
        videoTitle.style.color = '#f72585';
        videoTitle.style.fontSize = '1.2rem';

        const videoThumbnail = document.createElement('div');
        videoThumbnail.style.width = '100%';
        videoThumbnail.style.height = '200px';
        videoThumbnail.style.borderRadius = '10px';
        videoThumbnail.style.background = 'url("thumbnail.jpg") center/cover no-repeat';

        videoContainer.appendChild(videoTitle);
        videoContainer.appendChild(videoThumbnail);

        videoContainer.addEventListener('click', () => {
            const videoOverlay = document.createElement('div');
            videoOverlay.style.position = 'fixed';
            videoOverlay.style.top = '0';
            videoOverlay.style.left = '0';
            videoOverlay.style.width = '100vw';
            videoOverlay.style.height = '100vh';
            videoOverlay.style.background = 'rgba(0, 0, 0, 0.95)';
            videoOverlay.style.zIndex = '1000';
            videoOverlay.style.display = 'flex';
            videoOverlay.style.justifyContent = 'center';
            videoOverlay.style.alignItems = 'center';

            const iframe = document.createElement('iframe');
            iframe.src = `${embedUrl.replace('watch?v=', 'embed/')}?autoplay=1&rel=0`;
            iframe.style.width = '90%';
            iframe.style.height = '90%';
            iframe.style.border = 'none';
            iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture';
            iframe.allowFullscreen = true;

            const closeOverlay = document.createElement('div');
            closeOverlay.textContent = '✖';
            closeOverlay.style.position = 'absolute';
            closeOverlay.style.top = '20px';
            closeOverlay.style.right = '20px';
            closeOverlay.style.fontSize = '2rem';
            closeOverlay.style.color = '#fff';
            closeOverlay.style.cursor = 'pointer';

            closeOverlay.addEventListener('click', () => {
                document.body.removeChild(videoOverlay);
            });

            videoOverlay.appendChild(iframe);
            videoOverlay.appendChild(closeOverlay);
            document.body.appendChild(videoOverlay);
        });

        container.appendChild(videoContainer);
    });
});


// Scroll-triggered animations for sections
document.addEventListener("scroll", () => {
    document.querySelectorAll('.section').forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight - 50) {
            section.classList.add('visible');
        }
    });
});

// Dark Mode Toggle
const darkModeToggle = document.getElementById("dark-mode-toggle");
darkModeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
});

// Scroll Progress Indicator
document.addEventListener("scroll", () => {
    const scrollTop = document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = (scrollTop / scrollHeight) * 100;
    document.getElementById("progress-indicator").style.width = progress + "%";
});

// Initialize Progress Indicator
const progressIndicator = document.createElement("div");
progressIndicator.id = "progress-indicator";
document.body.appendChild(progressIndicator);

// Centered Image View with Blurred Background and Functional Close Button
document.querySelectorAll(".gallery-grid img").forEach((img) => {
    img.addEventListener("click", () => {
        // Create overlay
        const overlay = document.createElement("div");
        overlay.style.position = "fixed";
        overlay.style.top = "0";
        overlay.style.left = "0";
        overlay.style.width = "100vw";
        overlay.style.height = "100vh";
        overlay.style.background = "rgba(255, 255, 255, 0.7)";
        overlay.style.backdropFilter = "blur(10px)";
        overlay.style.display = "flex";
        overlay.style.justifyContent = "center";
        overlay.style.alignItems = "center";
        overlay.style.zIndex = "10000";

        // Clone image and set its style
        const clonedImg = img.cloneNode();
        clonedImg.style.maxWidth = "90%";
        clonedImg.style.maxHeight = "90%";
        clonedImg.style.borderRadius = img.style.borderRadius || "10px";
        clonedImg.style.boxShadow = "0 10px 30px rgba(0, 0, 0, 0.5)";

        // Close overlay button
        const closeOverlay = document.createElement("div");
        closeOverlay.textContent = "✖";
        closeOverlay.style.position = "absolute";
        closeOverlay.style.top = "20px";
        closeOverlay.style.right = "20px";
        closeOverlay.style.color = "#fff";
        closeOverlay.style.fontSize = "2rem";
        closeOverlay.style.cursor = "pointer";
        closeOverlay.style.background = "rgba(0, 0, 0, 0.6)";
        closeOverlay.style.padding = "10px";
        closeOverlay.style.borderRadius = "50%";
        closeOverlay.style.textAlign = "center";

        // Close overlay event
        closeOverlay.addEventListener("click", () => {
            document.body.style.overflow = ""; // Re-enable scrolling
            document.body.removeChild(overlay);
        });

        // Append cloned image and close button to overlay
        overlay.appendChild(clonedImg);
        overlay.appendChild(closeOverlay);

        // Disable body scrolling
        document.body.style.overflow = "hidden";

        // Append overlay to the body
        document.body.appendChild(overlay);
    });
});

// Updated Image Behavior - Consistent with Video Section
document.querySelectorAll(".gallery-grid img").forEach((img) => {
    img.addEventListener("click", () => {
        // Create overlay
        const overlay = document.createElement("div");
        overlay.style.position = "fixed";
        overlay.style.top = "0";
        overlay.style.left = "0";
        overlay.style.width = "100vw";
        overlay.style.height = "100vh";
        overlay.style.background = "rgba(0, 0, 0, 0.8)";
        overlay.style.display = "flex";
        overlay.style.justifyContent = "center";
        overlay.style.alignItems = "center";
        overlay.style.zIndex = "10000";
        overlay.style.backdropFilter = "blur(15px)";

        // Create image container
        const imgContainer = document.createElement("div");
        imgContainer.style.width = "auto";
        imgContainer.style.maxWidth = "90%";
        imgContainer.style.maxHeight = "90%";
        imgContainer.style.borderRadius = "15px";
        imgContainer.style.overflow = "hidden";
        imgContainer.style.boxShadow = "0 10px 30px rgba(0, 0, 0, 0.5)";

        // Clone image and append it to container
        const clonedImg = img.cloneNode();
        clonedImg.style.width = "100%";
        clonedImg.style.height = "auto";
        imgContainer.appendChild(clonedImg);

        // Close overlay button
        const closeOverlay = document.createElement("div");
        closeOverlay.textContent = "✖";
        closeOverlay.style.position = "absolute";
        closeOverlay.style.top = "20px";
        closeOverlay.style.right = "20px";
        closeOverlay.style.color = "#fff";
        closeOverlay.style.fontSize = "2rem";
        closeOverlay.style.cursor = "pointer";
        closeOverlay.style.background = "rgba(0, 0, 0, 0.6)";
        closeOverlay.style.padding = "10px";
        closeOverlay.style.borderRadius = "50%";
        closeOverlay.style.textAlign = "center";

        // Close overlay event
        closeOverlay.addEventListener("click", () => {
            document.body.style.overflow = ""; // Re-enable scrolling
            document.body.removeChild(overlay);
        });

        // Append image container and close button to overlay
        overlay.appendChild(imgContainer);
        overlay.appendChild(closeOverlay);

        // Disable body scrolling
        document.body.style.overflow = "hidden";

        // Append overlay to the body
        document.body.appendChild(overlay);
    });
});
