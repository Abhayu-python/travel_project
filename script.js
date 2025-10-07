// Location Filter
const locationSelect = document.getElementById("location");
const cards = document.querySelectorAll(".card");

locationSelect.addEventListener("change", () => {
  const selected = locationSelect.value;

  cards.forEach(card => {
    if (selected === "all" || card.dataset.location === selected) {
      card.style.display = "block";
      card.style.animation = "fadeIn 0.8s ease-in-out";
    } else {
      card.style.display = "none";
    }
  });
});

// Expandable Cards
cards.forEach(card => {
  card.addEventListener("click", () => {
    card.classList.toggle("active");
  });
});

// Modal functionality
const contactLink = document.querySelector('a[href="#contact"]');
const modal = document.getElementById('contactModal');
const closeBtn = document.querySelector('.close');

// Open modal on click
contactLink.addEventListener('click', (e) => {
  e.preventDefault(); // Prevent scrolling
  modal.style.display = "block";
});

// Close modal on X click
closeBtn.addEventListener('click', () => {
  modal.style.display = "none";
});

// Close modal if clicking outside modal content
window.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});

// Contact Modal
// const contactLink = document.querySelector('a[href="#contact"]');
const contactModal = document.getElementById('contactModal');
const contactClose = contactModal.querySelector('.close');

contactLink.addEventListener('click', (e) => {
  e.preventDefault();
  contactModal.style.display = "block";
});

contactClose.addEventListener('click', () => {
  contactModal.style.display = "none";
});

// Reviews Modal
const reviewsLink = document.querySelector('a[href="#reviews"]');
const reviewsModal = document.getElementById('reviewsModal');
const reviewsClose = reviewsModal.querySelector('.close');

reviewsLink.addEventListener('click', (e) => {
  e.preventDefault();
  reviewsModal.style.display = "block";
});

reviewsClose.addEventListener('click', () => {
  reviewsModal.style.display = "none";
});

// Close modals when clicking outside
window.addEventListener('click', (e) => {
  if (e.target === contactModal) contactModal.style.display = "none";
  if (e.target === reviewsModal) reviewsModal.style.display = "none";
});

// Sub-Card Modal
const subCards = document.querySelectorAll('.sub-card');
const subCardModal = document.getElementById('subCardModal');
const modalTitle = document.getElementById('modalTitle');
const modalImage = document.getElementById('modalImage');
const modalDescription = document.getElementById('modalDescription');
const subCardClose = subCardModal.querySelector('.close');

subCards.forEach(card => {
  card.addEventListener('click', () => {
    const title = card.querySelector('h3').innerText;
    const imgSrc = card.querySelector('img').src;
    const desc = card.querySelector('p').innerText;

    modalTitle.innerText = title;
    modalImage.src = imgSrc;
    modalDescription.innerText = desc;

    subCardModal.style.display = 'block';
  });
});

// Close modal on X click
subCardClose.addEventListener('click', () => {
  subCardModal.style.display = 'none';
});

// Close modal if clicking outside content
window.addEventListener('click', (e) => {
  if (e.target === subCardModal) {
    subCardModal.style.display = 'none';
  }
});


const overlay = document.getElementById("overlay");
const loginBox = document.getElementById("login");
const signupBox = document.getElementById("signup");

// Open modal
function openModal() {
  overlay.style.display = "flex";
}

// Show signup
function showSignup() {
  loginBox.style.display = "none";
  signupBox.style.display = "block";
}

// Show login
function showLogin() {
  signupBox.style.display = "none";
  loginBox.style.display = "block";
}

// Close modal on background click
overlay.addEventListener("click", function(e) {
  if (e.target === overlay) {
    overlay.style.display = "none";
  }
});

    
document.querySelectorAll('.toggle-button').forEach(button => {
  button.addEventListener('click', function() {
    const mediaContainer = this.previousElementSibling;
    const img = mediaContainer.querySelector('img');
    const existingIframe = mediaContainer.querySelector('iframe');
    const videoUrl = mediaContainer.getAttribute('data-video');

    // If video is already showing, toggle back to image
    if (existingIframe) {
      existingIframe.remove();
      img.style.display = 'block';
      this.textContent = 'Show Video';
    } else {
      const iframe = document.createElement('iframe');
      iframe.src = videoUrl;
      iframe.width = '100%';
      iframe.height = '200';
      iframe.frameBorder = '0';
      iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture';
      iframe.allowFullscreen = true;

      img.style.display = 'none';
      mediaContainer.appendChild(iframe);
      this.textContent = 'Hide Video';
    }
  });
});


  const searchInput = document.getElementById('searchInput');
  // const cards = document.querySelectorAll('.card');

  searchInput.addEventListener('input', () => {
    const query = searchInput.value.toLowerCase().trim();

    cards.forEach(card => {
      const location = card.dataset.location.toLowerCase();
      if (location.includes(query)) {
        card.style.display = 'block';
      } else {
        card.style.display = 'none';
      }
    });
  });

const discoverBtn = document.getElementById('discover-btn');
  const discoverSection = document.getElementById('discover-section');

  // Add toggle functionality
  discoverBtn.addEventListener('click', () => {
    if (discoverSection.style.display === 'none' || discoverSection.style.display === '') {
      discoverSection.style.display = 'block';
      // Smooth scroll to the section
      discoverSection.scrollIntoView({ behavior: 'smooth' });
    } else {
      discoverSection.style.display = 'none';
    }
  });





