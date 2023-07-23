
const menuBtn = document.querySelector('#menu-btn');
const closeBtn = document.querySelector('#close-btn');
const menu = document.querySelector('nav .container ul');


menuBtn.addEventListener('click', () => {

    menu.style.display = 'block';
    menuBtn.style.display = 'none';
    closeBtn.style.display = 'inline-block';
})

//to hide menu
closeBtn.addEventListener('click', () => {
    menu.style.display = 'none';
    menuBtn.style.display = 'inline-block';
    closeBtn.style.display = 'none ';
})

const navItems = menu.querySelectorAll('li');

const changeActiveItem = () => {
    navItems.forEach(item => {
        const link = item.querySelector('a');
        link.classList.remove('active');

    })
}


navItems.forEach(item => {
    const link = item.querySelector('a');
    link.addEventListener('click', () => {     
        changeActiveItem();
        link.classList.add('active');
        
    })
})

//read more
const readMoreBtn = document.querySelector('.read-more');
const readMoreContent =document.querySelector('.read-more-content');

readMoreBtn.addEventListener('click',() =>{
    readMoreContent.classList.toggle('show-content');
    if(readMoreContent.classList.contains('show-content')){
        readMoreBtn.textContent="Show less";
    }else{
        readMoreBtn.textContent="Show more";

    }
})

//show/hide skill
const skillItem = document.querySelector('section.skills .skill');
const items = document.querySelector('.items');



skillItem.addEventListener('click', ()=>{
   items.classList.toggle('show-items');
    
})

const skill1= document.querySelector('section.skills #skil1');
const item1 = document.querySelector('#item1');



skill1.addEventListener('click', ()=>{
    
    item1.classList.toggle('show-item1');
    
})

const skill2= document.querySelector('section.skills #skil2');
const item2 = document.querySelector('#item2');



skill2.addEventListener('click', ()=>{
    
   item2.classList.toggle('show-item2');
    
})
// skillItem.forEach(items =>{
//    items.querySelector('.head').addEventListener('click',() =>{
    //         items.querySelector('.items').classList.toggle('show-items');
    //     })
    // })
    
    // foe service
    const service = document.querySelector('nav .container #services');
    service.addEventListener('click',() =>{
        alert.style.display='inline-block'
        alert("Sorry,Currently Not Offering Services....");
    })
function serviceNot(){
    alert("Sorry,Currently Not Offering Services....");

}