function toggleMenu() {
    const menu = $(".menu-links")
    const icon = $(".hamburger-icon")
    menu.toggleClass("open")
    icon.toggleClass("open")
}

window.addEventListener('scroll', function() {
    var skillsSection = document.querySelector('#skills');
    var icons = skillsSection.querySelectorAll('.skill-icon');
    var sectionPosition = skillsSection.getBoundingClientRect().top;
    var screenPosition = window.innerHeight / 1.3;

    if (sectionPosition < screenPosition) {
        icons.forEach(function(icon) {
            icon.classList.add('pop');
        });
    }
});




