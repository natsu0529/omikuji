const dai=document.querySelector('#dai')
const chu=document.querySelector('#chu')
const kyo=document.querySelector('#kyo')


const min = 1 ;
const max = 3 ;

let a = Math.floor( Math.random() * (max + 1 - min) ) + min ;
console.log(a)

if(a===1){dai.setAttribute('id','selected');}
if(a===2){chu.setAttribute('id','selected');}
if(a===3){kyo.setAttribute('id','selected');}

const hiku = document.querySelector('#btn')
const result = document.querySelector('#selected')

hiku.addEventListener("click", () => {
    result.classList.remove('hidden')
    ;
})