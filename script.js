// *** Tour Section-adding and removing the "change" class name ***
let buttons=document.querySelectorAll('.navigation-button');
console.log(buttons)

function change(item){
    item.parentElement.parentElement.classList.toggle("change");
    //item.parentElement.parentElement is appropriate card
}
buttons.forEach((itemm)=>{
    itemm.addEventListener("click",()=>change(itemm));
})
// *** End of Tour Section ***

// *** Toggle Theme ***
const toggleSwitch=document.querySelector('input[type="checkbox"]');
const html=document.querySelector('html');
const nav=document.getElementById('navbar');
const toggleIcon=document.getElementById('toggle-icon');
const image1=document.getElementById('image1');
const image2=document.getElementById('image2');

function darkMode(){
    nav.style.backgroundColor='rgba(0,0,0,0.5)';
    toggleIcon.children[0].textContent='Dark Mode';
    toggleIcon.children[1].classList.remove('fa-sun');
    toggleIcon.children[1].classList.add('fa-moon');
    image1.src='img/travel_together_dark.svg';
    image2.src='img/world_dark.svg'
}
function lightMode(){
    nav.style.backgroundColor='rgba(255,255,255,0.5)';
    toggleIcon.children[0].textContent='Light Mode';
    toggleIcon.children[1].classList.remove('fa-moon');
    toggleIcon.children[1].classList.add('fa-sun');
    image1.src='img/travel_together_light.svg';
    image2.src='img/world_light.svg'
}
function switchTheme(event){
    if(event.target.checked==true){
        html.setAttribute('data-theme','dark')
        darkMode();
    }
    else{
        html.setAttribute('data-theme','light');
        lightMode();
    }
}
toggleSwitch.addEventListener('change',switchTheme);
// *** End of Toggle Theme ***