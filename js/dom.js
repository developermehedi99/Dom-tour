const sectionList = document.getElementById('fristSec');
const ul = document.createElement('ul');
const li = document.createElement('li');
li.innerText='biriyani';
ul.appendChild(li);

sectionList.appendChild(ul);


sectionList.innerHTML=`
<h1>dom dere baba</h1>
    <ul>
    <li>cheken biriyani</li>
    <li>gorur manso</li>
    <li>khasi</li>
    <li>boilar</li>
    </ul>
`
function makeGreenKor(){
    document.body.style.background='green';
}

document.getElementById('makeRed').addEventListener('click',function(){
    document.body.style.background='red';
})


// change korisma
const handleChangeText = document.getElementById('handleChange').addEventListener('click',function(){
   const chnageText= document.getElementById('default');
   chnageText.innerText='de chomok'
})