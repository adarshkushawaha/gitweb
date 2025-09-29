// <!-- <!-- <script> -->
//     <!-- console.log("printstar"); 
//     alert("error");
//     document.write("this is document")
//     console.warn("this is warn")
//     console.error("this is error") -->


// variables in javascript
// var num1 = 45
// var num= 75
// console.log(num1+num)    

// // String in javascript
// str = "here is a string ";
// str1 = "here is a another script ";
// console.log(str,str1);

// // object data type  in javascript
// var marks={
//     ravi:58,
//     sohan : 48,
//     shubham:95
// }
// console.log(marks)

// // The buliaan type datatype in javascript
// var a = true
// var b = false
// console.log(a,b)

// // the undefined variable in javascript
// var und;
// console.log(und)
// // it shows undefined

// // the null datatype in javascript
// var dtn  = null;
// console.log(dtn)



// There are two type of datatype
// Premetive datatype: undefine,null,number,string,boolean,symbol
// Reference datatype: Arrays , Object

// // The Array in javascripe

var arr=[1,5,8,6,"uiruri",35,"as",4];
// // To attrive each items of array
// arr.forEach(function(element){
// console.log(element)
// });

// // Method of array

// // length
// console.log(arr.length)
// //remove from last
// console.log(arr.pop())
// // Add to last
// arr.push(4)
// // To remove first element
// arr.shift()
// // To add element to first
// arr.unshift(1)
// // to Convert into string
// console.log(arr.toString())
// // Sort the array by dictionary
// console.log(arr.sort())


// // The String Method
// let str = "This is a string of a unique length"

// // Length
// console.log(str.length)
// // Index of first sub-string
// console.log(str.indexOf("a"))
// // Index of last sub-string
// console.log(str.lastIndexOf("a"))
// // Slice the string from - to -
// console.log(str.slice(2,9))
// // Replace the value from another string
// console.log(str.replace("unique", "great"))




// // The operators on javascript

// // Arthematic operator
// var a = 45
// var b = 10
// console.log(a+b)
// console.log(a-b)
// console.log(a*b)
// console.log(a/b)

// // Assigment operator : Update operator
// var a = 45;
// console.log(a);
// a=15
// console.log(a);
// a+=4;
// console.log(a);
// a-=7
// console.log(a);
// a*=4
// console.log(a);
// a/=5;
// console.log(a);

// // Comparison operator
// var x = 45;
// var y = 85;
// console.log(x==y)
// console.log(x!=y)
// console.log(x>=y)
// console.log(x<=y)
// console.log(x<=y)

// // Logical operator
// // Logical and
// console.log(true && true)
// console.log(true && false)
// console.log(false && true)
// console.log(false && false)

// // Logical or
// console.log(true || true)
// console.log(true || false)
// console.log(false || true)
// console.log(false || false)

// // Logical not
// console.log(!true);
// console.log(!false);



// // Function in javascript
// // DRY - Do not repeat yourself
// function avg(a,b){
//     return (a+b)/2
// }
// c1 = avg(4,8)
// console.log(c1)


// // Conditional operator 
// // the conditional operators are : if, else, else if

// var a = 18;
// if (a<18) {
//     console.assert("You cannot elligible for vote")
// }
// else if (a = 18){
//     console.log("Congrats! Now you are able to vote ")
// }
// else{
//     console.log("You are elligible for vote")
// }




// // loop in javascript

// var array = [1, 5, 8, 6, "uiruri", 35, 4];

// // For loop in java script
// for (let index = 0; index < array.length; index++) {
//     const element = array[index];    // const is use for never chanageble value
//     console.log(element)
// }
// // With the help of builten functiopn in javascript
// arr.forEach(function(element){
//     if (element>4) {
//         a = "Is greater than four"
//         console.log("the",element,a)
//     }
// });

// // the while loop
// let a = 0;   // It is use insteed of var its value is only on the function 
// while (a < array.length) {
//     console.log(array[a]);
//     a++;
// }

//  The use of break and continue 
// for (let index = 0; index < array.length; index++) {
//     const element = array[index];    // const is use for never chanageble value
//     if (index == 3) {
//         break // stop the loop
//     }
//     console.log(element);
// }
// for (let index = 0; index < array.length; index++) {
//     const element = array[index];    // const is use for never chanageble value
//     if (index == 3) {
//         break // skip the element from loop the loop
//     }
//     console.log(element);
// }



