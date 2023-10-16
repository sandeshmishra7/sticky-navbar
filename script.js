var headerElem = document.querySelector('header');
window.addEventListener('scroll', fixheaderElem);

function fixheaderElem() {
    if(window.scrollY > 250) {
        headerElem.classList.add('active');
    } else {
        headerElem.classList.remove('active');
    }
}