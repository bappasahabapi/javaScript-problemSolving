/*
 01.loop the Element
02. call the function by the element 
03. and the result is pushed in an array
*/


//TODO: 00
const numbers =[4,3,6,1,8]
const output=[]

for(n of numbers){
    const result=n*2;
    output.push(result)
}
console.log(output)

//TODO: 01
const numbersOne =[4,3,6,1,8]
const outputOne=[];

function double(number){
    return number*2;
}
for(n of numbersOne){
    const result =double(n);
    outputOne.push(result);
}
console.log(outputOne)

//Todo: 02. Map concept
const outputOneMap =numbersOne.map(double);
console.log(outputOneMap)



//Todo: 03. Map concept
const products=[
    {id:1 , name:'water-bottol',price: 50, color: 'yellow'},
    {id:2 , name:'pen-bottol', price: 507, color: 'black'},
    {id:3 , name:'cock-bottol',price: 503, color: 'black'},
    {id:4 , name:'soft-bottol',price: 506, color: 'red'},
    {id:5 , name:'note-bottol',price: 507, color: 'pink'}
]

const product =products.map(product=>console.log(product))
const product1 =products.forEach(product1=>console.log(product1))
const productName=products.map(p=>p.name)
console.log(productName)