function checkText() {
    const secretInput = document.getElementById('secret-input');
    const mainContent = document.getElementById('main-content');
    const overlay = document.getElementById('overlay');
    const correctText = "secret"; // The required text to unlock

    if (secretInput.value.toLowerCase() === correctText) {
        // Remove blur class from main content
        mainContent.classList.add('unblurred');
        // Hide the overlay
        overlay.style.display = 'none';
    } else {
        alert("Incorrect text. Try again.");
    }
}
