

/* Authentication
let signup = document.querySelector(".signup");
let login = document.querySelector(".login");
let slider = document.querySelector(".slider");
let formSection = document.querySelector(".form-section");
 

signup.addEventListener("click", () => {
    slider.classList.add("moveslider");
    formSection.classList.add("form-section-move");
});
 

login.addEventListener("click", () => {
    slider.classList.remove("moveslider");
    formSection.classList.remove("form-section-move");
}); */




document.addEventListener('DOMContentLoaded', () => {
    const loginBtn = document.querySelector('.login');
    const signupBtn = document.querySelector('.signup');
    const loginBox = document.querySelector('.login-box');
    const signupBox = document.querySelector('.signup-box');
    const slider = document.querySelector('.slider');
    
    // Initially show login form and hide signup form
    loginBox.style.display = 'block';
    signupBox.style.display = 'none';

    // Toggle to Login
    loginBtn.addEventListener('click', () => {
        loginBox.style.display = 'block';
        signupBox.style.display = 'none';
        slider.style.transform = 'translateX(0)';
    });

    // Toggle to Signup
    signupBtn.addEventListener('click', () => {
        signupBox.style.display = 'block';
        loginBox.style.display = 'none';
        slider.style.transform = 'translateX(100%)';
    });
});
 