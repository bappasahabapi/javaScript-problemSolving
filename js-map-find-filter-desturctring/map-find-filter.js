const products=[
    {id:1 , name:'water-bottol',price: 50, color: 'yellow'},
    {id:2 , name:'pen-bottol', price: 507, color: 'black'},
    {id:3 , name:'cock-bottol',price: 503, color: 'black'},
    {id:4 , name:'soft-bottol',price: 506, color: 'red'},
    {id:5 , name:'note-bottol',price: 507, color: 'pink'}
]

//TODO: map
console.log('Map:--------->')
const product =products.map(product=>console.log(product))
const productName=products.map(p=>p.name)
// console.log(productName)

//TODO: filter
console.log('Filter:-------->')
const price=products.filter(product=>product.price >506)
const blacks=products.filter(p=>p.color==='black')
console.log(blacks)
// console.log(price)

//TODO: find
console.log('Find:-------->')
const id =products.find(pId=>pId.id===2)
console.log(id)
