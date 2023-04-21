//todo: 51- this keyword

/*
 Rules:
    01. Implicit binding
    02. Explicit binding
    03. Explicit binding
    04. window binding
 */



 var printPlayerName =function(name){
    console.log(name)
}
printPlayerName() ; 


//todo: ---> 01. Implicit binding

 var sakib= {
    name:"Sakib",
    age:35,
    printPlayerName:function(name){
        console.log(name);
        console.log(this.name);
    }
}
sakib.printPlayerName();




var printPlayerNameFunction =function(obj){
    obj.printPlayerName=function(){
        console.log(this.name)
    }
};

var rakib ={
    name:"RAKIB",
    age:40,
};
var tamim ={
    name:"TAMIM",
    age:30,
};

printPlayerNameFunction(rakib);
printPlayerNameFunction(tamim);

rakib.printPlayerName();
tamim.printPlayerName(); 




var personFun =function(name, age){
    return{
        name:name,
        age:age,
        printName:function(){
            console.log(this.name,this.age);
        },
        father:{
            name:"Mr. Rahim dad",
            printName:function(){
                console.log(this.name)
            }
        }
    }
};

var sakib= personFun('sakib',35);
sakib.printName();
sakib.father.printName();



//todo: Explicite Binding


var printName= function (){
    console.log(this.name)
};

var sakib= {
    name:"Sakib",
    age:35,
    // printPlayerName:function(name){
    //     console.log(name);
    //     console.log(this.name);
    // }
};

printName.call(sakib)


//todo: new Binding

function player(name,age){
    //let this =Object.create(null)
    this.name =name;
    this.age =age;
    console.log(`${this.name} is ${this.age} years old.`);

    //return this;
};

var obj= new player("Sakib",34);


//todo: window Binding