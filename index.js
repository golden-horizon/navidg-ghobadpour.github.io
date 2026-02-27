document.addEventListener("DOMContentLoaded", function () {

  /* =====================================
     1️⃣ BACKGROUND TOGGLE
  ===================================== */
  const bodyEl = document.body;
  const toggleBtn = document.getElementById("btn");
  let isDark = true;

  if (toggleBtn) {
    toggleBtn.addEventListener("click", function () {
      bodyEl.style.backgroundColor = isDark ? "#1f2937" : "#0d1117";
      isDark = !isDark;
    });
  }

  /* =====================================
     2️⃣ MOVING BANNER
  ===================================== */
  const rect = document.getElementById("rect");

  if (rect) {
    let position = -rect.offsetWidth;

    function animateBanner() {
      rect.style.left = position + "px";
      position += 1.5;

      if (position > window.innerWidth) {
        position = -rect.offsetWidth;
      }

      requestAnimationFrame(animateBanner);
    }

    requestAnimationFrame(animateBanner);
  }

  /* =====================================
     3️⃣ CUSTOM MODAL
  ===================================== */
const modal = document.getElementById("modal");
const modalBody = document.getElementById("modal-body");
const closeBtn = document.getElementById("close-modal-btn");

const projectButtons = document.querySelectorAll(".open-modal");

projectButtons.forEach(button => {
  button.addEventListener("click", () => {
    const project = button.getAttribute("data-project");

    if (project === "siem") {
      modalBody.innerHTML = `
        <h2>Enterprise SIEM Implementation</h2>
        <ul>
          <li>Splunk log ingestion</li>
          <li>AWS EC2 + IAM hardening</li>
          <li>Threat detection rules</li>
        </ul>
      `;
    }

    if (project === "vpn") {
      modalBody.innerHTML = `
        <h2>Site-to-Site IPsec VPN</h2>
        <ul>
          <li>IPsec configuration</li>
          <li>Secure tunnel between sites</li>
          <li>Firewall rule hardening</li>
        </ul>
      `;
    }

    modal.style.display = "block";
  });
});

closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});
