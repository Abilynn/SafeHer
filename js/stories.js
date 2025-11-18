function googleTranslateElementInit() {
  new google.translate.TranslateElement(
    { pageLanguage: "en" },
    "google_translate_element"
  );
}

document.addEventListener("DOMContentLoaded", function () {
  // Elements
  const shareBtns = document.querySelectorAll(".button_2, .new-story");
  const formModal = document.getElementById("User-CreateStories");
  const form = document.getElementById("User-CreateStories");
  const storiesContainer = document.getElementById("all-shared-stories");
  const loadMoreBtn = document.getElementById("loadMoreBtn");

  // Create Success Modal
  const successModal = document.createElement("div");
  successModal.className = "success-modal"; // only ONE class
  successModal.style.display = "none"; // extra safety
  successModal.innerHTML = `
  <div class="modal-content">
    <div class="success-content">
      <i class="fa-solid fa-circle-check" style="color:#28A745; font-size:2.0rem;margin-bottom:1rem;"></i>
      <h2>Thank You for Your Courage</h2>
      <p>Your story has been submitted successfully.<br>
         We’ll review it with care and may feature it here to inspire others — 
         with your permission and complete anonymity.
      </p>
      <p style="color:#B85C89;font-weight:600;">Your voice matters. Keep shining.</p>
      <button class="btn-close-success">Close</button>
    </div>
  </div>
`;
  document.body.appendChild(successModal);

  // Wrap form in modal content
  const formContent = document.createElement("div");
  formContent.className = "form-content";
  formContent.innerHTML = `
      <span class="close">×</span>
      ${form.innerHTML}
    `;
  form.innerHTML = "";
  form.appendChild(formContent);

  // === Open Form Modal ===
  shareBtns.forEach((btn) => {
    // ← Fixed: Loop over all buttons
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      formModal.style.display = "block"; // ← Fixed: Use "flex" to center the modal
    });
  });

  // === Close Modals ===
  document.addEventListener("click", (e) => {
    // Close form modal
    if (
      e.target.classList.contains("close") &&
      e.target.closest("#User-CreateStories")
    ) {
      formModal.style.display = "none";
    }
    if (e.target === formModal) {
      formModal.style.display = "none";
    }

    // Close success modal
    if (
      (e.target.classList.contains("close") &&
        e.target.closest(".success-modal")) ||
      e.target === successModal ||
      e.target.classList.contains("btn-close-success")
    ) {
      successModal.style.display = "none";
    }
  });

  // === Form Submit → Success Modal ===
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    // Get fields
    const titleInput = form.querySelector('input[placeholder*="title"]');
    const ageInput = form.querySelector('input[type="number"]');
    const countrySelect = form.querySelector('select[name="Country"]');
    const categorySelect = form.querySelector(
      'select[name="violence_category"]'
    );
    const storyTextarea = form.querySelector("textarea");

    const title = titleInput.value.trim() || "My Story";
    const age = ageInput.value.trim() || "Not shared";
    const country = countrySelect.selectedOptions[0]?.text || "Not selected";
    const category = categorySelect.selectedOptions[0]?.text || "Not selected";
    const story = storyTextarea.value.trim();

    // === VALIDATION ===
    if (!titleInput.value.trim()) {
      alert("Please enter a title.");
      titleInput.focus();
      return;
    }
    if (!ageInput.value) {
      alert("Please enter your age.");
      ageInput.focus();
      return;
    }
    if (countrySelect.selectedIndex === 0) {
      alert("Please select your country.");
      countrySelect.focus();
      return;
    }
    if (categorySelect.selectedIndex === 0) {
      alert("Please select the category.");
      categorySelect.focus();
      return;
    }
    if (!story) {
      alert("Please share your story.");
      storyTextarea.focus();
      return;
    }

    // === Create Story Card ===
    // const excerpt =
    //   story.split(" ").slice(0, 40).join(" ") +
    //   (story.split(" ").length > 40 ? "..." : "");
    // const newCard = document.createElement("div");
    // newCard.className = "story-card";
    // newCard.innerHTML = `
    //     <div class="story-header">
    //       <h3>${title}</h3>
    //     </div>
    //     <div class="story-meta">
    //       <span class="age">Age: ${age}</span>
    //       <span class="country">Country: ${country}</span>
    //       <span class="category">Category: ${category}</span>
    //     </div>
    //     <p class="excerpt">${excerpt}</p>
    //     <div class="story-footer">
    //       <span class="author">— Anonymous</span>
    //     </div>
    //   `;

    // storiesContainer.insertBefore(newCard, storiesContainer.firstChild);

    // === Hide Form, Show Success Modal ===
    formModal.style.display = "none";
    successModal.style.display = "block";

    // Reset form
    form.reset();
  });

  // === Load More ===
  loadMoreBtn.addEventListener("click", () => {
    document.querySelectorAll(".story-card.hidden").forEach((card, i) => {
      if (i < 5) card.classList.remove("hidden");
    });
    loadMoreBtn.style.display = "none";
  });
});

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

document.addEventListener('DOMContentLoaded', function () {
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
});