// //  date Method in javascript
// let myDate = new Date();
// console.log(myDate);
// // To get the date into time
// console.log(myDate.getTime());
// // To Get the year
// console.log(myDate.getFullYear());
// // To Get The rank of day
// console.log(myDate.getDay());
// //To get the minute
// console.log(myDate.getMinutes());
// // To get the hour
// console.log(myDate.getHours());





// // DOM MANUPLATION in javascript

// // To get the property of HTML page
// document
// // To select element by its id
// let elem = document.getElementById("click");
// console.log(elem)

// // To select element by the class
// let elemc = document.getElementsByClassName("di")
// console.log(elemc)
// // To change the style of element
// console.log(elemc[0].style.background = "yellow");
// // To Add the class in a element
// elemc.classList.add("bg")
// //  To remove the class from classList
// elemc.classList.remove("bg");
// // To get the html of an element 
// console.log(elemc.innerHTML)
// // To get the text of an element
// console.log(elem.innerText)

// // Get Element by tag name
// tn = document.getElementsByTagName("div")
// console.log(tn)
// //  To Add Html Element under a tag
// Ce = document.createElement('p')
// Ce.innerText = "This is Created by me"
// tn[0].appendChild(Ce);

// //  To Replace Html Element under a tag
// Ce2 = document.createElement('p','b')
// Ce2.innerText = "This Is the bold element that replace the other"
// tn[0].replaceChild(Ce2,Ce);

// // TO remove Child In JavaScript
// tn[0].removeChild(Ce)


// // More On Document
// document.title
// document.URL
// document.scripts
// document.links
// document.images
// document.domain


// // Document Query Selection
// // To Select one element 
// sel = document.querySelector('.di')
// console.log(sel)
// // To Select all element
// selAll = document.querySelectorAll('.di')
// console.log(selAll)



// // Event in javascript
// // There are two ways to control event
// // 1. Event add on button in the html tag
// // 2. Event add on button by the function from javascript file

// // 1. Event add on button in the html tag
// function clicked(){
//     console.log("The Button was clicked by html tag")
// }
// // 2. Event add on button by the function from javascript file
// window.onload = function(){
//     console.log("The document was loaded")
// }
// // On Click
// click.addEventListener("click",function(){
//     console.log("The Clicked by file")
// })
// // On Click up
// click.addEventListener("mouseup",function(){
//     console.log("The Clicked up from here by file")
// })
// // On mouseover
// click.addEventListener("mouseover",function(){
//     console.log("The mouse was over  by file")
// })
// //  On Mouse Out
// click.addEventListener("mouseout",function(){
//     console.log("The mouse was out from here by file")
// })


// // // // One Application on it
// selAll = document.querySelectorAll('.di')
// a = selAll[1];
// b = a.innerText
// console.log(selAll)
// // On Click
// click.addEventListener("mouseover",function(){
//     a.innerText = b
// })
// // On Click up
// click.addEventListener("mouseout",function(){
//     a.innerText = "click"
//     console.log(b)
// })


// Array Function in JavaScript

// sum = (a)=>{
//     return a;
// }


// //  SetTimeOut And SetTimeInterval
// func=()=>{
//     console.log("This is execute after 2second")

// }
// let time = 2000
// // Print After time 
// setTimeout(func,time);
// // TO stop setTimeOut
// a = setTimeout(func,time);
// clearTimeout(a)
// // Print after time interval
// setInterval(func,time);
// // To stop the time interval 
// clr = setInterval(func,time);
// clearInterval(b)



// // Local Storage in javaScript

// // Commands
// localStorage
// localStorage.setItem("name","Rohan")
// localStorage.getItem("name");
// localStorage.clear()



// JSON in javascript
obj= {name:"Rohan",length:'5'}
// To Change Object to string
jso = JSON.stringify(obj)
console.log(jso)
console.log(typeof jso)

// To Change String To Object
parsed = JSON.parse(`{"name":"Rohan","length":'5'}`) // Does Notb reqire Single quates
// NOTE : JSON only required double quotes("") to convert object
console.log(parsed)




// ECMA Script : The stander of javascript