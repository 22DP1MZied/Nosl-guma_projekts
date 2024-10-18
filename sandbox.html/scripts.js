// Function to toggle dark mode
function darkMode() {
    const body = document.body;
    body.classList.toggle("dark-mode");
    
    // Check if dark mode is enabled
    if (body.classList.contains("dark-mode")) {
        localStorage.setItem("darkMode", "enabled");
    } else {
        localStorage.setItem("darkMode", "disabled");
    }
}

// Function to check the dark mode setting on page load
function checkDarkMode() {
    const darkModeSetting = localStorage.getItem("darkMode");
    if (darkModeSetting === "enabled") {
        document.body.classList.add("dark-mode");
    }
}

// Call checkDarkMode when the page loads
document.addEventListener("DOMContentLoaded", checkDarkMode);

// Function to open the modal with dynamic content
function openModal(carTitle, carDescription) {
    var modal = document.getElementById("myModal");
    
    // Update modal content dynamically
    modal.querySelector("h2").textContent = carTitle;
    modal.querySelector("p").textContent = carDescription;
    
    modal.style.display = "flex"; // Display the modal with flex to center it
}

// Function to close the modal
function closeModal() {
    var modal = document.getElementById("myModal");
    modal.style.display = "none";
}

// Close the modal if the user clicks outside the modal
window.onclick = function(event) {
    var modal = document.getElementById("myModal");
    if (event.target == modal) {
        closeModal();
    }
}
