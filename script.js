document.addEventListener('DOMContentLoaded', function() {
    const container = document.getElementById('text-container');
    const textElement = container.querySelector('.word');
    const words = textElement.textContent.split(' ');
    container.innerHTML = '';

    words.forEach((word, index) => {
        const span = document.createElement('span');
        span.className = 'word';
        span.textContent = word + (index !== words.length - 1 ? ' ' : '');
        span.style.animationDelay = `${index * 0.1}s`; // Задержка для каждого слова
        container.appendChild(span);
    });
});
