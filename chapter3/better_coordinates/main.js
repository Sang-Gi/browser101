const vertical = document.querySelector('.X')
const horizontal = document.querySelector('.Y')
const target = document.querySelector('.target')
const tag = document.querySelector('.tag')

addEventListener('load', () => {
    
const targetRect = target.getBoundingClientRect();
const targetHalfWidth = targetRect.width / 2;
const targetHalfHeight = targetRect.height / 2;

document.addEventListener('mousemove', (e) => {
    const x = e.clientX;
    const y = e.clientY;

    // left, top을 이용하면 layout이 계속 재 렌더링됨.
    // 따라서 translate를 통해 성능 개선.
    // horizontal.style.left = `${x}px`;
    // vertical.style.top = `${y}px`;

    horizontal.style.transform = `translateX(${x}px)`;
    vertical.style.transform = `translateY(${y}px)`;

    // target.style.left = `${x}px`;
    // target.style.top = `${y}px`;
    // tag.style.left = `${x}px`;
    // tag.style.top = `${y}px`;
    target.style.transform = `translate(${x - targetHalfWidth}px, 
        ${y - targetHalfHeight}px)`;
    tag.style.transform = `translate(${x + 20}px, ${y + 20}px)`;
    tag.innerHTML = `${x}px, ${y}px`;
});

})