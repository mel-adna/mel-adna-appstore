// FAQ Toggle logic
function toggleFaq(element) {
    const answer = element.nextElementSibling;
    const toggleBtn = element.querySelector('.faq-toggle');

    if (answer.style.display === "block") {
        answer.style.display = "none";
        toggleBtn.textContent = "+";
        toggleBtn.style.color = "";
    } else {
        answer.style.display = "block";
        toggleBtn.textContent = "-";
        toggleBtn.style.color = "var(--primary-color)";
    }
}

// Modal Logic
function openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = "block";
        document.body.style.overflow = "hidden"; // Prevent scrolling
    }
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = "none";
        document.body.style.overflow = "auto"; // Re-enable scrolling
    }
}

// Close modal when clicking outside
window.onclick = function (event) {
    if (event.target.classList.contains('modal')) {
        event.target.style.display = "none";
        document.body.style.overflow = "auto";
    }
}
