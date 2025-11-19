const menuBtn = document.getElementById("menu-btn");
  const navLinks = document.getElementById("nav-links");

  if (menuBtn && navLinks) {
      menuBtn.setAttribute("aria-expanded", "false");
      menuBtn.setAttribute("type", "button");

      const menuIcon = menuBtn.querySelector("i");

      menuBtn.addEventListener("click", () => {
          const open = navLinks.classList.toggle("show");

          if (menuIcon) {
              menuIcon.classList.toggle("fa-bars", !open);
              menuIcon.classList.toggle("fa-times", open);
          }

          menuBtn.setAttribute("aria-expanded", open ? "true" : "false");
      });
  }

document.addEventListener("DOMContentLoaded", () => {
  const navLinks = document.querySelectorAll('.nav-links a');

    navLinks.forEach(link => {
        link.addEventListener('click', function () {
            navLinks.forEach(l => l.classList.remove('active'));
            this.classList.add('active');
        });
    });

    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        }
    });

  const form = document.getElementById("SafeHerForm");
  const submitBtn = document.querySelector(".submit-btn");
  const spinner = document.getElementById("loadingSpinner");
  const modal = document.getElementById("responseModal");
  const modalMessage = document.getElementById("modalMessage");

    // Anonymous toggle elements
  const anonymousSwitch = document.getElementById("anonymousSwitch");
  const identifiedFields = document.getElementById("identifiedFields");
  const anonymousFields = document.getElementById("anonymousFields");

  //anonymous toggle
  anonymousSwitch.addEventListener("change", () => {
    if (anonymousSwitch.checked) {
      identifiedFields.style.display = "none";
      anonymousFields.style.display = "block";

      // Remove required from identified fields
      identifiedFields.querySelectorAll("input").forEach(input => {
        input.required = false;
      });

      // Optional: add required for anonymous fields
      anonymousFields.querySelectorAll("input").forEach(input => {
        input.required = false;
      });

    } else {
      identifiedFields.style.display = "block";
      anonymousFields.style.display = "none";

      // Restore required attributes
      identifiedFields.querySelectorAll("input").forEach(input => {
        if (input.hasAttribute("data-required")) {
          input.required = true;
        }
      });
    }
  });

  // Spinner helper
  const showSpinner = (show = true) => {
    spinner.style.display = show ? "block" : "none";
  };

  // File handling
  let storedFiles = [];
  const input = document.getElementById("file-input");
  const fileList = document.getElementById("file-list");

  const updateFileList = () => {
    fileList.innerHTML = "";
    storedFiles.forEach((file, index) => {
      const li = document.createElement("li");
      li.classList.add("file-item");
      li.innerHTML = `
        <span class="file-name">${file.name}</span>
        <button type="button" class="remove-btn">Remove</button>
      `;

      // Remove button
      li.querySelector(".remove-btn").addEventListener("click", () => {
        storedFiles.splice(index, 1);
        updateFileList();
      });
      fileList.appendChild(li);
    });
  };

  input.addEventListener("change", (e) => {
    Array.from(e.target.files).forEach(file => storedFiles.push(file));
    updateFileList();
    e.target.value = "";
  });

  // Modal function
  const showModal = (message = "", type = "success") => {
    modalMessage.textContent = message;
    const borderColor = type === "success" ? "#28A745" : "#D9534F";

    document.querySelector(".modal-box").style.borderLeftColor = borderColor;
    modalMessage.style.color = borderColor;
    modal.style.display = "flex";

    setTimeout(() => {
      modal.style.display = "none";
    }, 2000);
  };

  // Form submit handler
  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    submitBtn.disabled = true;
    submitBtn.textContent = "Sending...";
    showSpinner(true);

    const formData = new FormData(form);
    storedFiles.forEach(file => formData.append("attachments[]", file));

    try {
      const resp = await fetch(form.action, {
        method: form.method || "POST",
        headers: { "Accept": "application/json" },
        body: formData
      });

      showSpinner(false);

      if (resp.ok) {
        showModal("Your report has been submitted successfully!", "success");
        form.reset();
        storedFiles = [];
        updateFileList();
        window.scrollTo({ top: 0, behavior: 'smooth' });

      // Reset anonymous UI
      if (anonymousSwitch.checked) {
        anonymousSwitch.checked = false;
        identifiedFields.style.display = "block";
        anonymousFields.style.display = "none";
      }

      } else {
        let errText = "Error sending report. Please try again.";

        try {
          const data = await resp.json();
          if (data && data.error) errText = `${data.error}`;
        } catch (_) {}

        showModal(errText, "error");
      }

    } catch (err) {
      showSpinner(false);
      showModal("Network error. Check your connection.", "error");
      console.error(err);

    } finally {
      setTimeout(() => {
        submitBtn.disabled = false;
        submitBtn.textContent = "Submit Report";
      }, 2100);
    }
  });

    /* -----------------------------------
      HIDE MODAL ON OUTSIDE CLICK
  ------------------------------------- */
  modal.addEventListener("click", (ev) => {
    if (ev.target === modal) modal.style.display = "none";
  });

});
