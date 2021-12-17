// 처음 스크롤 유도

carousel.addEventListener('scroll', () => {
    document.getElementsByClassName('alert')[0].classList.add('hidden')
})

// 더 보기 누르면 => 아래 스크롤

let moreshu = document.getElementById('moreBooks')
let bookList = document.getElementById('bookList')
let AlreadyRead = document.getElementById('AlreadyRead')
let moreBooks = document.getElementById('moreBooks')


moreshu.addEventListener('click', () => {
    bookList.style.padding = '0px 0px';
    bookList.style.overflow = 'scroll';
    bookList.classList.add('thicCer');
})

// 클릭하면 추천 책 화면

const commentbtn = document.getElementsByClassName('commentbtn')[0]
const greyscreen = document.getElementsByClassName('greyscreen')[0]

const twocomment = document.getElementsByClassName('comment')[0]

commentbtn.addEventListener('click', function () {
    greyscreen.style.display = 'flex'
    greyscreen.style.animation = 'commentpop 1.5s ease forwards'
    twocomment.style.animation = 'commentRight 1.5s ease forwards'
})

// comment 다는 거

const form = document.querySelector('form')
const upArrowContainer = document.getElementsByClassName('upArrowContainer')[0]
const input = document.getElementById('input')
let itemsArray = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : [];

localStorage.setItem('items', JSON.stringify(itemsArray))
const data = JSON.parse(localStorage.getItem('items'))


const limaker = (text) => {
    const li = document.createElement('li');
    li.textContent = text;
    commented.appendChild(li);
}


document.addEventListener('keydown', (event) => {
    if (event.keyCode == 13) {
        event.preventDefault();
        var el = document.activeElement;
        if (el.tagName == "INPUT") {
            // 제출 
            itemsArray.push(input.value)
            localStorage.setItem('items', JSON.stringify(itemsArray))
            limaker(input.value);
            input.value = '';
        }
    }
})
upArrowContainer.addEventListener('click', function (e) {
    e.preventDefault();
    itemsArray.push(input.value)
    localStorage.setItem('items', JSON.stringify(itemsArray))
    limaker(input.value);
    input.value = '';
})

data.forEach(item => {
    limaker(item)
})

let deletecomment = document.getElementsByClassName('deletecomment')[0]

deletecomment.addEventListener('click', function () {
    alert('good')
    localStorage.clear();
    console.log(localStorage.clear())
    while (commented.firstChild) {
        commented.removeChild(commented.firstChild)
    }
})
