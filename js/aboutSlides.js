

document.addEventListener('DOMContentLoaded', function() {
    // Находим все элементы с классом .about-slide__info-btn
    const buttons = document.querySelectorAll('.about-slide__info-btn');

    // Добавляем обработчик события click для каждого элемента
    buttons.forEach(function(button) {
        button.addEventListener('click', function() {
            // Добавляем класс .active текущему элементу
            button.classList.toggle('active');

            // Добавляем класс .active родительскому элементу
            const parent = button.closest('.about-slide__info');
            if (parent) {
                parent.classList.toggle('active');
            }
        });
    });
});