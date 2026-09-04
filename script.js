/* =====================================================
   DHANANJAY SUPER SHOPEE
   Main JavaScript
===================================================== */

document.addEventListener("DOMContentLoaded", function () {

    /* ================= MOBILE MENU ================= */

    const menuBtn = document.getElementById("menuBtn");
    const navbar = document.querySelector(".navbar");

    if (menuBtn && navbar) {

        menuBtn.addEventListener("click", function () {

            navbar.classList.toggle("active");

            if (navbar.classList.contains("active")) {
                menuBtn.textContent = "✕";
            } else {
                menuBtn.textContent = "☰";
            }

        });

        // Close menu after clicking a navigation link
        document.querySelectorAll(".navbar a").forEach(function (link) {

            link.addEventListener("click", function () {

                navbar.classList.remove("active");
                menuBtn.textContent = "☰";

            });

        });

    }


    /* ================= HEADER SHADOW ================= */

    const header = document.querySelector(".header");

    window.addEventListener("scroll", function () {

        if (window.scrollY > 20) {
            header.style.boxShadow =
                "0 5px 20px rgba(0, 0, 0, 0.08)";
        } else {
            header.style.boxShadow =
                "0 3px 15px rgba(0, 0, 0, 0.04)";
        }

    });


    /* ================= ACTIVE NAVIGATION ================= */

    const sections = document.querySelectorAll("section[id]");
    const navLinks = document.querySelectorAll(".navbar a");

    window.addEventListener("scroll", function () {

        let currentSection = "";

        sections.forEach(function (section) {

            const sectionTop = section.offsetTop - 120;
            const sectionHeight = section.offsetHeight;

            if (
                window.scrollY >= sectionTop &&
                window.scrollY < sectionTop + sectionHeight
            ) {
                currentSection = section.getAttribute("id");
            }

        });

        navLinks.forEach(function (link) {

            link.classList.remove("active");

            if (link.getAttribute("href") === "#" + currentSection) {
                link.classList.add("active");
            }

        });

    });


    /* ================= SCROLL REVEAL ================= */

    const revealElements = document.querySelectorAll(
        ".category-card, .why-card, .contact-card, .feature-card, .gallery-item"
    );

    const revealObserver = new IntersectionObserver(
        function (entries, observer) {

            entries.forEach(function (entry) {

                if (entry.isIntersecting) {

                    entry.target.style.opacity = "1";
                    entry.target.style.transform = "translateY(0)";

                    observer.unobserve(entry.target);

                }

            });

        },
        {
            threshold: 0.1
        }
    );


    revealElements.forEach(function (element) {

        element.style.opacity = "0";
        element.style.transform = "translateY(25px)";
        element.style.transition = "opacity 0.6s ease, transform 0.6s ease";

        revealObserver.observe(element);

    });


    /* ================= GALLERY IMAGE CLICK ================= */

    const galleryImages = document.querySelectorAll(
        ".gallery-item img"
    );

    galleryImages.forEach(function (image) {

        image.addEventListener("click", function () {

            const imageUrl = this.src;

            const lightbox = document.createElement("div");

            lightbox.className = "lightbox";

            lightbox.innerHTML = `
                <div class="lightbox-content">
                    <button class="lightbox-close">✕</button>
                    <img src="${imageUrl}" alt="Store Image">
                </div>
            `;

            document.body.appendChild(lightbox);

            document.body.style.overflow = "hidden";

            const closeButton =
                lightbox.querySelector(".lightbox-close");

            function closeLightbox() {

                lightbox.remove();
                document.body.style.overflow = "";

            }

            closeButton.addEventListener(
                "click",
                closeLightbox
            );

            lightbox.addEventListener("click", function (event) {

                if (event.target === lightbox) {
                    closeLightbox();
                }

            });

        });

    });


    /* ================= ESC KEY FOR LIGHTBOX ================= */

    document.addEventListener("keydown", function (event) {

        if (event.key === "Escape") {

            const lightbox =
                document.querySelector(".lightbox");

            if (lightbox) {

                lightbox.remove();
                document.body.style.overflow = "";

            }

        }

    });


    /* ================= CURRENT YEAR ================= */

    const footerYear = document.querySelector(".footer-bottom p");

    if (footerYear) {

        footerYear.innerHTML =
            `© ${new Date().getFullYear()} Dhananjay Super Shopee. All Rights Reserved.`;

    }

});