const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav-close"),
  navLink = document.querySelectorAll(".nav_link"),
  header = document.getElementById("header"),
  contactForm = document.getElementById("contact-form"),
  contactMessage = document.getElementById("contact-message"),
  scrollUp = document.getElementById("scroll-up");

// ==================== SHOW MENU ====================

if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show_menu");
  });
}

if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show_menu");
  });
}

// Remove menu after click
const linkAction = () => {
  navMenu.classList.remove("show_menu");
};
navLink.forEach((n) => n.addEventListener("click", linkAction));

// ==================== BLUR HEADER ====================

const blurHeader = () => {
  this.scrollY >= 50
    ? header.classList.add("blur-header")
    : header.classList.remove("blur-header");
};
window.addEventListener("scroll", blurHeader);

// ==================== EMAIL JS ====================

function sendMail() {
  var params = {
    from_name: document.getElementById("form_name").value,
    email_id: document.getElementById("email_id").value,
    message: document.getElementById("message").value,
  };
  emailjs.send("service_5b9xak9", "template_yxldhdj", params).then(() => {
    contactMessage.textContent = "Message sent successfully ✅";
    setTimeout(() => {
      contactMessage.textContent = "";
    }, 5000);
    contactForm.reset();
  });
}

// ==================== SHOW SCROLL UP ====================

const scrollUP = () => {
  this.scrollY >= 350
    ? scrollUp.classList.add("show-scroll")
    : scrollUp.classList.remove("show-scroll");
};
window.addEventListener("scroll", scrollUP);
