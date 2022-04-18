const items = document.querySelector('.content');
const input = document.querySelector('.itemInput');
const itemBtn = document.querySelector('.itemBtn');

function onAdd() {
    // 1. 사용자가 입력한 텍스트 받아옴.
    const text = input.value;
    if(text === '') {
        input.focus();
        return;
    }
    // 2. 새로운 아이템을 생성. (텍스트 + 삭제버튼)
    const item = createItem(text);
    // 3. 컨테이너안에 새로 만든 아이템 추가.
    items.appendChild(item);
    // 4. 인풋을 초기화 한다.
    input.value = '';
    input.focus();
}

function createItem(text) {
    const itemRow = document.createElement('li');
    itemRow.setAttribute('class', 'itemRow');

    const item = document.createElement('div');
    item.setAttribute('class', 'item');

    const name = document.createElement('span');
    name.setAttribute('class', 'itemSpan');
    name.innerText = text;

    const deleteBtn = document.createElement('button');
    deleteBtn.setAttribute('class', 'deleteBtn');
    deleteBtn.innerHTML = '<i class="fas fa-trash"></i>';
    deleteBtn.addEventListener('click', () => {
        items.removeChild(itemRow);
    })

    const itemDivider = document.createElement('div');
    itemDivider.setAttribute('class', 'itemLine');

    item.appendChild(name);
    item.appendChild(deleteBtn);

    itemRow.appendChild(item);
    itemRow.appendChild(itemDivider);
    return itemRow;
}

itemBtn.addEventListener('click', () => {
    onAdd();
});

input.addEventListener('keypress', (e) => {
    onAdd();
})