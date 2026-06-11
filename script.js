/* ============================================================
   HRITIK YADAV - PERSONAL BRAND WEBSITE
   Main JavaScript
   ============================================================ */

document.addEventListener('DOMContentLoaded', function () {

    // ==================== PRELOADER ====================
    const preloader = document.getElementById('preloader');
    window.addEventListener('load', function () {
        setTimeout(function () {
            preloader.classList.add('hidden');
        }, 1500);
    });

    // Fallback: hide preloader after 4 seconds
    setTimeout(function () {
        preloader.classList.add('hidden');
    }, 4000);

    // ==================== INITIALIZE AOS ====================
    AOS.init({
        duration: 800,
        easing: 'ease-out-cubic',
        once: true,
        offset: 80,
        disable: function () {
            return window.innerWidth < 768;
        }
    });

    // ==================== CUSTOM CURSOR ====================
    const cursor = document.querySelector('.custom-cursor');
    const follower = document.querySelector('.custom-cursor-follower');

    if (cursor && follower && window.innerWidth >= 1024) {
        let mouseX = 0, mouseY = 0;
        let cursorX = 0, cursorY = 0;

        document.addEventListener('mousemove', function (e) {
            mouseX = e.clientX;
            mouseY = e.clientY;
            cursor.style.left = mouseX + 'px';
            cursor.style.top = mouseY + 'px';
        });

        function animateCursor() {
            cursorX += (mouseX - cursorX) * 0.15;
            cursorY += (mouseY - cursorY) * 0.15;
            follower.style.left = cursorX + 'px';
            follower.style.top = cursorY + 'px';
            requestAnimationFrame(animateCursor);
        }
        animateCursor();

        // Hover effects on interactive elements
        document.querySelectorAll('a, button, .btn, .service-card, .offering-card, .yt-card, .blog-card').forEach(function (el) {
            el.addEventListener('mouseenter', function () {
                follower.style.width = '50px';
                follower.style.height = '50px';
                follower.style.borderColor = 'var(--accent-primary)';
                follower.style.background = 'rgba(14, 165, 233, 0.05)';
            });
            el.addEventListener('mouseleave', function () {
                follower.style.width = '32px';
                follower.style.height = '32px';
                follower.style.borderColor = 'var(--accent-primary)';
                follower.style.background = 'transparent';
            });
        });
    }

    // ==================== NAVBAR ====================
    const navbar = document.getElementById('navbar');
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');
    const navLinks = document.querySelectorAll('.nav-link');

    // Scroll effect
    window.addEventListener('scroll', function () {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Mobile menu toggle
    navToggle.addEventListener('click', function () {
        navToggle.classList.toggle('active');
        navMenu.classList.toggle('active');
        document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
    });

    // Close menu on link click
    navLinks.forEach(function (link) {
        link.addEventListener('click', function () {
            navToggle.classList.remove('active');
            navMenu.classList.remove('active');
            document.body.style.overflow = '';
        });
    });

    // Active link on scroll
    var sections = document.querySelectorAll('section[id]');
    window.addEventListener('scroll', function () {
        var scrollY = window.scrollY + 120;
        sections.forEach(function (section) {
            var top = section.offsetTop;
            var height = section.offsetHeight;
            var id = section.getAttribute('id');
            var link = document.querySelector('.nav-link[href="#' + id + '"]');
            if (link) {
                if (scrollY >= top && scrollY < top + height) {
                    navLinks.forEach(function (l) { l.classList.remove('active'); });
                    link.classList.add('active');
                }
            }
        });
    });

    // ==================== THEME TOGGLE ====================
    const themeToggle = document.getElementById('themeToggle');
    const html = document.documentElement;

    // Load saved theme
    var savedTheme = localStorage.getItem('theme') || 'dark';
    html.setAttribute('data-theme', savedTheme);

    themeToggle.addEventListener('click', function () {
        var current = html.getAttribute('data-theme');
        var next = current === 'dark' ? 'light' : 'dark';
        html.setAttribute('data-theme', next);
        localStorage.setItem('theme', next);
    });

    // ==================== SEARCH ====================
    const searchToggle = document.getElementById('searchToggle');
    const searchOverlay = document.getElementById('searchOverlay');
    const searchClose = document.getElementById('searchClose');
    const searchInput = document.getElementById('searchInput');
    const searchResults = document.getElementById('searchResults');

    var searchData = [
        { title: 'About Hritik Yadav', desc: 'Learn about my journey, education, and passions', link: '#about' },
        { title: 'Medical Education', desc: 'MBBS guidance and entrance preparation', link: '#services-section' },
        { title: 'Content Creation', desc: 'Vlogs, study tips, and educational content', link: '#services-section' },
        { title: 'Mentorship', desc: 'CEE preparation and career guidance', link: '#services-section' },
        { title: 'MAT Class by Hritik', desc: 'Medical entrance preparation program', link: '#mat-class' },
        { title: 'YouTube Channel', desc: 'Watch my latest videos', link: '#youtube' },
        { title: 'Mentorship Sessions', desc: 'Book a personal mentorship session', link: '#offerings' },
        { title: 'Academic Guidance', desc: 'Get help with study plans', link: '#offerings' },
        { title: 'Entrance Counseling', desc: 'CEE counseling and college selection', link: '#offerings' },
        { title: 'Contact Hritik', desc: 'Get in touch via WhatsApp or email', link: '#contact' },
        { title: 'Photo Gallery', desc: 'See pictures from events and college life', link: '#gallery' },
        { title: 'Blog Posts', desc: 'Read my latest articles and tips', link: '#blog' },
        { title: 'FAQ', desc: 'Frequently asked questions', link: '#faq' },
        { title: 'KUSMS', desc: 'Kathmandu University School of Medical Sciences', link: '#about' },
        { title: 'CEE Preparation', desc: 'Common Entrance Examination guidance', link: '#mat-class' },
    ];

    searchToggle.addEventListener('click', function () {
        searchOverlay.classList.add('active');
        setTimeout(function () { searchInput.focus(); }, 300);
    });

    searchClose.addEventListener('click', function () {
        searchOverlay.classList.remove('active');
        searchInput.value = '';
        searchResults.innerHTML = '';
    });

    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape') {
            searchOverlay.classList.remove('active');
        }
    });

    searchInput.addEventListener('input', function () {
        var query = this.value.toLowerCase().trim();
        if (query.length < 2) {
            searchResults.innerHTML = '';
            return;
        }
        var results = searchData.filter(function (item) {
            return item.title.toLowerCase().includes(query) || item.desc.toLowerCase().includes(query);
        });
        if (results.length === 0) {
            searchResults.innerHTML = '<div class="search-result-item"><h4>No results found</h4><p>Try different keywords</p></div>';
        } else {
            searchResults.innerHTML = results.map(function (item) {
                return '<a href="' + item.link + '" class="search-result-item" onclick="document.getElementById(\'searchOverlay\').classList.remove(\'active\')"><h4>' + item.title + '</h4><p>' + item.desc + '</p></a>';
            }).join('');
        }
    });

    // ==================== TYPING EFFECT ====================
    var roles = [
        'MBBS Student at KUSMS',
        'Medical Educator',
        'YouTuber & Creator',
        'Founder of MAT Class',
        'Future Doctor'
    ];
    var roleIndex = 0;
    var charIndex = 0;
    var isDeleting = false;
    var typingElement = document.getElementById('typingText');

    function typeEffect() {
        var currentRole = roles[roleIndex];
        if (isDeleting) {
            typingElement.textContent = currentRole.substring(0, charIndex - 1);
            charIndex--;
        } else {
            typingElement.textContent = currentRole.substring(0, charIndex + 1);
            charIndex++;
        }

        var typeSpeed = isDeleting ? 40 : 80;

        if (!isDeleting && charIndex === currentRole.length) {
            typeSpeed = 2000;
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            roleIndex = (roleIndex + 1) % roles.length;
            typeSpeed = 500;
        }

        setTimeout(typeEffect, typeSpeed);
    }

    if (typingElement) {
        typeEffect();
    }

    // ==================== COUNTER ANIMATION ====================
    var counters = document.querySelectorAll('.stat-number[data-count]');
    var counterObserver = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                var target = parseInt(entry.target.getAttribute('data-count'));
                var current = 0;
                var increment = target / 60;
                var timer = setInterval(function () {
                    current += increment;
                    if (current >= target) {
                        entry.target.textContent = target;
                        clearInterval(timer);
                    } else {
                        entry.target.textContent = Math.floor(current);
                    }
                }, 30);
                counterObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    counters.forEach(function (counter) {
        counterObserver.observe(counter);
    });

    // ==================== HERO PARTICLES ====================
    var particlesContainer = document.getElementById('heroParticles');
    if (particlesContainer) {
        for (var i = 0; i < 30; i++) {
            var particle = document.createElement('div');
            particle.style.cssText = [
                'position: absolute',
                'width: ' + (Math.random() * 4 + 1) + 'px',
                'height: ' + (Math.random() * 4 + 1) + 'px',
                'background: var(--accent-primary)',
                'border-radius: 50%',
                'top: ' + (Math.random() * 100) + '%',
                'left: ' + (Math.random() * 100) + '%',
                'opacity: ' + (Math.random() * 0.3 + 0.1),
                'animation: float ' + (Math.random() * 6 + 4) + 's ease-in-out infinite',
                'animation-delay: ' + (Math.random() * 4) + 's'
            ].join(';');
            particlesContainer.appendChild(particle);
        }
    }

    // ==================== GALLERY FILTER ====================
    var filterBtns = document.querySelectorAll('.filter-btn');
    var galleryItems = document.querySelectorAll('.gallery-item');

    filterBtns.forEach(function (btn) {
        btn.addEventListener('click', function () {
            filterBtns.forEach(function (b) { b.classList.remove('active'); });
            btn.classList.add('active');
            var filter = btn.getAttribute('data-filter');
            galleryItems.forEach(function (item) {
                if (filter === 'all' || item.getAttribute('data-category') === filter) {
                    item.style.display = '';
                    item.style.animation = 'fadeIn 0.5s ease';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });

    // ==================== FAQ ACCORDION ====================
    var faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(function (item) {
        var question = item.querySelector('.faq-question');
        question.addEventListener('click', function () {
            var isActive = item.classList.contains('active');
            faqItems.forEach(function (faq) {
                faq.classList.remove('active');
                faq.querySelector('.faq-answer').style.maxHeight = null;
            });
            if (!isActive) {
                item.classList.add('active');
                var answer = item.querySelector('.faq-answer');
                answer.style.maxHeight = answer.scrollHeight + 'px';
            }
        });
    });

    // ==================== CONTACT FORM ====================
    var contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault();
            var name = document.getElementById('name').value;
            var email = document.getElementById('email').value;
            var phone = document.getElementById('phone').value;
            var subject = document.getElementById('subject').value;
            var message = document.getElementById('message').value;

            var whatsappMessage = 'Hello Hritik! 👋\n\n' +
                'Name: ' + name + '\n' +
                'Email: ' + email + '\n' +
                'Phone: ' + phone + '\n' +
                'Subject: ' + subject + '\n' +
                'Message: ' + message;

            var whatsappURL = 'https://wa.me/9779842612207?text=' + encodeURIComponent(whatsappMessage);
            window.open(whatsappURL, '_blank');

            // Show success
            var btn = contactForm.querySelector('button[type="submit"]');
            var originalHTML = btn.innerHTML;
            btn.innerHTML = '<i class="fas fa-check"></i> Redirecting to WhatsApp...';
            btn.style.background = '#22c55e';
            setTimeout(function () {
                btn.innerHTML = originalHTML;
                btn.style.background = '';
                contactForm.reset();
            }, 3000);
        });
    }

    // ==================== NEWSLETTER FORM ====================
    var newsletterForm = document.getElementById('newsletterForm');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function (e) {
            e.preventDefault();
            var btn = newsletterForm.querySelector('button');
            var originalHTML = btn.innerHTML;
            btn.innerHTML = '<i class="fas fa-check"></i> Subscribed!';
            btn.style.background = '#22c55e';
            setTimeout(function () {
                btn.innerHTML = originalHTML;
                btn.style.background = '';
                newsletterForm.reset();
            }, 3000);
        });
    }

    // ==================== BACK TO TOP ====================
    var backToTop = document.getElementById('backToTop');
    window.addEventListener('scroll', function () {
        if (window.scrollY > 500) {
            backToTop.classList.add('visible');
        } else {
            backToTop.classList.remove('visible');
        }
    });

    backToTop.addEventListener('click', function () {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // ==================== FOOTER YEAR ====================
    var yearEl = document.getElementById('currentYear');
    if (yearEl) {
        yearEl.textContent = new Date().getFullYear();
    }

    // ==================== SMOOTH REVEAL ON SCROLL ====================
    var revealElements = document.querySelectorAll('.service-card, .offering-card, .yt-card, .blog-card');
    var revealObserver = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                revealObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    revealElements.forEach(function (el) {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        revealObserver.observe(el);
    });

    // ==================== CSS ANIMATION HELPER ====================
    var style = document.createElement('style');
    style.textContent = '@keyframes fadeIn { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }';
    document.head.appendChild(style);

});
