// ... existing JavaScript ...

// Mobile navigation toggle
document.addEventListener('DOMContentLoaded', function() {
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
        });
    }
    
    // Implement intersection observer for lazy loading
    if ('IntersectionObserver' in window) {
        const lazyImages = document.querySelectorAll('img[loading="lazy"]');
        
        const imageObserver = new IntersectionObserver(function(entries, observer) {
            entries.forEach(function(entry) {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.classList.remove('lazy');
                    imageObserver.unobserve(img);
                }
            });
        });
        
        lazyImages.forEach(function(img) {
            imageObserver.observe(img);
        });
    }
    
    // Defer non-critical JavaScript
    function loadDeferredScripts() {
        const deferScripts = document.querySelectorAll('script[defer]');
        deferScripts.forEach(script => {
            const newScript = document.createElement('script');
            newScript.src = script.src;
            document.body.appendChild(newScript);
        });
    }
    
    // Load deferred scripts after page load
    window.addEventListener('load', loadDeferredScripts);
});

// ... rest of JavaScript ...