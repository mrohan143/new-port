/* ==========================================================================
   PORTFOLIO SCRIPT
   Sections:
   1. Navbar scroll effect
   2. Mobile hamburger menu
   3. Smooth scroll + active nav link on scroll
   4. Scroll reveal animation
   5. Animated stat counters
   6. Contact form validation
   7. Back to top button
   8. Footer year
   ========================================================================== */

document.addEventListener("DOMContentLoaded", () => {

  /* ---------- 1. NAVBAR SCROLL EFFECT ---------- */
  const navbar = document.getElementById("navbar");

  function handleNavbarScroll() {
    if (window.scrollY > 20) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  }
  handleNavbarScroll();
  window.addEventListener("scroll", handleNavbarScroll);

  /* ---------- 2. MOBILE HAMBURGER MENU ---------- */
  const navToggle = document.getElementById("navToggle");
  const navMenu = document.getElementById("navMenu");

  function closeMenu() {
    navMenu.classList.remove("open");
    navToggle.classList.remove("open");
    navToggle.setAttribute("aria-expanded", "false");
    document.body.style.overflow = "";
  }

  function openMenu() {
    navMenu.classList.add("open");
    navToggle.classList.add("open");
    navToggle.setAttribute("aria-expanded", "true");
    document.body.style.overflow = "hidden";
  }

  navToggle.addEventListener("click", () => {
    const isOpen = navMenu.classList.contains("open");
    isOpen ? closeMenu() : openMenu();
  });

  // Close mobile menu whenever a nav link is clicked
  document.querySelectorAll(".nav-link").forEach((link) => {
    link.addEventListener("click", closeMenu);
  });

  /* ---------- 3. ACTIVE NAV LINK ON SCROLL ---------- */
  const sections = document.querySelectorAll("main section[id]");
  const navLinks = document.querySelectorAll(".nav-link");

  function setActiveLink() {
    let currentId = sections[0] ? sections[0].id : "";
    const scrollPos = window.scrollY + 140;

    sections.forEach((section) => {
      if (scrollPos >= section.offsetTop) {
        currentId = section.id;
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove("active-link");
      if (link.getAttribute("href") === `#${currentId}`) {
        link.classList.add("active-link");
      }
    });
  }

  window.addEventListener("scroll", setActiveLink);
  setActiveLink();

  /* ---------- 4. SCROLL REVEAL ANIMATION ---------- */
  const revealEls = document.querySelectorAll(".reveal");

  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  revealEls.forEach((el) => revealObserver.observe(el));

  /* ---------- 5. ANIMATED STAT COUNTERS ---------- */
  const statNumbers = document.querySelectorAll(".stat-number");

  function animateCount(el) {
    const target = parseInt(el.getAttribute("data-count"), 10) || 0;
    const duration = 1200;
    const startTime = performance.now();

    function tick(now) {
      const progress = Math.min((now - startTime) / duration, 1);
      el.textContent = Math.floor(progress * target);
      if (progress < 1) {
        requestAnimationFrame(tick);
      } else {
        el.textContent = target;
      }
    }
    requestAnimationFrame(tick);
  }

  const statObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animateCount(entry.target);
          statObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.5 }
  );

  statNumbers.forEach((el) => statObserver.observe(el));

  /* ---------- 6. CONTACT FORM VALIDATION ---------- */
  const contactForm = document.getElementById("contactForm");
  const formSuccess = document.getElementById("formSuccess");

  function showError(inputEl, errorEl, message) {
    inputEl.closest(".form-group").classList.add("error");
    errorEl.textContent = message;
  }

  function clearError(inputEl, errorEl) {
    inputEl.closest(".form-group").classList.remove("error");
    errorEl.textContent = "";
  }

  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();
    formSuccess.textContent = "";

    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const messageInput = document.getElementById("message");

    const nameError = document.getElementById("nameError");
    const emailError = document.getElementById("emailError");
    const messageError = document.getElementById("messageError");

    let isValid = true;

    if (nameInput.value.trim().length < 2) {
      showError(nameInput, nameError, "Please enter your name.");
      isValid = false;
    } else {
      clearError(nameInput, nameError);
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(emailInput.value.trim())) {
      showError(emailInput, emailError, "Please enter a valid email address.");
      isValid = false;
    } else {
      clearError(emailInput, emailError);
    }

    if (messageInput.value.trim().length < 10) {
      showError(messageInput, messageError, "Message should be at least 10 characters.");
      isValid = false;
    } else {
      clearError(messageInput, messageError);
    }

    if (isValid) {
      // This is a frontend-only assignment: no backend or email service is
      // connected. Replace this block with a real API call if one is added.
      formSuccess.textContent = "Thanks! Your message has been received.";
      contactForm.reset();
    }
  });

  /* ---------- 7. BACK TO TOP BUTTON ---------- */
  const backToTop = document.getElementById("backToTop");
  backToTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  /* ---------- 8. FOOTER YEAR ---------- */
  document.getElementById("year").textContent = new Date().getFullYear();
});
