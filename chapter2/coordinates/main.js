const vertical = document.querySelector('.X')
const horizontal = document.querySelector('.Y')
const target = document.querySelector('.target')
const tag = document.querySelector('.tag')

document.addEventListener('mousemove', (e) => {
    const x = e.clientX;
    const y = e.clientY;

    horizontal.style.left = `${x}px`;
    vertical.style.top = `${y}px`;
    target.style.left = `${x}px`;
    target.style.top = `${y}px`;
    tag.style.left = `${x}px`;
    tag.style.top = `${y}px`;

    tag.innerHTML = `${x}px, ${y}px`;
});
