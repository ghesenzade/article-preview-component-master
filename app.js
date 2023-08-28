const shareButton = document.querySelector('.share');
const iconsContainer = document.querySelector('.icons');

shareButton.addEventListener('click', () => {
    iconsContainer.classList.toggle('display');
    iconsContainer.style.display = 'flex';
});

document.addEventListener('click', (event) => {
    if (!iconsContainer.contains(event.target) && !shareButton.contains(event.target)) {
        iconsContainer.classList.remove('display');
        iconsContainer.style.display = 'none';
    }
});
