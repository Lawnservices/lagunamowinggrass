const laguna = document.getElementById('nav');
document.addEventListener('scroll', () => {
    var scroll_position = window.scrollY;
    if (scroll_position > 260) {
        nav.style.backgroundColor = 'green';
        
    } else {
        nav.style.backgroundColor = '#154256';
    }
});