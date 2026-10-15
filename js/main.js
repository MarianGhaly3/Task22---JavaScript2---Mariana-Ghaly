
// 1- console.log(z);
// 2- alert (z);
// 3- document.getElementById("demo").innerHTML = z;
// 4- document.writeln(z);

// =================================================

// variable ===> متغير اقدر اخزن فيه قيمة او قيم اقدر استخدمها اكتر من مره 

//  type [name] = value  ---> how to declare variable )
// ===>  Type  ===> var, let, const
// ===>  Name  ===> rules for name :
//                     * dont start with no. 
//                     * not contain special character exept $ _
//                     * not contain any reserved word for JS 
//                     * unique name preferable 
// ===>  Value ===> data type 

// =================================================

// Data Types :

// var x =5;         // number  "integer"
// var y =3.2;       // number  "float"
// var z ="ahmaed";  // string
// var w ="3";       // string
// var t =true;      // boolean
// var x =false;     // boolean

// console.log(typeof  );  // to show the type of data 

// =================================================

// array  ====> can store more than 1 value 

// var names = ["name1" , "name2" , 3 , "name3" , true , 5.2 ];
// console.log(names);          // all values 
// console.log(typeof names);   // object  
// console.log(names[2]);       // value of no 2 only [3]
// console.log(names[10]);      // undefined

// not defined  ===> error, stops the script 
// undefined    ===> name placed, but value not , dont stop the script
// null         ===> 

    // var person = {
    //     firstName: "fName",
    //     lastName: "lName",
    //     salary: 50,
    //     age: 30,
    //     isAdmin: true
    // }

// =================================================
// =================================================

// if condition 

// example : 

// var x = prompt("what is the price?");

// if ( x > 20 ) {
//     alert("expensive");
// } else if ( x == 20 ) {
//     alert("cool");
// } else if ( x < 20 ) {
//     alert("cheap");
// } else {
//     alert("Not a Number");
// }

// =================================================
// =================================================

// function  ===> block of code statment
//           ===> reuse

// example : 

// function getData(fname, color) { //parameter
//     console.log("my name is" + fname + "and my color is " + color );

// }

// getData("mary", "pink"); // argument
// getData(); 
// getData("fname2", "red"); 

// rules to make any function event -- > 


// function convertValue() {
//     var dollar = document.getElementById("dollar").value;
//     var result = document.getElementById("result");

//     result.innerHTML = "EGP = " + dollar * 50 ;
//     return false;
// } 

function convertValue() {
    var dollar = document.getElementById("dollar").value;
    var result = document.getElementById("result");

    if(dollar==""){
        result.innerHTML = 'Please Enter Value';
    }else if (isNaN(dollar)){
        result.innerHTML = 'Please Enter Number not Text';
    }else if (dollar<0){
        result.innerHTML = 'Please Enter Positive Number';
    }else if (dollar==0){
        result.innerHTML = 'Please Enter Number rather than zero';
    } else {
        result.innerHTML = "EGP = " + dollar * 50 ;
    }

    return false;

} 
