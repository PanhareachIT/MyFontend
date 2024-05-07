const ham = document.querySelector('.ham'); // Use querySelector since there's only one element expected
const nav = document.querySelector('.nav'); // Use querySelector since there's only one element expected

ham.addEventListener('click', () => {
    // alert("Heelo")
    nav.classList.toggle("active");
});