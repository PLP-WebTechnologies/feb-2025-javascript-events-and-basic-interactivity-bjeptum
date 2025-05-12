document.addEventListener('DOMContentLoaded', function() {
    // Button to change text and color
    const changeButton = document.getElementById('changeButton');
    changeButton.addEventListener('click', function() {
        changeButton.textContent = 'You Clicked Me!';
        changeButton.style.backgroundColor = '#28a745'; // Changes the button color
    });

    // Image gallery: Change the image when the "Next Image" button is clicked
    const images = ['image1.jpg', 'image2.jpg', 'image3.jpg'];
    let currentImageIndex = 0;
    const currentImage = document.getElementById('currentImage');
    const nextImageButton = document.getElementById('nextImage');
    nextImageButton.addEventListener('click', function() {
        currentImageIndex = (currentImageIndex + 1) % images.length; // Loops back to the first image
        currentImage.src = images[currentImageIndex]; // Updates the image
    });

    // Tabs: Show content when a tab is clicked
    const tabs = document.querySelectorAll('.tab');
    const tabContents = document.querySelectorAll('.tab-content');
    tabs.forEach(tab => {
        tab.addEventListener('click', function() {
            // Hide all tab content
            tabContents.forEach(content => content.classList.remove('active'));
            // Show the content for the clicked tab
            const contentId = `content${tab.id.charAt(tab.id.length - 1)}`;
            document.getElementById(contentId).classList.add('active');
        });
    });

    // Form Validation
    const form = document.getElementById('myForm');
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the form from submitting immediately

        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        // Email validation
        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        if (!emailRegex.test(email)) {
            alert('Please enter a valid email address.');
            return; // Stops the form submission
        }

        // Password validation (at least 6 characters)
        if (password.length < 6) {
            alert('Password must be at least 6 characters long.');
            return; // Stops the form submission
        }

        alert('Form submitted successfully!');
    });
});