document.addEventListener("DOMContentLoaded", () => {
    // Modal functionality
    const worksItems = document.querySelectorAll(".works-gallery .work-item");
    const modal = document.getElementById("modal");
    const modalImage = document.getElementById("modal-image");
    const closeBtn = document.getElementById("close-btn");

    // Display the image in the modal when a work item is clicked
    worksItems.forEach(item => {
        item.addEventListener("click", () => {
            const imageSrc = item.getAttribute("data-image");  // Get the image source from data attribute
            modalImage.src = imageSrc;  // Set the image source in the modal
            modal.style.display = "flex";  // Show the modal (overlay and image)
        });
    });

    // Close the modal when the close button is clicked
    closeBtn.addEventListener("click", () => {
        modal.style.display = "none";  // Hide the modal
    });

    // Close the modal if clicked outside the modal content
    modal.addEventListener("click", (event) => {
        if (event.target === modal) {
            modal.style.display = "none";  // Close if clicked on the overlay
        }
    });
});
