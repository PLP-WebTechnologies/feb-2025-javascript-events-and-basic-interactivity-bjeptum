document.addEventListener('DOMContentLoaded', function () {
    // 1. Button click event
    const changeButton = document.getElementById('changeButton');
    changeButton.addEventListener('click', function () {
        changeButton.textContent = 'You Clicked Me!';
        changeButton.style.backgroundColor = '#28a745';
    });

    // 2. Hover effect with double-click secret
    changeButton.addEventListener('dblclick', function () {
        alert('Secret double-click activated! 🎉');
    });

    // 3. Image Gallery
    const images = ['image1.jpg', 'image2.jpg', 'image3.jpg'];
    let currentImageIndex = 0;
    const currentImage = document.getElementById('currentImage');
    const nextImageButton = document.getElementById('nextImage');

    nextImageButton.addEventListener('click', function () {
        currentImage.classList.add('fade');
        setTimeout(() => {
            currentImageIndex = (currentImageIndex + 1) % images.length;
            currentImage.src = images[currentImageIndex];
            currentImage.classList.remove('fade');
        }, 300);
    });

    // 4. Tabs
    const tabs = document.querySelectorAll('.tab');
    const contents = document.querySelectorAll('.tab-content');

    tabs.forEach(tab => {
        tab.addEventListener('click', function () {
            tabs.forEach(t => t.classList.remove('active'));
            contents.forEach(c => c.classList.remove('active'));

            tab.classList.add('active');
            const contentId = `content${tab.id.slice(-1)}`;
            document.getElementById(contentId).classList.add('active');
        });
    });

    // 5. Form validation
    const form = document.getElementById('myForm');
    const passwordInput = document.getElementById('password');
    const feedback = document.getElementById('passwordFeedback');

    passwordInput.addEventListener('input', function () {
        if (passwordInput.value.length < 8) {
            feedback.textContent = 'Password must be at least 8 characters.';
        } else {
            feedback.textContent = '';
        }
    });

    form.addEventListener('submit', function (e) {
        e.preventDefault();
        const email = document.getElementById('email').value;
        const password = passwordInput.value;

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailRegex.test(email)) {
            alert('Invalid email format.');
            return;
        }

        if (password.length < 8) {
            alert('Password must be at least 8 characters.');
            return;
        }

        alert('Form submitted successfully!');
    });

    // 6. Keypress detection
    const keyInfo = document.getElementById('keyInfo');
    document.addEventListener('keydown', function (event) {
        keyInfo.textContent = `You pressed: ${event.key}`;
    });
});