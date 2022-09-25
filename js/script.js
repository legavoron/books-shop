// -------------------------- Toogle Menu --------------

let widthWindow = document.documentElement.clientWidth;
let toogleMenu = document.querySelector('.toogleMenu');
let nav = document.querySelector('.nav');
let burger = document.querySelector('.title_burger');

if (widthWindow < 620) {
    nav.classList.add('is-hidden_nav');
}

let isHiddenToogle = true;

burger.addEventListener('click', checkIsHiddenToogleMenu);

function checkIsHiddenToogleMenu () {
    if (isHiddenToogle) {
        showToogle();
    } else {
        hiddenToogle()
    }
    isHiddenToogle = !isHiddenToogle;
}

function showToogle () {
    toogleMenu.classList.remove('is-hidden_toogleMenu');
    toogleMenu.classList.add('is-active_toogleMenu');

    nav.classList.remove('is-hidden_nav');
    nav.classList.add('is-active_nav');
}

function hiddenToogle () {
    toogleMenu.classList.remove('is-active_toogleMenu');
    toogleMenu.classList.add('is-hidden_toogleMenu');

    nav.classList.remove('is-active_nav');
    nav.classList.add('is-hidden_nav');
}

// --------------------------- Pages ------------------
    const btnPage1 = document.querySelector('#page1');
    const btnPage2 = document.querySelector('#page2');
    const btnPage3 = document.querySelector('#page3');

    const btnNextPages = document.querySelector('#arrowNextPage');
    btnNextPages.addEventListener('click', nextPages);

    const btnLastPages = document.querySelector('#arrowLastPage');
    btnLastPages.addEventListener('click', lastPages);

    let currentPage = 1;

    let pagesNums = [btnPage1, btnPage2, btnPage3];
    pagesNums.forEach(pagesNum => {
        pagesNum.addEventListener('click', ()=> {
            changePage(pagesNum.innerHTML)
        })
    })


const pagesInfo = [
    {
        heading: 'Учебники и книги для школьников',
        img: 'title_1',
        description: 'Здесь должен быть пояснительный текст Можно про издательство, мжно написать цену “от”..'
    },
    {
        heading: 'Учебные пособия для учителей и школ',
        img: 'title_2',
        description: 'Здесь должен быть пояснительный текст Можно про издательство, мжно написать цену “от”..'
    },
    {
        heading: 'Литература для педагогов и воспитателей детсадов',
        img: 'title_3',
        description: 'Здесь должен быть пояснительный текст Можно про издательство, мжно написать цену “от”..'
    },
]

function showPage() {
    
    let pageHeading = document.querySelector('.title_heading');
    let pageDescription = document.querySelector('.title_value_description');
    let pageImg = document.querySelector('.title_img');

    pageHeading.innerHTML = pagesInfo[currentPage -1].heading;
    pageDescription.innerHTML = pagesInfo[currentPage -1].description;
    pageImg.src = `./img/title_${currentPage}.svg`;

    
    activeNumPages();
}

function changePage(num) {
    currentPage = num;
    showPage();
}

function nextPages() {
    console.log(currentPage)
    if (+currentPage === 3) {
        currentPage = 1
    } else {
        currentPage++;
    }
    showPage();
}

function lastPages() {
    if (+currentPage === 1) {
        currentPage = 3
    } else {
        currentPage--;
    }
    showPage();
}

function activeNumPages() {
    pagesNums.forEach(pagesNum => {
        if (pagesNum.innerHTML == currentPage) {
            pagesNum.classList.add('is-active_numPages');
        } else {
            pagesNum.classList.remove('is-active_numPages');
        }
    });
}

// ----------------------- Inst Images --------------

let currentInstImage = -1;
let instImages = document.querySelectorAll('.instagram_img_box');

const btnLastInst = document.querySelector('#btnLastInst');
btnLastInst.addEventListener('click', lastInstImage);

const btnNextInst = document.querySelector('#btnNextInst');
btnNextInst.addEventListener('click', nextInstImage);

function activeInstImg() {
    console.log(currentInstImage)
    instImages.forEach((img, i) => {
        if (i == currentInstImage) {
            img.classList.add('is-active_instImg')
        } else {
            img.classList.remove('is-active_instImg')
        }
    })
}

function nextInstImage() {
    if (currentInstImage === 2) {
        currentInstImage = 0
    } else {
        currentInstImage++;
    }
    activeInstImg();
}

function lastInstImage() {
    if (currentInstImage <= 0) {
        currentInstImage = 2
    } else {
        currentInstImage--;
    }
    activeInstImg();
}

// --------------------------- Partners -------------

const partnersList = [
    ['par_0', 'par_1', 'par_2'], 
    ['par_3', 'par_4', 'par_5'],
    ['par_6', 'par_7', 'par_8'],
]

let currentPartnersPage = 1;

const btnPartnersPage1 = document.querySelector('#partners1');
const btnPartnersPage2 = document.querySelector('#partners2');
const btnPartnersPage3 = document.querySelector('#partners3');

const btnNextPartnersPages = document.querySelector('#arrowNextPar');
btnNextPartnersPages.addEventListener('click', nextPartnersPages);

const btnLastPartnersPages = document.querySelector('#arrowLastPar');
btnLastPartnersPages.addEventListener('click', lastPartnersPages);


let pagesPartnersNums = [btnPartnersPage1, btnPartnersPage2, btnPartnersPage3];

pagesPartnersNums.forEach(pagesNum => {
    pagesNum.addEventListener('click', ()=> {
        changePartnersPage(pagesNum.innerHTML)
    })
})

function showPartnersPage() {
    let partnersImagesList = document.querySelectorAll('.partners_image');

    let num = 0;
    partnersImagesList.forEach(img => {
        if (num === 3) {
            num = 0
        }

        img.src = `./img/${partnersList[currentPartnersPage -1][num]}.jpg`;
        num++;
        
    })
    activePartnersNumPages();
}

function changePartnersPage(num) {
    currentPartnersPage = +num;
    showPartnersPage();
}

function nextPartnersPages() {
    if (+currentPartnersPage === 3) {
        currentPartnersPage = 1
    } else {
        currentPartnersPage++;
    }
    showPartnersPage();
}

function lastPartnersPages() {
    if (+currentPartnersPage === 1) {
        currentPartnersPage = 3
    } else {
        currentPartnersPage--;
    }
    showPartnersPage();
}

function activePartnersNumPages() {
    pagesPartnersNums.forEach(pagesNum => {
        if (pagesNum.innerHTML == currentPartnersPage) {
            pagesNum.classList.add('is-active_numPages');
        } else {
            pagesNum.classList.remove('is-active_numPages');
        }
    });
}