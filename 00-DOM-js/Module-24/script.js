
//todo: append new child

// 1- where to add
const fruitsList =document.getElementById('fruits-list');

//2. what to be added
const li =document.createElement('li');
li.innerText='Goya';

// 3. add the child
fruitsList.appendChild(li);


//todo: add new section

const mainContainer =document.getElementById('main-container');
// console.log(mainContainer)
const section=document.createElement('section');
const h1 =document.createElement('h1');
h1.innerText='My food list:';
section.appendChild(h1)

const ul =document.createElement('ul');
const li1=document.createElement('li');
const li2=document.createElement('li');
const li3=document.createElement('li');
const hr =document.createElement('hr');


li1.innerText='Rice';
li2.innerText='Egg';
li3.innerText='Mutton';

ul.appendChild(li1);
ul.appendChild(li2);
ul.appendChild(li3);


section.appendChild(ul);
section.appendChild(hr);
mainContainer.appendChild(section);


// todo: best way to append section

// set inner html directly

const sectionGame =document.createElement('section');
sectionGame.innerHTML=`
            <h1>Fruit container </h1>
            <ul>
                <li>Cricket</li>
                <li>Football</li>
                <li>Hockey</li>
                <li>Carom</li>
            </ul>
            <hr>
`;
mainContainer.appendChild(sectionGame);