const burger = document.querySelector('.burger');
const header = document.querySelector('.header');
const headerMenu = document.querySelector('.header__menu');
const headerLinks = document.querySelectorAll('.header__list-item');
document.addEventListener('click', burgerMenu);
function burgerMenu(event){
    if(event.target.closest('.burger')){
        burger.classList.toggle('_active')
        header.classList.toggle('_active')
    };
    if(!event.target.closest('.burger')){
        burger.classList.remove('_active')
        header.classList.remove("_active")
        document.body.classList.add("_lock")
    }
    if(burger.classList.contains('_active')){
        headerMenu.classList.add('_active')
        header.classList.add("_active")
        document.body.classList.add("_lock")
    }
    if(!burger.classList.contains('_active')){
        headerMenu.classList.remove('_active')
        header.classList.remove("_active")
        document.body.classList.remove("_lock")
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const counters = document.querySelectorAll('.about__column-card-num');

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counter = entry.target;
                const targetCount = parseInt(counter.getAttribute('data-count'), 10);
                const duration = 2000; // Длительность анимации в миллисекундах
                const step = targetCount / (duration / 16); // 16 миллисекунд - это примерно 60 кадров в секунду

                let currentCount = 0;

                const updateCounter = () => {
                    currentCount += step;
                    if (currentCount < targetCount) {
                        counter.firstChild.textContent = Math.ceil(currentCount);
                        requestAnimationFrame(updateCounter);
                    } else {
                        counter.firstChild.textContent = targetCount;
                    }
                };

                updateCounter();
                observer.unobserve(counter);
            }
        });
    }, {
        threshold: 0.5 // Элемент считается видимым, когда 50% его высоты попадает в видимую область
    });

    counters.forEach(counter => {
        observer.observe(counter);
    });
});
