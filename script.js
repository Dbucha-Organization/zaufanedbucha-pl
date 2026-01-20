document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger-menu');
    const mobileMenu = document.querySelector('.mobile-menu-overlay');
    const mobileLinks = document.querySelectorAll('.mobile-nav a');

    // Toggle Mobile Menu
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        mobileMenu.classList.toggle('open');
        document.body.style.overflow = mobileMenu.classList.contains('open') ? 'hidden' : ''; // Prevent background scrolling
    });

    // Close menu when clicking a link
    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            mobileMenu.classList.remove('open');
            document.body.style.overflow = '';
        });
    });

    // Close menu when clicking outside (on the left transparent part overlay)
    // Note: The overlay in CSS covers only right side (300px), but we can verify click outside
    document.addEventListener('click', (e) => {
        if (mobileMenu.classList.contains('open') &&
            !mobileMenu.contains(e.target) &&
            !hamburger.contains(e.target)) {

            hamburger.classList.remove('active');
            mobileMenu.classList.remove('open');
            document.body.style.overflow = '';
        }
    });

    // Reviews Slider Functionality
    const track = document.querySelector('.reviews-track');
    const prevBtn = document.querySelector('.prev-arrow');
    const nextBtn = document.querySelector('.next-arrow');

    if (track && prevBtn && nextBtn) {
        const scrollAmount = 262; // 250px card + 12px gap

        nextBtn.addEventListener('click', () => {
            track.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        });

        prevBtn.addEventListener('click', () => {
            track.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
        });
    }

    // People Also Looked At Slider Logic
    const peopleTrack = document.querySelector('.people-track');
    const peoplePrev = document.querySelector('.people-prev');
    const peopleNext = document.querySelector('.people-next');

    if (peopleTrack && peoplePrev && peopleNext) {
        const itemWidth = 276; // 260px card + 16px gap

        peopleNext.addEventListener('click', () => {
            peopleTrack.scrollBy({ left: itemWidth, behavior: 'smooth' });
        });

        peoplePrev.addEventListener('click', () => {
            peopleTrack.scrollBy({ left: -itemWidth, behavior: 'smooth' });
        });
    }

    // Experience Accordion Logic
    const expHeaders = document.querySelectorAll('.exp-item-header');

    expHeaders.forEach(header => {
        header.addEventListener('click', () => {
            const parent = header.parentElement;

            // Optional: Close others? Trustpilot usually allows multiple open.
            // Let's just toggle the current one.
            parent.classList.toggle('active');
        });
    });

    // Sticky Navbar Logic
    const stickyNav = document.querySelector('.sticky-scroll-nav');
    const header = document.querySelector('.site-header');

    if (stickyNav) {
        window.addEventListener('scroll', () => {
            if (window.innerWidth >= 992) {
                if (window.scrollY > 10) {
                    header.classList.add('hidden');
                    stickyNav.classList.add('visible');
                } else {
                    header.classList.remove('hidden');
                    stickyNav.classList.remove('visible');
                }
            } else {
                // On mobile, ensure header is not hidden
                header.classList.remove('hidden');
                stickyNav.classList.remove('visible');
            }
        });
    }

    // More Reviews Toggle Logic
    const moreReviewsToggles = document.querySelectorAll('.more-reviews-toggle');

    moreReviewsToggles.forEach(toggle => {
        toggle.addEventListener('click', () => {
            toggle.classList.toggle('active');

            // Find the hidden reviews container (next sibling)
            const hiddenContent = toggle.nextElementSibling;
            if (hiddenContent && hiddenContent.classList.contains('hidden-reviews')) {
                hiddenContent.classList.toggle('open');
            }
        });
    });

    // Dynamic Copyright Year
    const yearSpan = document.getElementById('copyright-year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }
});
