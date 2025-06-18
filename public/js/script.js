// Header scroll effect
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Update the scroll navigation to work with mobile
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href').substring(1);
        let targetSection;
        
        if (targetId === 'home') {
            window.scrollTo({ top: 0, behavior: 'smooth' });
            return;
        } else {
            targetSection = document.getElementById(targetId);
        }
        
        if (targetSection) {
            // Calculate offset based on header height
            const headerHeight = document.querySelector('header').offsetHeight;
            const targetPosition = targetSection.offsetTop - headerHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Update the animateOnScroll function for mobile
const animateOnScroll = () => {
    const elements = document.querySelectorAll('.about-text, .project-card');
    const windowHeight = window.innerHeight;
    const triggerPoint = windowHeight / 5 * 4; // Trigger animation earlier on mobile
    
    elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        
        if (elementPosition < triggerPoint) {
            element.classList.add('visible');
        }
    });
};

// // Smooth scrolling for navigation
// document.querySelectorAll('nav button').forEach(button => {
//     button.addEventListener('click', (e) => {
//         e.preventDefault();
//         const targetId = button.textContent.toLowerCase();
//         let targetSection;
        
//         if (targetId === 'home') {
//             window.scrollTo({ top: 0, behavior: 'smooth' });
//             return;
//         } else if (targetId === 'tentang') {
//             targetSection = document.getElementById('tentang');
//         } else if (targetId === 'project') {
//             targetSection = document.getElementById('project');
//         } else if (targetId === 'kontak') {
//             targetSection = document.getElementById('kontak');
//         }
        
//         if (targetSection) {
//             window.scrollTo({
//                 top: targetSection.offsetTop - 80,
//                 behavior: 'smooth'
//             });
//         }
//     });
// });

// Scroll down button (di Hero)
document.querySelector('.scroll-down').addEventListener('click', () => {
    document.getElementById('about').scrollIntoView({ 
        behavior: 'smooth' 
    });
});

// // Scroll animation
// const animateOnScroll = () => {
//     const elements = document.querySelectorAll('.about-text, .project-card');
    
//     elements.forEach(element => {
//         const elementPosition = element.getBoundingClientRect().top;
//         const screenPosition = window.innerHeight / 1.2;
        
//         if (elementPosition < screenPosition) {
//             element.classList.add('visible');
//         }
//     });
// };

// window.addEventListener('scroll', animateOnScroll);
// window.addEventListener('load', animateOnScroll);

// Validasi Form Kontak
// const contactForm = document.getElementById('contactForm');
// if (contactForm) {
//     contactForm.addEventListener('submit', (e) => {
//         e.preventDefault();
        
//         const name = document.getElementById('name').value;
//         const email = document.getElementById('email').value;
//         const message = document.getElementById('message').value;
        
//         if (name && email && message) {
//             alert('Pesan terkirim! Terima kasih sudah menghubungi saya.');
//             contactForm.reset();
//         } else {
//             alert('Harap isi semua field!');
//         }
//     });
// }

// Typewriter effect for hero heading
const heroHeading = document.querySelector('.hero-heading');
if (heroHeading) {
    const originalText = heroHeading.textContent;
    let i = 0;
    
    function typeWriter() {
        if (i < originalText.length) {
            heroHeading.textContent = originalText.substring(0, i+1);
            i++;
            setTimeout(typeWriter, 100);
        } else {
            // Keep the cursor blinking after typing is done
            heroHeading.innerHTML = originalText + '<span class="cursor">|</span>';
        }
    }
    
    // Start typing effect after a short delay
    setTimeout(() => {
        heroHeading.textContent = '';
        typeWriter();
    }, 1000);
}

// Contact Form Handler with Improved Notification
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        // Remove any existing duplicate notifications
        const existingNotifications = document.querySelectorAll('#notification');
        if (existingNotifications.length > 1) {
            for (let i = 1; i < existingNotifications.length; i++) {
                existingNotifications[i].remove();
            }
        }

        // Create notification element if it doesn't exist
        let notification = document.getElementById('notification');
        if (!notification) {
            notification = document.createElement('div');
            notification.id = 'notification';
            notification.className = 'notification';
            notification.innerHTML = `
                <div class="notification-content">
                    <span class="notification-icon"></span>
                    <span class="notification-message"></span>
                </div>
            `;
            document.body.appendChild(notification);
        }

        const submitBtn = document.getElementById('submitBtn');
        const submitText = document.getElementById('submitText');
        const loadingSpinner = document.getElementById('loadingSpinner');
        const notificationMessage = notification.querySelector('.notification-message');
        const notificationIcon = notification.querySelector('.notification-icon');

        contactForm.addEventListener('submit', async function(e) {
            e.preventDefault();
            
            // Show loading state
            submitText.style.opacity = '0';
            loadingSpinner.style.display = 'block';
            submitBtn.disabled = true;
            
            try {
                const formData = new FormData(contactForm);
                const response = await fetch(contactForm.action, {
                    method: 'POST',
                    body: formData,
                    headers: {
                        'Accept': 'application/json'
                    }
                });
                
                const data = await response.json();
                
                if (data.ok || response.ok) {
                    showNotification('success', 'Pesan terkirim! Terima kasih :)');
                    contactForm.reset();
                } else {
                    throw new Error(data.error || 'Form submission failed');
                }
            } catch (error) {
                console.error('Error:', error);
                showNotification('error', 'Oops! Ada kesalahan. Coba lagi ya.');
            } finally {
                // Hide loading state
                submitText.style.opacity = '1';
                loadingSpinner.style.display = 'none';
                submitBtn.disabled = false;
            }
        });
        
        function showNotification(type, message) {
            // Reset notification state
            notification.className = 'notification';
            notification.classList.add(type);
            
            // Set notification content
            notificationIcon.textContent = type === 'success' ? '✓' : '✕';
            notificationMessage.textContent = message;
            
            // Show notification
            notification.classList.add('show');
            
            // Hide after 5 seconds
            setTimeout(() => {
                notification.classList.remove('show');
            }, 5000);
        }
    }
});

// Mobile menu toggle
const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
const headerContainer = document.querySelector('.header-container');

if (mobileMenuToggle && headerContainer) {
    mobileMenuToggle.addEventListener('click', () => {
        headerContainer.classList.toggle('active');
        mobileMenuToggle.innerHTML = headerContainer.classList.contains('active') 
            ? '<i class="fas fa-times"></i>' 
            : '<i class="fas fa-bars"></i>';
    });
    
    // Close menu when clicking on a link
    document.querySelectorAll('.header-container a').forEach(link => {
        link.addEventListener('click', () => {
            headerContainer.classList.remove('active');
            mobileMenuToggle.innerHTML = '<i class="fas fa-bars"></i>';
        });
    });
}

