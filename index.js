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

// Modal for Projects
const modal = document.getElementById("modal");
const modalBody = document.getElementById("modal-body");
const closeBtn = document.getElementById("close-modal-btn");

document.querySelectorAll(".open-modal").forEach(button => {
  button.addEventListener("click", () => {
    const project = button.dataset.project;
    if (project === "siem") {
      modalBody.innerHTML = `<h2>Enterprise SIEM Implementation</h2><ul><li>Splunk log ingestion</li><li>AWS EC2 + IAM hardening</li><li>Threat detection rules</li></ul>`;
    } else if (project === "vpn") {
      modalBody.innerHTML = `<h2>Site-to-Site IPsec VPN</h2><ul><li>IPsec configuration</li><li>Secure tunnel between sites</li><li>Firewall rule hardening</li></ul>`;
    }
    modal.showModal();
  });
});
closeBtn.addEventListener("click", () => modal.close());

// Visitor Info
document.getElementById("protocol").textContent = window.location.protocol;
document.getElementById("browser").textContent = navigator.userAgent;
document.getElementById("platform").textContent = navigator.platform;
document.getElementById("screen").textContent = `${window.innerWidth} x ${window.innerHeight}`;

// Get public IP and location using API
fetch("https://ipapi.co/json/")
  .then(response => response.json())
  .then(data => {
    document.getElementById("ip").textContent = data.ip;
    document.getElementById("city").textContent = data.city;
    document.getElementById("country").textContent = data.country_name;
  })
  .catch(() => {
    document.getElementById("ip").textContent = "Unavailable";
    document.getElementById("city").textContent = "N/A";
    document.getElementById("country").textContent = "N/A";
  });

// Internet Speed Gauge
const speedCanvas = document.getElementById("speedGauge");
const ctx = speedCanvas.getContext("2d");
function drawGauge(speed){
  ctx.clearRect(0,0,60,60);
  ctx.beginPath();
  ctx.arc(30,30,25,0,2*Math.PI);
  ctx.strokeStyle = "#555";
  ctx.lineWidth = 4;
  ctx.stroke();

  ctx.beginPath();
  ctx.arc(30,30,25,-Math.PI/2,(-Math.PI/2 + (speed/100)*2*Math.PI));
  ctx.strokeStyle = "#00bcd4";
  ctx.lineWidth = 4;
  ctx.stroke();
}

function updateSpeedGauge(){
  let speed = navigator.connection ? navigator.connection.downlink*10 : 5; // scale for demo
  if(speed > 100) speed = 100;
  drawGauge(speed);
  document.getElementById("speedValue").textContent = navigator.connection ? navigator.connection.downlink + "M" : "N/A";
}
updateSpeedGauge();
