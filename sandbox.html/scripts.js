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
    function darkMode() {
        var element = document.body;
        element.classList.toggle("dark-mode");
    }
