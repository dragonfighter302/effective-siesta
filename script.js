const getRandomInt = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const createStars = (type, quantity) => {
    for (let i = 0; i < quantity; i++) {
        const star = document.createElement('div');
        star.classList.add('star', `type-${type}`);
        star.style.left = `${getRandomInt(1, 99)}%`;
        star.style.bottom = `${getRandomInt(1, 99)}%`;
        star.style.animationDuration = `${getRandomInt(35, 200)}s`;
        document.body.appendChild(star);
    }
}

createStars(1, 60);
createStars(2, 25);
createStars(3, 30);