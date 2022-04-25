console.log('"😁 This code is written by bappa 😁"');
console.log('"     ------variables in JavaScript------   "');
/*
  Variables in JavaScript :
  There are threee types of variables in javascript.
  They all are keywords.
  01.var type(global), 02.const type(local ), 03.let type.(block level scope)
*/
                // var type: global
                // var used in old javascript

 var nam = `'coder'bappa.`;
 console.log(nam);

 var youtube;
 youtube = 'gogabappa'
 console.log(youtube);
 
 var marks = 46;
 var mark ='46';
 console.log( "this is value not string  " ,marks);

 console.log(nam,youtube,marks,mark);

/*  #Rules for creating javascript variables:
       01. can not start with numbers.
       02. can start with letters, underscore(_), dollars($).
       03. Case-sensitive.
            i.camelCase
            ii.kabab-case
            iii.snake_case
            iv.PascalCase
*/
var city = 'Dhaka';
console.log(city);
// var _city1 = 'Dhaka';  //not used in morder javascript.
// var $city2 = 'Dhaka';   //not used in morder javascript.

                // const variable : local 

                // const variable : where the value is fixed
             //  Assignment to constant variable is not allowed in const type
             // when makimg const , we have to initialize it .

const fName = ' bappa';
// fName = 'saha';  // Uncaught TypeError: Assignment to constant variable.
console.log(fName);

                        //let variable: block level scope

                        // let used in moder javascipt replacement of var .
{
    let city ='Thakurgaon';
    console.log(city);   // output:Thakurgaon
    city = 'khulna';
    console.log(city);    // output:khulna
}
console.log(city);    // output:Dhaka

            // some cool things of array 
const array1 = [11,22,33,44,'bappa'];
array1.push(55);
console.log(array1); // [11, 22, 33, 44, "bappa", 55]
array1.pop();   
console.log(array1);  //  [11, 22, 33, 44, "bappa"]