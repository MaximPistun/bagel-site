document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll(".hero__info-btn");
    const slides = document.querySelectorAll(".hero__info-slide");

    buttons.forEach((button) => {
        button.addEventListener("click", () => {
            const target = button.getAttribute("data-target");

            // Обновляем активную вкладку кнопки
            buttons.forEach((btn) => btn.classList.remove("active"));
            button.classList.add("active");

            // Обновляем слайды
            slides.forEach((slide) => {
                if (slide.getAttribute("data-content") === target) {
                    slide.classList.add("active");
                    slide.classList.remove("exiting");
                } else if (slide.classList.contains("active")) {
                    slide.classList.add("exiting");
                    slide.classList.remove("active");
                } else {
                    slide.classList.remove("exiting");
                }
            });
        });
    });
});
