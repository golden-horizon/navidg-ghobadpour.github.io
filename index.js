// Background Toggle
const bodyEl = document.querySelector("body");
const btn = document.getElementById("btn");
let isBgColorGrey = true;
btn.addEventListener("click", () => {
  bodyEl.style.backgroundColor = isBgColorGrey ? "blue" : "grey";
  isBgColorGrey = !isBgColorGrey;
});

// Moving Banner
const rect = document.getElementById("rect");
let position = -rect.offsetWidth;
function update() {
  rect.style.left = position + "px";
  position += 1.5;
  if (position > window.innerWidth) position = -rect.offsetWidth;
}
function animate() { update(); requestAnimationFrame(animate); }
requestAnimationFrame(animate);

// Modal Functionality
const modal = document.getElementById("modal");
const modalBody = document.getElementById("modal-body");
const closeBtn = document.getElementById("close-modal-btn");

document.querySelectorAll(".open-modal").forEach(button => {
  button.addEventListener("click", () => {
    const project = button.dataset.project;
    if (project === "siem") {
      modalBody.innerHTML = `
        <h2>Enterprise SIEM Implementation</h2>
        <ul>
          <li>Splunk log ingestion</li>
          <li>AWS EC2 + IAM hardening</li>
          <li>Threat detection rules</li>
        </ul>
      `;
    } else if (project === "vpn") {
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

// Close modal
closeBtn.addEventListener("click", () => modal.style.display = "none");
window.addEventListener("click", e => {
  if (e.target === modal) modal.style.display = "none";
});

