// Background Toggle
const bodyEl = document.querySelector("body");
const btn = document.getElementById("btn");
let isBgGrey = true;

btn.addEventListener("click", () => {
  bodyEl.style.backgroundColor = isBgGrey ? "blue" : "#0d1117";
  isBgGrey = !isBgGrey;
});

// Moving Banner
const rect = document.getElementById("rect");
let pos = -rect.offsetWidth;

function moveBanner() {
  rect.style.left = pos + "px";
  pos += 1.5;
  if (pos > window.innerWidth) pos = -rect.offsetWidth;
  requestAnimationFrame(moveBanner);
}

requestAnimationFrame(moveBanner);

// Modal for Multiple Projects
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
    modal.showModal();
  });
});

// Close Modal
closeBtn.addEventListener("click", () => modal.close());

