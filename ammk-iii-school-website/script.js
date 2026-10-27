// The mobile navigation button opens and closes the site menu.
const menuButton = document.querySelector(".menu-toggle");
const navigation = document.querySelector(".primary-nav");

function closeMenu() {
  menuButton.setAttribute("aria-expanded", "false");
  navigation.classList.remove("is-open");
  menuButton.querySelector(".sr-only").textContent = "Open navigation menu";
}

menuButton.addEventListener("click", () => {
  const isExpanded = menuButton.getAttribute("aria-expanded") === "true";
  menuButton.setAttribute("aria-expanded", String(!isExpanded));
  navigation.classList.toggle("is-open", !isExpanded);
  menuButton.querySelector(".sr-only").textContent = isExpanded
    ? "Open navigation menu"
    : "Close navigation menu";
});

// Close the mobile menu after choosing a destination.
navigation.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", closeMenu);
});

// Keep the footer year current without editing the HTML each year.
document.querySelector("#current-year").textContent = new Date().getFullYear();
