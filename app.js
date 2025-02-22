document.addEventListener("DOMContentLoaded", function () {
    let currentPage = window.location.pathname.split("/").pop(); // Current file name
    let pageNumber = parseInt(currentPage.match(/\d+/)); // Extract page number
    
    if (!pageNumber) pageNumber = 1; // Default page 1 if no number found

    let prevBtn = document.getElementById("prevBtn");
    let nextBtn = document.getElementById("nextBtn");

    // Set previous page
    if (pageNumber > 1) {
        prevBtn.href = `index${pageNumber - 1}.html`;
    } else {
        prevBtn.style.display = "none"; // Hide if first page
    }

    // Set next page
    if (pageNumber < 25) { // Assuming 25 pages
        nextBtn.href = `index${pageNumber + 1}.html`;
    } else {
        nextBtn.style.display = "none"; // Hide if last page
    }
});
