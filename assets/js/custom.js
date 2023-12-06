const body = document.getElementsByTagName('body');
const navIcon = document.getElementById('nav_icon');
const clseBtn = document.getElementById('clseBtn');

document.addEventListener("DOMContentLoaded", function () {
    // const navbar = document.getElementById("navbar");
    const mobileBar = document.getElementById("mobile_headr");

    function updateVisibility() {
        if (window.innerWidth < 867) {
            // navbar.style.display = "none";
            mobileBar.style.display = "block";
        } else {
            // navbar.style.display = "block";
            mobileBar.style.display = "none";
        }
    }

    // Initial check on page load
    updateVisibility();

    // Update visibility on window resize
    window.addEventListener("resize", updateVisibility);

    // open Menu bar
    navIcon.addEventListener('click', () => {
        console.log('hello')
        mobileBar.style.left = 0;
        // mobileBar.style.top = 0;
        mobileBar.style.opacity = 1;
        mobileBar.style.visibility = "visible";
    })

    clseBtn.addEventListener('click', () => {
        mobileBar.style.left = "-100%";
        // mobileBar.style.top = "-100%";
        mobileBar.style.opacity = 0
        mobileBar.style.visibility = "hidden";
    })
});


// signUp form functionality

document.addEventListener('DOMContentLoaded', function () {
    const passwordInput = document.getElementById('password');
    const  passwordToggle = document.getElementById('password-toggle');

    passwordToggle.addEventListener('click', function () {
        if (passwordInput.type === 'password') {
            passwordInput.type = 'text';
            passwordToggle.textContent = 'Hide';
        } else {
            passwordInput.type = 'password';
            passwordToggle.textContent = 'Show';
        }
    });
});