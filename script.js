// Mobile Navigation
const menuButton = document.querySelector('.mobile-menu-btn');
const navLinks = document.querySelector('.nav-links');

menuButton.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
    navLinks.classList.remove('active');
  });
});

window.onload = function() {
  setTimeout(() => {
    document.getElementById("preloader").style.opacity = "0";
    document.getElementById("preloader").style.visibility = "hidden";
    document.querySelector(".content").style.opacity = "1";
  }, 1500); // Adjust timing here (1.5 seconds)
};

// Image Error Handling
document.querySelectorAll('img').forEach(img => {
  img.onerror = function() {
    this.style.display = 'none';
    console.error('Failed to load image:', this.src);
  };
});

function changeModel() {
  var modelViewer = document.getElementById("model-viewer");
  var modelSelector = document.getElementById("model-selector");
  var selectedOption = modelSelector.options[modelSelector.selectedIndex];
  
  modelViewer.src = selectedOption.value;
  document.getElementById("model-title").innerText = selectedOption.getAttribute("data-title");
  document.getElementById("model-description").innerText = selectedOption.getAttribute("data-description");
}

// Gallery Hover Effects
document.querySelectorAll('.gallery-item').forEach(item => {
  item.addEventListener('mousemove', (e) => {
    const rect = item.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    item.style.transform = `perspective(1000px) rotateX(${y * 5}deg) rotateY(${-x * 5}deg)`;
  });

  item.addEventListener('mouseleave', () => {
    item.style.transform = 'none';
  });
});

function openLightbox(img) {
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  lightboxImg.src = img.src;
  lightbox.classList.add('show');
}

function closeLightbox() {
  document.getElementById('lightbox').classList.remove('show');
}

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    closeLightbox();
  }
});

// Auto-hide Navbar on Scroll
let lastScrollTop = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
  const currentScroll = window.pageYOffset || document.documentElement.scrollTop;
  if (currentScroll > lastScrollTop) {
    // Scrolling down -> hide the navbar
    navbar.classList.add('hide');
  } else {
    // Scrolling up -> show the navbar
    navbar.classList.remove('hide');
  }
  lastScrollTop = currentScroll;
});

// Scroll Animation for Timeline
document.addEventListener("scroll", function() {
document.querySelectorAll(".step").forEach(step => {
  if (step.getBoundingClientRect().top < window.innerHeight * 0.8) {
    step.classList.add("visible");
  }
});
});




// === Full Quantum UI Integration for Entire Website ===

// === Cursor Trail Effect (Fixed) ===
const cursor = document.createElement('div');
cursor.className = 'cursor-trail';
document.body.appendChild(cursor);

document.addEventListener('mousemove', (e) => {
    requestAnimationFrame(() => {
        cursor.style.left = `${e.clientX}px`;
        cursor.style.top = `${e.clientY}px`;
    });
});

document.head.insertAdjacentHTML('beforeend', `<style>
.cursor-trail {
    position: fixed;
    width: 15px;
    height: 15px;
    background: rgba(0, 212, 255, 0.8);
    border-radius: 50%;
    pointer-events: none;
    box-shadow: 0 0 15px rgba(0, 212, 255, 0.8), 0 0 25px rgba(0, 212, 255, 0.5);
    transform: translate(-50%, -50%);
    transition: transform 0.02s linear;
}

/* Message Box Styling */
.message-box {
    position: fixed;
    top: 20px;
    left: 50%;
    transform: translateX(-50%);
    background: rgba(0, 212, 255, 0.9);
    padding: 15px 25px;
    border: 2px solid rgba(0, 212, 255, 1);
    color: #fff;
    font-size: 1.2rem;
    font-family: 'Archivo Narrow', sans-serif;
    text-align: center;
    border-radius: 8px;
    box-shadow: 0 0 15px rgba(0, 212, 255, 0.9);
    opacity: 0;
    transition: opacity 0.5s ease-in-out;
}

/* Buttons */
button {
    background: var(--accent-color);
    color: var(--text-color);
    padding: 1rem 2rem;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: all 0.3s ease;
    display: block;
    margin: 20px auto;
    font-size: 1.2rem;
    font-weight: bold;
    box-shadow: 0 0 10px rgba(0, 212, 255, 0.5);
}

button:hover {
    transform: scale(1.1);
    box-shadow: 0 0 15px rgba(0, 212, 255, 0.8);
}
</style>`);

// === Holographic CTA Action ===
document.addEventListener('DOMContentLoaded', () => {
    const ctaButton = document.querySelector('.hologram-cta');
    if (ctaButton) {
        ctaButton.addEventListener('click', () => {
            const messageBox = document.createElement('div');
            messageBox.className = 'message-box';
            messageBox.textContent = 'Welcome to the Quantum UI experience! Starting from About Me.';
            document.body.appendChild(messageBox);
            setTimeout(() => {
                messageBox.style.opacity = '1';
            }, 100);
            setTimeout(() => {
                messageBox.style.opacity = '0';
                setTimeout(() => messageBox.remove(), 500);
            }, 3000);
            document.querySelector('#about').scrollIntoView({ behavior: 'smooth' });
        });
    }
});

// === Gyroscopic Parallax for Mobile ===
if (window.DeviceOrientationEvent) {
    window.addEventListener('deviceorientation', (event) => {
        let x = event.gamma / 30;
        let y = event.beta / 30;
        document.querySelector('.dimensional-grid').style.transform = `rotateY(${x}deg) rotateX(${y}deg)`;
    });
}

// === UI Sound Effects ===
const soundEffect = new Audio('https://www.myinstants.com/media/sounds/interface-click.mp3');
document.querySelectorAll('button').forEach(button => {
    button.addEventListener('mouseenter', () => {
        soundEffect.currentTime = 0;
        soundEffect.play().catch(err => console.log('Autoplay prevented:', err));
    });
});
