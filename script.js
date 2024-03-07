document.addEventListener('DOMContentLoaded', function() {
    var homeLink = document.querySelector('a[href="#home"]');
    homeLink.addEventListener('click', function(event) {
        event.preventDefault();
        document.getElementById('home').style.display = 'block';
        document.getElementById('menu').style.display = 'none';
        document.getElementById('about').style.display = 'none';
        document.getElementById('contact').style.display = 'none';
        document.getElementById('login-form').style.display = 'none';
    });

    var menuLink = document.querySelector('a[href="#menu"]');
    menuLink.addEventListener('click', function(event) {
        event.preventDefault();
        document.getElementById('home').style.display = 'none';
        document.getElementById('menu').style.display = 'block';
        document.getElementById('about').style.display = 'none';
        document.getElementById('contact').style.display = 'none';
        document.getElementById('login-form').style.display = 'none';
    });

    var aboutLink = document.querySelector('a[href="#about"]');
    aboutLink.addEventListener('click', function(event) {
        event.preventDefault();
        document.getElementById('home').style.display = 'none';
        document.getElementById('menu').style.display = 'none';
        document.getElementById('about').style.display = 'block';
        document.getElementById('contact').style.display = 'none';
        document.getElementById('login-form').style.display = 'none';
    });

    var contactLink = document.querySelector('a[href="#contact"]');
    contactLink.addEventListener('click', function(event) {
        event.preventDefault();
        document.getElementById('home').style.display = 'none';
        document.getElementById('menu').style.display = 'none';
        document.getElementById('about').style.display = 'none';
        document.getElementById('contact').style.display = 'block';
        document.getElementById('login-form').style.display = 'none';
    });

    var loginBtn = document.getElementById('login-btn');
    loginBtn.addEventListener('click', function(event) {
        event.preventDefault();
        toggleLoginForm();
    });

    function toggleLoginForm() {
        var loginForm = document.getElementById('login-form');
        if (loginForm.style.display === 'none' || loginForm.style.display === '') {
            loginForm.style.display = 'block';
        } else {
            loginForm.style.display = 'none';
        }
    }
});
