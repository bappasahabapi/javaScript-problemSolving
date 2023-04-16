const student = {
    name:'bappa', id:101, address:'Thakurgaon', phone:'0140444545',
    color:'dark', email:'bapi@gmail.com'
};
const {name,id, email, phone} = student;
// console.log(student);
// const name = student.name;
// const id = student.id;
// const email = student.email;

const company ={
        sim : 'gp',
        ceo:'bappa da',
        website:{
            Worker:22,
            framework:'react js',
            teck:{
                first:'html',
                second:'css',
                third: 'js'
            },
            country:'Bangladesh'
        },
        branch:{city:'dhaka',id:133}

};
const {first ,second} = company.website.teck;

console.log(company.website.teck);
