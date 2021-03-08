const imageList = document.querySelector('.image-list');
const imageListItems = document.querySelectorAll('.image-list > li');
const btns = document.querySelectorAll('.view-options button');
const active = 'active';
const listView = 'list-view';
const gridView = 'grid-view';
const dNone='d-none';

function btnFc(){
        const parent = this.parentElement;
        document.querySelector('.view-options .active').classList.remove(active);
        parent.classList.add(active);

        if(parent.classList.contains('show-list')){
            parent.previousElementSibling.previousElementSibling.classList.add(dNone);
            imageList.classList.remove(gridView);
            imageList.classList.add(listView);
        }else{
            parent.previousElementSibling.classList.remove(dNone);
            imageList.classList.remove(listView);
            imageList.classList.add(gridView);
        }
    }

btns.forEach((btn)=>{btn.addEventListener('click',btnFc)});

// 리스트 너비 조절 range
const rangeInput = document.querySelector("input[type='range']");
rangeInput.addEventListener('input',function(){
    document.documentElement.style.setProperty('--minRangeValue',`${this.value}px`);
});

// search 검색어
const captions = document.querySelectorAll(".image-list figcaption p:nth-child(2)");
const myArray = [];
let counter = 1; 
for (const caption of captions){
    myArray.push({
        id:counter++,
        text:caption.textContent
    });
}

console.log(myArray);

const searchInput = document.querySelector('input[type="search"]');
const photosCounter = document.querySelector('.toolbar .counter span');

function keyupHandler(){
    for(const item of imageListItems){
        item.classList.add(dNone);
    }
    const keywords = this.value;

    const filteredArray = myArray.filter( el => el.text.includes(keywords));
    console.log(filteredArray);

    if(filteredArray.length > 0 ){
        for(const el of filteredArray){
            document.querySelector(`.image-list > li:nth-child(${el.id})`).classList.remove(dNone);
        }
    }
    photosCounter.textContent = filteredArray.length;
}

searchInput.addEventListener("keyup",keyupHandler);
//keydown, keypress
