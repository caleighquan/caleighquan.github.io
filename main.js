// Animation of the buttons when hovered
const buttons = document.querySelectorAll('.intro-buttons .button');

buttons.forEach(button => {
    button.addEventListener('mouseenter', () => {
        button.style.transform = 'scale(1.05)';
        button.style.transition = 'transform 0.2s';
    });

    button.addEventListener('mouseleave', () => {
        button.style.transform = 'scale(1)';
    });
});

// Logo animation when hovering
const logo = document.querySelector('.header-logo img');

logo.addEventListener('mouseenter', () => {
    logo.style.transform = 'rotate(-10deg)';
    logo.style.transition = 'transform 0.15s';
    setTimeout(() => {
        logo.style.transform = 'rotate(10deg)';
        setTimeout(() => {
            logo.style.transform = 'rotate(0deg)';
        }, 150);
    }, 150);
});