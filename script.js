// script.js
document.addEventListener('DOMContentLoaded', function() {
    var header = document.querySelector('.header');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) { // 50px以上スクロールした場合
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
});