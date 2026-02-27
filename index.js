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
  const openBtn = document.getElementById("open-modal-btn");
  const closeBtn = document.getElementById("close-modal-btn");

  // Open modal
  if (openBtn && modal) {
    openBtn.addEventListener("click", function () {
      modal.style.display = "block";
    });
  }

  // Close modal via close button
  if (closeBtn && modal) {
    closeBtn.addEventListener("click", function () {
      modal.style.display = "none";
    });
  }

  // Close modal when clicking outside modal-content
  window.addEventListener("click", function (event) {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  });

});



