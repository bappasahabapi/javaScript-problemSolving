/*
There are 2 types of data-types:
1.Primitive : (stack)--> 
        [string,numbers, boolean ,null,undifine, symbol]
2.Referance: (heap)-->
        [Arrays,object literals,functions, dates]

        => It works dinnamically means , we don't need to write the datatype.
*/
            // primitive data types :
            console.log('                                "Primitive data types"    ')

// string :

let bname = "bappa";
// var sname = ' saha';
console.log('my string is :'+bname );
console.log("Data type is :" +(typeof bname));

// Numbers :
let num = 32;
console.log( "number is : " +num);
console.log("Data type is :" +(typeof num));

// Boolean:
let isPlayer = true;
// console.log(  "Bappa is a player " )
console.log(isPlayer)
console.log("Data type is :" +(typeof isPlayer));

// Null :
let nullVar = null;
console.log(nullVar)
console.log("Data type is :" +(typeof nullVar));

// Undefined :
let undef = undefined;
console.log(undef);
console.log("Data type is :" +(typeof undef));

                    // Reference data types :
                    console.log('                                "Referance data types"    ');
// Array :
myarr = [1,2,3,4,5, false ,"string"];
console.log(myarr);
// console.table(myarr);
console.log("Data type is :" +(typeof myarr));


// Object literals :

let marks = {
    bappa: 90,
    doll : 91,
    burii: 23,
   ' mis mayaboti': 44
}
console.log(marks);
console.log("Data type is :" +(typeof marks));

function findName(params) {
    
}
console.log("Data type is :" +(typeof findName));

let date = new Date();
console.log("Data type is :" +(typeof date));