/* =========================
   ROCKY WEB DESIGNS
   JAVASCRIPT
========================= */

document.addEventListener("DOMContentLoaded", () => {

    /* =========================
       MOBILE MENU
    ========================= */

    const menuToggle = document.getElementById("menu-toggle");
    const navMenu = document.getElementById("nav-menu");

    if (menuToggle && navMenu) {

        menuToggle.addEventListener("click", () => {

            navMenu.classList.toggle("show-menu");

            const icon = menuToggle.querySelector("i");

            if (navMenu.classList.contains("show-menu")) {
                icon.classList.remove("fa-bars");
                icon.classList.add("fa-xmark");
            } else {
                icon.classList.remove("fa-xmark");
                icon.classList.add("fa-bars");
            }

        });


        /* Close menu after clicking a link */

        const navLinks = navMenu.querySelectorAll("a");

        navLinks.forEach(link => {

            link.addEventListener("click", () => {

                navMenu.classList.remove("show-menu");

                const icon = menuToggle.querySelector("i");

                icon.classList.remove("fa-xmark");
                icon.classList.add("fa-bars");

            });

        });

    }


    /* =========================
       SCROLL REVEAL
    ========================= */

    const revealElements = document.querySelectorAll(
        ".service-card, .project-card, .about-content, .price-card, .contact-box"
    );

    const revealObserver = new IntersectionObserver(
        (entries, observer) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("reveal-visible");

                    observer.unobserve(entry.target);

                }

            });

        },
        {
            threshold: 0.15
        }
    );


    revealElements.forEach(element => {

        element.classList.add("reveal");

        revealObserver.observe(element);

    });


    /* =========================
       ACTIVE NAVIGATION
    ========================= */

    const sections = document.querySelectorAll("section[id]");
    const navItems = document.querySelectorAll(".nav-menu a");

    const sectionObserver = new IntersectionObserver(
        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    navItems.forEach(link => {
                        link.classList.remove("active");
                    });

                    const activeLink = document.querySelector(
                        `.nav-menu a[href="#${entry.target.id}"]`
                    );

                    if (activeLink) {
                        activeLink.classList.add("active");
                    }

                }

            });

        },
        {
            threshold: 0.35
        }
    );


    sections.forEach(section => {
        sectionObserver.observe(section);
    });


    /* =========================
       CURRENT YEAR
    ========================= */

    const yearText = document.querySelector(".footer-bottom p");

    if (yearText) {

        const currentYear = new Date().getFullYear();

        yearText.innerHTML =
            `© ${currentYear} Rocky Web Designs. All Rights Reserved.`;

    }


    /* =========================
       SMOOTH PROJECT BUTTON
    ========================= */

    const projectLinks = document.querySelectorAll(
        '.project-link[href="#"]'
    );

    projectLinks.forEach(link => {

        link.addEventListener("click", event => {

            event.preventDefault();

        });

    });

});