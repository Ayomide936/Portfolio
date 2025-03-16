const navbar = document.getElementById("navbar")

window.addEventListener("scroll",() => {
    if (window.scrollY > 50) {
        navbar.classList.remove("transparent")
        navbar.classList.add("bgcolor")
    }
    else {
        navbar.classList.remove("bgcolor")
        navbar.classList.add("transparent")
    }
})
const fadeInSections = document.querySelectorAll(".fade-in-section")

function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return rect.top <= window.innerHeight && rect.bottom >= 0;
}

window.addEventListener("scroll", () => {
    fadeInSections.forEach(section => {
        if (isInViewport(section)) {
            setTimeout(() => section.classList.add('visible'),500)
        }
        else {
            setTimeout(() => section.classList.remove('visible'),500)
        }
    })
})