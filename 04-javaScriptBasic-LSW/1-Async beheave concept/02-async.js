
//todo: 82-Asynchoronous Behavior

/* 
// example -1
function hello(){
  console.log('Line 1 code');
}

console.log('Line 2 code');
console.log('Line 3 code');
hello();

 */


//exmaple-2
console.log('line 1 code ');
setTimeout(function(){
  console.log('Line 2 code ');
},3000);

setInterval(function(){
  console.log('calling setInterval by 2s')
},2000)

console.log('last line code');