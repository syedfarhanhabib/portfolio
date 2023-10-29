// Introduction

const navItems = document.querySelectorAll('.nav-item');
const contentSections = document.querySelectorAll('.content');

navItems.forEach((item) => {
    item.addEventListener('click', () => {
        const section = item.getAttribute('data-section');
        contentSections.forEach((content) => {
            content.classList.remove('active');
        });
        document.getElementById(section).classList.add('active');
        navItems.forEach((navItem) => {
            navItem.style.fontWeight = '400';
        });
        item.style.fontWeight = '700';
    });
});


// Services

document.querySelectorAll(".elem").forEach(function (elem) {
    var rotate = 0;
    var diffrot = 0;

    elem.addEventListener("mouseleave", function (dets) {
        gsap.to(elem.querySelector("img"), {
            opacity: 0,
            ease: Power1,
            duration: 0.5,
        });
    });

    elem.addEventListener("mousemove", function (dets) {
        var diff = dets.clientY - elem.getBoundingClientRect().top;
        diffrot = dets.clientX - rotate;
        rotate = dets.clientX;
        gsap.to(elem.querySelector("img"), {
            opacity: 1,
            ease: Power1,
            top: diff,
            left: dets.clientX,
            rotate: gsap.utils.clamp(-20, 20, diffrot * 0.5),
        });
    });
});

