document.addEventListener("DOMContentLoaded", function () {
    /* Navbar Scroll Effect */
    const navbar = document.getElementById('navbar');
    const burger = document.getElementById('burger');
    const menu = document.getElementById('menu');
    const bars = document.querySelector('.fa-bars');

    document.addEventListener('scroll', () => {
        if (window.scrollY > 0) {
            navbar.classList.add('navbar-styling');
        } else {
            navbar.classList.remove('navbar-styling');
        }
    });

    /* Mobile Navbar Toggle */
    if (burger && menu && bars) {
        burger.addEventListener('click', () => {
            menu.classList.toggle('translate-x-0');
            bars.classList.toggle('fa-xmark');
        });
    }

    /* Experience & Education Tab Switching */
    const tabButtons = document.querySelectorAll(".tab-btn");
    const tabContents = document.querySelectorAll(".timeline-content");

    tabButtons.forEach(button => {
        button.addEventListener("click", function () {
            tabButtons.forEach(btn => btn.classList.remove("active"));
            tabContents.forEach(content => content.classList.remove("active"));

            this.classList.add("active");
            document.getElementById(this.dataset.tab).classList.add("active");
        });
    });

    /* Expand & Collapse Functionality */
    const viewAllBtn = document.getElementById("viewAllBtn");
    const closeBtn = document.getElementById("closeBtn");
    const timelineContainer = document.querySelector(".timeline-container");

    if (viewAllBtn && closeBtn && timelineContainer) {
        viewAllBtn.addEventListener("click", function () {
            timelineContainer.style.maxHeight = "1000px"; // Expand
            viewAllBtn.classList.add("hidden");
            closeBtn.classList.remove("hidden");
        });

        closeBtn.addEventListener("click", function () {
            timelineContainer.style.maxHeight = "300px"; // Collapse
            closeBtn.classList.add("hidden");
            viewAllBtn.classList.remove("hidden");
        });
    }

    /* Typed.js Animation */
    if (document.getElementById('typing')) {
        new Typed('#typing', {
            strings: ['AI Engineer', 'ML Expert', 'LLM Designer', 'AI Researcher'],
            typeSpeed: 30,
            loop: true,
            backDelay: 3000,
            showCursor: false,
        });
    }
});
