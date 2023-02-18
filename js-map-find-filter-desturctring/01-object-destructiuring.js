//TODO: EXAMPLE ONE
const students ={
    id:1,
    fname:"bappa da",
    address:"Thakurgaon",
    class:11,
    price:100,
    tag:{
        status:'Active'
    }
}
const {id,fname,address,}=students;
// console.log(id,fname,address)


const firm ={
    name: 'TIGER IT',
    established:1994,
    selis:{
        id:1,
        founder:'MD Malek',
        type:'level-1',
        tools:{web:'c-sharp', client:'foreign',currency:'$'}
},
    Technology:{frontend:'reactjs',backend:'spring-boot'},
};

const selis =firm.selis;
const founder =firm.selis.founder;
const client = firm.selis.tools.client;
const currency = firm?.selis?.tools?.currency;

const {name}=firm
const {type}=firm.selis;
const{web}=firm.selis.tools;

// console.log(selis)
// console.log(founder)
// console.log(web);
console.log(currency);

