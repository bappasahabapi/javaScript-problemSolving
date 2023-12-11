const sections =document.querySelectorAll('section');
// console.log(sections);
for(const section of sections){
    // console.log(section);
    section.style.border='4px solid black';
    section.style.backgroundColor='lightBlue';
    section.style.fontSize='20px';
};


const fruitsContainer =document.getElementById('fruits-container');
console.log(fruitsContainer);
fruitsContainer.style.backgroundColor='lightGreen';

const fruitsTitle= document.getElementById('fruits-title');
fruitsTitle.style.textAlign='center';